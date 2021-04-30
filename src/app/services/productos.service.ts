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
productosFiltrado: Producto[] = [];


  constructor(private http: HttpClient ) {
      this.cargarProductos();
   }
   private cargarProductos(){
     //Agregamos nuevo codigo <void>
     return new Promise<void>((resolve, reject) => {
       this.http.get('https://angular-html-f1bdf-default-rtdb.firebaseio.com/productos_idx.json')
     .subscribe( (resp: any) => {
            console.log(resp);
            this.productos = resp;

            this.cargando = false;
            resolve();
         });
    });

   }

   getProducto (id: string){
        return   this.http.get(`https://angular-html-f1bdf-default-rtdb.firebaseio.com/productos/${ id }.json`);
   }
   buscarProducto( termino: string){
     if(this.productos.length === 0){
       //Cargar productos
       this.cargarProductos().then( () => {
         // ejecutar despuÃ©s de tener los productos
         // Aplicar filtro
         this.filtrarProductos( termino );
       });

     }else{
       //aplicar el filtro
        this.filtrarProductos( termino );
     }
     //Permite barre el arreglo y regresa el nuevo arreglo
/*    this.productosFiltrado = this.productos.filter( producto =>{
           return true;
        });
    console.log(this.productosFiltrado);*/

   }
   private filtrarProductos( termino: string ){
     // console.log(this.productos);
this.productosFiltrado = [];

termino = termino.toLocaleLowerCase();

this.productos.forEach( prod => {

const tituloLower = prod.titulo.toLocaleLowerCase();

if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
this.productosFiltrado.push( prod );
}

});

   }
}
