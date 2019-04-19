import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryEquipmantCatalogComponent } from './catagory-equipmant-catalog.component';

describe('CatagoryEquipmantCatalogComponent', () => {
  let component: CatagoryEquipmantCatalogComponent;
  let fixture: ComponentFixture<CatagoryEquipmantCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryEquipmantCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryEquipmantCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
