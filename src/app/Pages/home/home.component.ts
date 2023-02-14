import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //nombre = "Mario"
  //modificar = false
  productos:any = []
  constructor(private productosService:ProductosService) {
    /*
    this.productos = productosService.getAll()
    .subscribe({
      next:(response:any)=>{
        console.log(response)
        this.productos = response["results"]
      },
      error:(error)=>{
        console.log(error)
      }
    }
      
    ) */ //Ejemplo con el Suscribe

    /*
    this.productosService.getAllPromise()
    .then((response:any)=>{
      this.productos = response.results
    })
    .catch(e=>console.log(e))
    */ //Ejemplo con una Promise

    this.init()
  }
  
  async init(){
    const response:any = await this.productosService.getAllPromise()
    console.log(response.results)
    this.productos = response.results
  }
  

}

