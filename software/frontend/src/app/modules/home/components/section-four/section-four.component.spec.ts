import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourComponent } from './section-four.component';

describe('SectionFourComponent', () => {
  let component: SectionFourComponent;
  let fixture: ComponentFixture<SectionFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
