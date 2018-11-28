// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.page.html',
//   styleUrls: ['./products.page.scss'],
// })
// export class ProductsPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  main_loading: boolean;
  error;
  product = {};
  form: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder, private as: AuthService, private route: ActivatedRoute,
    public loadingController: LoadingController, private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.createForm()
  }

  create(){
    this.router.navigateByUrl(`tabs/(products:create)`)
  }
  

  createForm(){
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_address: ['', Validators.required],
    })
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 10000,
      keyboardClose: true,
      message: 'checking for product',
      translucent: true,
    });
    return await loading.present();
  }

  signout(){
    this.as.signOut();
  }

}