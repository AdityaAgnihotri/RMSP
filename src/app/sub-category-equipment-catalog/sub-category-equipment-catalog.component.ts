import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-sub-category-equipment-catalog',
  templateUrl: './sub-category-equipment-catalog.component.html',
  styleUrls: ['./sub-category-equipment-catalog.component.css']
})
export class SubCategoryEquipmentCatalogComponent implements OnInit {
  dealers_id: any;
  branchId: any;
  item: string;
  incomingArray2: any;
  itemToBind: any;
  filteredArray: any[];
  selectedName: any;
  filteredSubCategoryArray: any[];

  constructor(private homeService: HomeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.homeService.currentMessage.subscribe(res => {      
      this.item = res;   
     })
   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.dealers_id = params['delId'];
      this.branchId = params['branchId'];
      this.selectedName = params['name'];
      !(this.item === "message")? this.setCategories(this.item) : this.getData();      
    });
  }
  getData(): any {
    this.homeService.loadData().subscribe((res: any) => {
      if(res && res.locations){        
        this.incomingArray2 = res.locations;
        let item =  this.incomingArray2.filter(x => x.dealers_id === this.dealers_id);
        item.length>0? this.setCategories(item[0]): item = [];
      }
    }, err => {
      console.log(err);
    })
  }
  setCategories(item): any {
    console.log("Select category", item);
    this.itemToBind = item.branches.filter( x => {
      if(x.branch_id === this.branchId) {
        
        x.categories.filter(y => {
          if(y.name === this.selectedName){
            this.filteredSubCategoryArray = [];
            y.subcategories.filter(z => {
              this.filteredSubCategoryArray.push({
                name: z.name, image: `assets/img/subcategory/${z.image}`
              }) 
            })
          }      
        } )
      }
    }) 
    console.log("this.filteredArray", this.filteredSubCategoryArray);
  }

}
