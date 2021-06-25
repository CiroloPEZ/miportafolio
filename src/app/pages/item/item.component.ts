import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
/*Creamos los arreglos */
 ejercio: any = {};
 id: any = {};

  //Aqui insertamos el servicio
  //Traductor, nombre del link de la parte de arriba
  constructor(
       private route: ActivatedRoute,
       public Info: InfoPaginaService) { 
       }

  ngOnInit(): void {

        this.route.params
              .subscribe(parametros =>{
                this.Info.getEjercio(parametros['id'])
                .subscribe (ejercio => {
                  //
                  console.log(ejercio);
                  //Asignar datos a la pagina html
                  this.id = parametros['id'];
                  this.ejercio = ejercio;

                })
              })
     }

}
