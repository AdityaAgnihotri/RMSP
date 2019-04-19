import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomePageContentComponent } from './home-page-content/home-page-content.component';
import { CatagoryEquipmantCatalogComponent } from './catagory-equipmant-catalog/catagory-equipmant-catalog.component';
import { SubCategoryEquipmentCatalogComponent } from './sub-category-equipment-catalog/sub-category-equipment-catalog.component';

const routes: Routes = [
  { path: "", redirectTo : 'home', pathMatch: 'full' },
  {
      path:"home", component: HomePageContentComponent
  },
  {
    path:"cat-equip", component: CatagoryEquipmantCatalogComponent
  },
  {
    path: "sub-cat", component: SubCategoryEquipmentCatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
