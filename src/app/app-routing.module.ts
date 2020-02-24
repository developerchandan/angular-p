import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [{path:"", redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HeaderComponent },
  { path: 'About', component: IntroductionComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Services', component: ContentSectionComponent },
  { path: 'Testimonials', component: TestimonialsComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Pricing', component: PricingTablesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
