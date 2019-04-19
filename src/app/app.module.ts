import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageContentComponent } from './home-page-content/home-page-content.component';
import { AppRoutingModule } from './app-routing';
import { HttpClientModule} from '@angular/common/http';
import { HomeService } from './service/home.service';
import { CatagoryEquipmantCatalogComponent } from './catagory-equipmant-catalog/catagory-equipmant-catalog.component';
import { SubCategoryEquipmentCatalogComponent } from './sub-category-equipment-catalog/sub-category-equipment-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageContentComponent,
    CatagoryEquipmantCatalogComponent,
    SubCategoryEquipmentCatalogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
