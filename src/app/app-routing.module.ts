import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*Esta linea le dira angular si son la lineas principales o son indices*/

/*import { AboutComponent } from './pages/about/about.component';*/

import { InformacionComponent } from './pages/informacion/informacion.component';
import { ItemComponent } from './pages/item/item.component';
/*Vamos a declara como funcionan nuestra constantes*/
const app_routes: Routes = [

    { path: 'item', component: ItemComponent },
    { path: 'informacion', component: InformacionComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
  ];

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
export class AppRoutingModule { }
