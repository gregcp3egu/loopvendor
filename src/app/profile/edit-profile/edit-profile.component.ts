import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  main_loading: boolean;
  error;
  profile = {};
  form: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    public loadingController: LoadingController, 
    private router: Router,
    private as: AuthService
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_address: ['', Validators.required],
      website: [''],
      facebook_link: [""],
      twitter_link: [""],
      name: [""],
      address: [""],
      number: [""],
      street: [""],
      postcode: [""],
      country: [""],

    })
  }

  logOut(){
    this.as.signOut()
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 10000,
      keyboardClose: true,
      message: 'checking for your profile',
      translucent: true,
    });
    return await loading.present();
  }

}

