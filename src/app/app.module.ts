import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './layout/head/head.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { AboutComponent } from './layout/about/about.component';
import { TaemComponent } from './layout/taem/taem.component';
import { StackComponent } from './layout/stack/stack.component';
import { ProductComponent } from './layout/product/product.component';
import { ContactComponent } from './layout/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    WelcomeComponent,
    AboutComponent,
    TaemComponent,
    StackComponent,
    ProductComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
