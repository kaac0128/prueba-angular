import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreditoComponent } from './pages/credito/credito.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCreditosComponent } from './pages/list-creditos/list-creditos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreditoComponent,
    ListCreditosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
