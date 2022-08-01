import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SwiperModule } from 'swiper/angular';


import { LayoutAuthenticatedComponent } from './pages/layout/layout-authenticated/layout-authenticated.component';
import { LayoutLoginComponent } from './pages/layout/layout-login/layout-login.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CardCarComponent } from './pages/card-car/card-car.component';
import { CarsService } from './services/cars.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutAuthenticatedComponent,
    LayoutLoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    SwiperModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
