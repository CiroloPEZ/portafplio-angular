import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
//Insertamos https: HttpClient por que vamos a utilizar peticiones HttpClient
cargando = true;
productos: Producto[] = [];


  constructor(private http: HttpClient ) {
      this.cargarProductos();
   }
   private cargarProductos(){
      this.http.get('https://angular-html-f1bdf-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp: any) => {
           console.log(resp);
           this.productos = resp;

           this.cargando = false;
        });
   }
   getProducto (id: string){
        return   this.http.get(`https://angular-html-f1bdf-default-rtdb.firebaseio.com/productos/${ id }.json`);
   }
}
