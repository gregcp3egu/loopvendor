import { Component, OnInit, NgZone } from '@angular/core';
import { OnboardService } from './onboard.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {

  constructor(private os: OnboardService,
    public loadingController: LoadingController,
    private router: Router, private zone: NgZone) { }

  ngOnInit() {
    this.checkOnboard()
    // this.router.events.subscribe(
    //   d => {
    //     console.log(d);
    //   }
    // )
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 5000
    });
    return await loading.present();
  }

  checkOnboard() {
    this.presentLoading()
    this.os.checkOnboard().subscribe(
      data => {
        if (!data.owner) {
          this.loadingController.dismiss();
          this.loadingController.dismiss();
          this.router.navigate(['/onboard/owner'])
        } else if (!data.shop) {
          this.loadingController.dismiss();
          this.loadingController.dismiss();
          this.router.navigate(['/onboard/shop'])
        } else {
          this.loadingController.dismiss();
          this.loadingController.dismiss();
          this.os.setOnboard(true);
          this.router.navigate(['/'])
        }
        console.log('checks complete')
      }
    ).add(() => {
      this.loadingController.dismiss();
      this.loadingController.dismiss();
    })
  }



}
