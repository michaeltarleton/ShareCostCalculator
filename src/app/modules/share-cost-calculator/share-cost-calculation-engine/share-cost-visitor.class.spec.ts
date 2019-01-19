import { async, TestBed } from '@angular/core/testing'
import { CostDataService } from '@app/core/services/cost-data/cost-data.service'
import { ShareCostVisitor } from './share-cost-visitor.class'
import { FIFOShareCost, HighestCosthareCost, LIFOShareCost, LowestCostShareCost } from './share-cost.class'

describe('ShareCostVisitor', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CostDataService],
    })
  }))

  describe('LIFO', () => {
    it('should return 0', done => {
      const shareCost = new LIFOShareCost(0, 0, new Date())
      const costDataService = TestBed.get(CostDataService) as CostDataService
      costDataService.get().subscribe(shareRecords => {
        const sut = new ShareCostVisitor(shareRecords)

        const result = sut.visit(shareCost)

        expect(result).toBe(0)

        done()
      })
    })
  })

  describe('FIFO', () => {
    it('should return 0', done => {
      const shareCost = new FIFOShareCost(0, 0, new Date())
      const costDataService = TestBed.get(CostDataService) as CostDataService
      costDataService.get().subscribe(shareRecords => {
        const sut = new ShareCostVisitor(shareRecords)

        const result = sut.visit(shareCost)

        expect(result).toBe(0)

        done()
      })
    })
  })

  describe('HighestCost', () => {
    it('should return 0', done => {
      const shareCost = new HighestCosthareCost(0, 0, new Date())
      const costDataService = TestBed.get(CostDataService) as CostDataService
      costDataService.get().subscribe(shareRecords => {
        const sut = new ShareCostVisitor(shareRecords)

        const result = sut.visit(shareCost)

        expect(result).toBe(0)

        done()
      })
    })
  })

  describe('LowestCost', () => {
    it('should return 0', done => {
      const shareCost = new LowestCostShareCost(0, 0, new Date())
      const costDataService = TestBed.get(CostDataService) as CostDataService
      costDataService.get().subscribe(shareRecords => {
        const sut = new ShareCostVisitor(shareRecords)

        const result = sut.visit(shareCost)

        expect(result).toBe(0)

        done()
      })
    })
  })
})
