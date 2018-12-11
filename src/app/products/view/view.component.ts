import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['../create/create.component.scss']
})
export class ViewComponent implements OnInit {
  main_loading: boolean;
  error;
  product = {};
  form: FormGroup;
  loading: boolean;
  image;
  newSrc;

  constructor(private fb: FormBuilder, private as: AuthService, private route: ActivatedRoute,
    public loadingController: LoadingController, private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.createForm()
  }

  setSrc(file: File) {
    var reader = new FileReader();
    let that = this;

    reader.addEventListener("load", function (e: any) {
      that.newSrc = e.target.result;
    })

    reader.readAsDataURL(file);

  }

  imageChange(e) {
    if (e.target.files.length > 0) {
      let file: File = e.target.files[0];
      this.setSrc(file);
      this.image = file;
    }
  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      allergy_info: ['', Validators.required],
    })
  }

}
