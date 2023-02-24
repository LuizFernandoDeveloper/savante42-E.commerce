import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/components/home/home.component';
import { ProductComponent } from './views/components/product/product.component';
import { ServiceComponent } from './views/components/service/service.component';
import { ContactComponent } from './views/components/contact/contact.component';
import { CarComponent } from './views/components/car/car.component';
import { SectionOneComponent } from './views/components/home/components/section-one/section-one.component';
import { SectionTwoComponent } from './views/components/home/components/section-two/section-two.component';
import { SectionThreeComponent } from './views/components/home/components/section-three/section-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ServiceComponent,
    ContactComponent,
    CarComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
