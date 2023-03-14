//default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';
import { SectionFourComponent } from './components/section-four/section-four.component';

//pages
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent
  ],
  imports: [
    CommonModule

  ]
})
export class HomeModule { }
