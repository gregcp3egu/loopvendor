import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  name;
  constructor(){
    console.log('this is a started')
  }


  setname(){
    this.name = 'greg';
  }
}
