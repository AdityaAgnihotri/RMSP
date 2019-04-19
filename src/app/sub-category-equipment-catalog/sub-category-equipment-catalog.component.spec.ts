import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryEquipmentCatalogComponent } from './sub-category-equipment-catalog.component';

describe('SubCategoryEquipmentCatalogComponent', () => {
  let component: SubCategoryEquipmentCatalogComponent;
  let fixture: ComponentFixture<SubCategoryEquipmentCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoryEquipmentCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryEquipmentCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
