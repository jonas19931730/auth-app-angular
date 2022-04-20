import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(4)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  crearCuenta(){
    console.log(this.miFormulario.value);
  }

}
