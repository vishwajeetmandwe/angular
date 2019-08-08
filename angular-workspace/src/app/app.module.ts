import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HiComponent } from './first-component/hi.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { SizerDirective } from './directives/sizer.directive';
import { FooterComponent } from './pricing/footer-container/footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { NavComponent } from './pricing/nav/nav.component';
import { CardContainerComponent } from './pricing/card-container/card-container.component';
import { InfoComponent } from './pricing/info/info.component';
import { CardComponent } from './pricing/card-container/card/card.component';
import { FooterContainerComponent } from './pricing/footer-container/footer-container.component';
import { CustomComponent } from './custom/custom.component';


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
    FooterComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
