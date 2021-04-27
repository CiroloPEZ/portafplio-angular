import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor( private route: ActivatedRoute,
              public productoService: ProductosService  ) { }

  ngOnInit(): void {
    this.route.params
           .subscribe(parametros =>{
               this.productoService.getProducto(parametros['id'])
               //Para que yo lo pueda llamar
               .subscribe( producto =>{
                  console.log(producto);
               });
                       });
  }

}
