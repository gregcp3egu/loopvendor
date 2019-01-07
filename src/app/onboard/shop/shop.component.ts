import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  main_loading: boolean;
  error;
  profile = {};
  form: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, private as: AuthService, private route: ActivatedRoute,
    public loadingController: LoadingController, private router: Router
  ) { 
    
  }

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

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 10000,
      keyboardClose: true,
      message: 'checking for your profile',
      translucent: true,
    });
    return await loading.present();
  }

  signout(){
    this.as.signOut();
  }


}
