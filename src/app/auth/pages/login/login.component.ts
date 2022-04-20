import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  
  miFormulario:FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
  constructor(private fb:FormBuilder,
              private router:Router
    ) { }

  ngOnInit(): void {
  }
  login(){
    if(this.miFormulario.valid){
      this.router.navigateByUrl('/dashboard');
    }
  }

}
