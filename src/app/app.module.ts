import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ItemComponent } from './pages/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InformacionComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Importamos un modulo http para poder leer el archivo JSON
    /*Esto nos permitira hacer peticiones get y post */
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
