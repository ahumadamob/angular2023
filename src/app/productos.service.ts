import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Description, Producto } from './Interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=messi')
  }

  getAllPromise(){
    return lastValueFrom(this.http.get('https://api.mercadolibre.com/sites/MLA/search?q=messi'))
  }

  getById(id:string):Promise<Producto>{
    return lastValueFrom(this.http.get<Producto>(`https://api.mercadolibre.com/items/${id}`))
  }

  getDescriptionById(id:string):Promise<Description>{
    return lastValueFrom(this.http.get<Description>(`https://api.mercadolibre.com/items/${id}/description`))
  }  
}
