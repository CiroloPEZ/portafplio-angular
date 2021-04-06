import { Injectable } from '@angular/core';
/*Importamos el HttpClient*/
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';



/*Aqui le dice en que nivel quiere inyectar*/
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
//Vas a ser de tipo any que permite // TODO:
/*Aqui hago referencia al la interface del objeto json*/
info: InfoPagina= {};
cargada = false;

/*El conructor va a ser de tupo de html*/
  constructor( private http: HttpClient ) {
     console.log("Servico cargado");
    //Leer el archivo json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      //Esto nos dira si la respuesta ya esta cargada
        this.cargada = true;
        this.info = resp;
      //  console.log(resp);
      console.log( resp );
      });

  }
}
