import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { PisiComponent } from './pisi/pisi.component';
import { SofiComponent } from './sofi/sofi.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerComponent } from './career/career.component';
import { MaterialDesign } from '../Material/material';



const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'pisi',
        component: PisiComponent
      },
      {
        path: 'sofi',
        component: SofiComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'career',
        component: CareerComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [PublicComponent, HomeComponent, PisiComponent, SofiComponent, ContactUsComponent, AboutUsComponent, CareerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class PublicModule { }
