import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoComponent } from './section-two.component';

describe('SectionTwoComponent', () => {
  let component: SectionTwoComponent;
  let fixture: ComponentFixture<SectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
