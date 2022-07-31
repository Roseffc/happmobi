import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin!:FormGroup

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.setFormGroup()
  }

  setFormGroup() {
    this.formLogin = this.formBuilder.group({
      username:[null, Validators.required],
      password:[null, Validators.required],
    })
  }

  onSubmit() {
    this.router.navigate(['home']);
  }

}
