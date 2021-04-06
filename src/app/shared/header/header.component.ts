import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
/*infoPaginaService nombre de la propieda: nombre del archivo*/
  constructor( public infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
