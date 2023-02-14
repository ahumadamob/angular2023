import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    RegistroComponent,
    LoginComponent,
    DetalleComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
