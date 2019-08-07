import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HiComponent } from './first-component/hi.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { SizerDirective } from './directives/sizer.directive';
import { PricingComponent } from './pricing/pricing.component';
import { NavComponent } from './pricing/nav/nav.component';
import { InfoComponent } from './pricing/info/info.component';
import { CardContainerComponent } from './pricing/card-container/card-container.component';
import { CardComponent } from './pricing/cardContainer/card/card.component';
import { FooterContainerComponent } from './pricing/footer-container/footer-container.component';
import { FooterComponent } from './pricing/footerContainer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HiComponent,
    SecondComponentComponent,
    DataBindingComponent,
    DirectivesComponent,
    SizerDirective,
    PricingComponent,
    NavComponent,
    InfoComponent,
    CardContainerComponent,
    CardComponent,
    FooterContainerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
