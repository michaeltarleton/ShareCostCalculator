import { TestBed } from '@angular/core/testing';

import { PurchasedItemService } from './purchased-item.service';

describe('PurchasedItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchasedItemService = TestBed.get(PurchasedItemService);
    expect(service).toBeTruthy();
  });
});
