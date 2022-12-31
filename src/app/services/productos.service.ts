import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();

   }

   private cargarProductos(){

    this.http.get<Producto[]>('http://portafolio-angular-83d89-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( resp => {

        console.log(resp);
        this.productos = resp;

        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      });
   }

}
