import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss'],
  providers: [ToastController]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, 
    private as: AuthService, public toastController: ToastController) { 
      this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  signUp(){
    this.loading = true;
    this.as.emailSignUp(this.form.value.email, this.form.value.password).then(
      d => {
        d.user.sendEmailVerification().then(
          data => {
            this.presentToast(`Welcome, a verification email has been sent to ${this.form.value.email}`)
            this.as.afAuth.auth.signOut();
            this.loading = false;
          }
        )
      }
    ).catch(
      e => {
        this.presentToast(e.message)
        this.loading = false;
      }
    )
  }


  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 4000,
      position: 'top'
    });
    toast.present();
  }

}
