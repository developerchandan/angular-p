import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotfoundComponentComponent } from './notfound-component/notfound-component.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    GalleryComponent,
    ContentSectionComponent,
    TestimonialsComponent,
    ClientsComponent,
    PricingTablesComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    NotfoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
