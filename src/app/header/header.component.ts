import { Component, OnInit, AfterContentInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { nextContext } from '@angular/core/src/render3';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  incomingArray: any = [];


  constructor(private homeService: HomeService, private router: Router, ) {
    this.incomingArray = [];
  }

  ngOnInit() {
    this.homeService.loadData().subscribe((res: any) => {
      if (res && res.locations) {
        console.log(res.locations);
        this.incomingArray = res.locations;
        setTimeout(() => {
          this.loadDropDown();
        }, 0);
      }
    }, err => {
      console.log(err);
    })
  }


  selectedItem(item, subItem) {
    this.homeService.changeMessage(item);
    this.router.navigateByUrl(`cat-equip?delId=${item.dealers_id}&branchId=${subItem.branch_id}`)
    console.log(item, subItem);
  }

  

  loadDropDown(): void {
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');


      $(this).parents('.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropright .show,.dropleft .show').removeClass("show");
      });

      return false;
    });
  }

}
