/*Importancion de  modulos de rutas*/
import { NgModule } from '@angular/core';

/*Esta linea le dira angular si son la lineas principales o son indices*/
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';


const app_routes: Routes = [
{  /*Cuando la ruta se encuentre vacia http://localhost:4200/*/
  /*Y me a redirigir a la pagina o componente PortafolioComponent*/
   path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }


];
/*creamos un decorador*/
@NgModule({
  /*Los modulos por lo general se importa */
  imports: [
    /*Hacemos referencia a la matriz de arriva */
    /*Este codigo  useHash: true  ayudara ha hacer las rutas dinamicas sin modificar el .access y agregara un #
    para que todas las rutas  que venga depues, el navegador piense que son parte de la pagina*/
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    /*Espotamos nuestro RouterModule para se haga public*/
    exports: [
        RouterModule
    ]

})
/*Exportamos la clase o la hacemos public method*/
export class AppRoutingModule {
 }
