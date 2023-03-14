import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProductComponent } from './nav-product.component';

describe('NavProductComponent', () => {
  let component: NavProductComponent;
  let fixture: ComponentFixture<NavProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
