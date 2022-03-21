import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalHeaderComponent } from './final-header.component';

describe('FinalHeaderComponent', () => {
  let component: FinalHeaderComponent;
  let fixture: ComponentFixture<FinalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
