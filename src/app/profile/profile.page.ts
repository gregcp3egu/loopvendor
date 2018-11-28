import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
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

  // claim(){
  //   this.loading = true;
  //   this.ps.claimProfile(this.profile._id).subscribe(
  //     data => {
  //       console.log(data);
  //       this.getToken();
  //     },
  //     error => {
  //       console.log(error);
  //       // this.presentLoadingWithOptions(error.message);
  //       this.loading = false
  //     }
  //   )
  // }

  getToken(){
    // this.ps.getToken().subscribe(
    //   data => {
    //     this.as.setRYLToken(data.token).then(
    //       d => {
    //         this.router.navigate(['/profile/requestcode']);
    //       }
    //     )
        
    //   },
    //   error => {
    //   }
    // ).add(() => {
    //   this.loading = false;
    // })
  }

}
