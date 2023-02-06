import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

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
}
