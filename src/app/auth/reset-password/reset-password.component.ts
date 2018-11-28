import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../login/login.component.scss'],
  providers: [ ToastController ]
})
export class ResetPasswordComponent implements OnInit {

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
      email: ['', [Validators.required, Validators.email]]
    })
  }

  signUp(){
    this.loading = true;
    this.as.emailResetPassword(this.form.value.email).then(
      d => {
        this.presentToast(`Password reset email sent to ${this.form.value.email}`)
        this.loading = false;
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
      position: 'top',
      cssClass: 'bgdark'
    });
    toast.present();
  }

}
