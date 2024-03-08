import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaitentvisitedetailComponent } from './paitentvisitedetail.component';

describe('PaitentvisitedetailComponent', () => {
  let component: PaitentvisitedetailComponent;
  let fixture: ComponentFixture<PaitentvisitedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaitentvisitedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaitentvisitedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
