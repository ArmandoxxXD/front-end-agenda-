import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotasService } from './services/notas.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotasComponent } from './components/notas/notas.component';
import { ListaComponent } from './components/lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotasComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NotasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
