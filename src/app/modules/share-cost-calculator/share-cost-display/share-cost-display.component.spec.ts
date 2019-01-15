import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCostDisplayComponent } from './share-cost-display.component';

describe('ShareCostDisplayComponent', () => {
  let component: ShareCostDisplayComponent;
  let fixture: ComponentFixture<ShareCostDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareCostDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCostDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
