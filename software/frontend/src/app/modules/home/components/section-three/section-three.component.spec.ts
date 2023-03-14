import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeComponent } from './section-three.component';

describe('SectionThreeComponent', () => {
  let component: SectionThreeComponent;
  let fixture: ComponentFixture<SectionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
