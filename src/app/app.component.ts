import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*Creamoa un constructor para cargar el servicio*/
constructor( public infoPaginaService: InfoPaginaService,
             public productosService: ProductosService ) {

   //Leer el objeto json

   }

}
