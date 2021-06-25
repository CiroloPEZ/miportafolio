import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  cargando = true;
  ejercio = [];

  constructor( private http: HttpClient ) {
    this.cargarEjercio();
   }


   private cargarEjercio(){
       //Leer el archivo JSON de manera externa
       /*gregamos nuevo codigo <void> para solucionar el problema de de las caragas*/
     return new Promise<void>((resolve, reject) => {
       this.http.get('https://miperfil-5f2ef-default-rtdb.firebaseio.com/Ejercio.json')
     .subscribe( (resp: any) => {
            console.log(resp);
            this.ejercio = resp;

            this.cargando = false;
            resolve();
         });
    });
   }
   getEjercio (id: string){
         return this.http.get(`https://miperfil-5f2ef-default-rtdb.firebaseio.com/Ejercio/1.json`);

   }

}
