import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    /*Inyeccion de los servicios*/
  /*traductor, nombre de la clase*/
   constructor( public infoPaginaServe: InfoPaginaService){
        //leer el componente  JSON
        //Lo que me permite visualizar globalmente el array
   }
}
