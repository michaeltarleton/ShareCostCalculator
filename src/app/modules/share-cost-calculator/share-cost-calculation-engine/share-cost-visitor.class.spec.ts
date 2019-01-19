import { async, TestBed } from '@angular/core/testing'
import { CostDataService } from '@app/core/services/cost-data/cost-data.service'
import SHARE_RECORDS from '@app/core/services/cost-data/cost.db.json'
import { ShareCostVisitor } from './share-cost-visitor.class'
import { FIFOShareCost, HighestCosthareCost, LIFOShareCost, LowestCostShareCost } from './share-cost.class'

describe('ShareCostVisitor', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CostDataService],
    })
  }))

  describe('LIFO', () => {
    it('should return 0', () => {
      const shareCost = new LIFOShareCost(0, 0, new Date())
      const sut = new ShareCostVisitor(SHARE_RECORDS)

      const result = sut.visit(shareCost)

      expect(result).toBe(0)
    })
  })

  describe('FIFO', () => {
    it('should return 0', () => {
      const shareCost = new FIFOShareCost(0, 0, new Date())
      const sut = new ShareCostVisitor(SHARE_RECORDS)

      const result = sut.visit(shareCost)

      expect(result).toBe(0)
    })
  })

  describe('HighestCost', () => {
    it('should return 0', () => {
      const shareCost = new HighestCosthareCost(0, 0, new Date())
      const sut = new ShareCostVisitor(SHARE_RECORDS)

      const result = sut.visit(shareCost)

      expect(result).toBe(0)
    })
  })

  describe('LowestCost', () => {
    it('should return 0', () => {
      const shareCost = new LowestCostShareCost(0, 0, new Date())
      const sut = new ShareCostVisitor(SHARE_RECORDS)

      const result = sut.visit(shareCost)

      expect(result).toBe(0)
    })
  })
})
