import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProfileService } from '../../owner-profile/profile.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ ToastController, ProfileService]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder,
    private as: AuthService, 
    public toastController: ToastController,
    private router: Router,
    private ps: ProfileService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    this.loading = true;
    this.as.emailLogin(this.form.value.email, this.form.value.password).then(
      d => {
        
        if (d.user.emailVerified) {
          
          this.router.navigate(['/onboard'])

        } else {
          this.presentToast('Please verify your email to use rate your leader');
          this.as.afAuth.auth.signOut();
          this.loading = false;
        }

      }
    ).catch(
      e => {
        // this.ts.show('invalid email or password')
        this.presentToast('invalid email or password')
        this.loading = false;

      }
    )
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 4000,
      position: 'top',
      cssClass: 'bgdark'
    });
    toast.present();
  }



}
