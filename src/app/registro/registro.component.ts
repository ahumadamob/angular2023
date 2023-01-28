import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{
registro() {
throw new Error('Method not implemented.');
}
  registroForm:FormGroup
  constructor(private fb:FormBuilder){ 
    this.registroForm = this.fb.group({
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
      email:['', [Validators.required]],
      telefono:[''],
      password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }
}
