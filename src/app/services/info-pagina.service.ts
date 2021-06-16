import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarEjercio();
   }

   private cargarEjercio(){
       //Leer el archivo JSON de manera externa
       this.http.get('https://miperfil-5f2ef-default-rtdb.firebaseio.com/Ejercio.json')
       .subscribe( (resp: any) => {
          this.equipo = resp;
          console.log(resp);
        });

   }
}
