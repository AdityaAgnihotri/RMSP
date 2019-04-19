import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catagory-equipmant-catalog',
  templateUrl: './catagory-equipmant-catalog.component.html',
  styleUrls: ['./catagory-equipmant-catalog.component.css']
})
export class CatagoryEquipmantCatalogComponent implements OnInit {
  incomingArray2: any= [];
  item: any;
  dealers_id: any;
  itemToBind: any;
  branchId: any;
  filteredArray: any = [];
  constructor( private homeService: HomeService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.homeService.currentMessage.subscribe(res => {      
      this.item = res;   
     })
   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.dealers_id = params['delId'];
      this.branchId = params['branchId'];
      !(this.item === "message")? this.setCategories(this.item) : this.getData();      
    });
  }


  getData(): any {
    debugger
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
      debugger
      if(x.branch_id === this.branchId) {
        this.filteredArray = [];
        x.categories.filter(y => {
          this.filteredArray.push({
            name: y.name, image: `assets/img/${y.image}`, 
            subCategory: y.subcategories.length>0? true: false
          })          
        } )
      }
    }) 
    console.log("this.filteredArray", this.filteredArray);
  }

  navigateToSubCategory(name) {
    debugger
    this.router.navigateByUrl(`sub-cat?delId=${this.dealers_id}&branchId=${this.branchId}&name=${name}`);
  }

}
