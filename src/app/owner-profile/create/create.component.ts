import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  main_loading: boolean;
  error;
  profile = {};
  form: FormGroup;
  loading: boolean;
  started: boolean;

  constructor(private fb: FormBuilder, private as: AuthService, private route: ActivatedRoute,
    private router: Router) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_address: ['', Validators.required],
      address: this.fb.group({
        number: ["", Validators.required],
        street: ["", Validators.required],
        postcode: ["", Validators.required],
        country: ["", Validators.required]
      })
    })
  }

  create(){
    
  }

  getStarted(){
    this.started = true;
  }

}
