import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent, 
    MyFirstComponent, MySecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CursosModule // Consigo utilizar tudo que tiver dentro do exports do CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
