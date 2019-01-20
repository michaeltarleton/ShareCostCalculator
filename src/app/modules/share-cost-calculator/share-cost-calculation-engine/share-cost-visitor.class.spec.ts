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

  describe('FIFO', () => {
    it('should return 0', () => {
      const sut = new ShareCostVisitor(SHARE_RECORDS)
      const fifoShareCost = new FIFOShareCost(0, 0, new Date())

      const result = sut.visit(fifoShareCost)

      expect(result).toBeCloseTo(10.333)
    })
  })

  describe('LIFO', () => {
    it('should return 0', () => {
      const lifoShareCost = new LIFOShareCost(0, 0, new Date())
      const sut = new ShareCostVisitor(SHARE_RECORDS)

      const result = sut.visit(lifoShareCost)

      expect(result).toBe(0)
    })
  })

  describe('HighestCost', () => {
    it('should return 0', () => {
      const highestCostshareCost = new HighestCosthareCost(0, 0, new Date())
      const sut = new ShareCostVisitor(SHARE_RECORDS)

      const result = sut.visit(highestCostshareCost)

      expect(result).toBe(0)
    })
  })

  describe('LowestCost', () => {
    it('should return 0', () => {
      const lowestCostShareCost = new LowestCostShareCost(0, 0, new Date())
      const sut = new ShareCostVisitor(SHARE_RECORDS)

      const result = sut.visit(lowestCostShareCost)

      expect(result).toBe(0)
    })
  })
})
