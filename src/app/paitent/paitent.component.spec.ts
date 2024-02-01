import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaitentComponent } from './paitent.component';

describe('PaitentComponent', () => {
  let component: PaitentComponent;
  let fixture: ComponentFixture<PaitentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaitentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaitentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
