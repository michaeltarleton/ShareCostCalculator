import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCostCalculatorComponent } from './share-cost-calculator.component';

describe('ShareCostCalculatorComponent', () => {
  let component: ShareCostCalculatorComponent;
  let fixture: ComponentFixture<ShareCostCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareCostCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCostCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
