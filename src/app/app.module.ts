import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { ColorBoxDirective } from './Directives/color-box.directive';
import { UsdtoEgpPipe } from './Pipes/usdto-egp.pipe';
import { OrederMasterComponent } from './Components/oreder-master/oreder-master.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ColorBoxDirective,
    UsdtoEgpPipe,
    OrederMasterComponent,
    NotFoundPageComponent,
    MainLayoutComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
