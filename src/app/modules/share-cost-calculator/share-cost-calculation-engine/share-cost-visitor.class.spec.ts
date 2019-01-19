import { async, TestBed } from '@angular/core/testing'
import { CostDataService } from '@app/core/services/cost-data/cost-data.service'
import { ShareCostVisitor } from './share-cost-visitor.class'
import { LIFOShareCost } from './share-cost.class'

describe('ShareCostVisitor', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CostDataService],
    })
  }))

  describe('ShareCostVisitor - LIFO', () => {
    it('should return 0', done => {
      const lifoShareCost = new LIFOShareCost(0, 0, new Date())
      const costDataService = TestBed.get(CostDataService) as CostDataService
      costDataService.get().subscribe(shareRecords => {
        const sut = new ShareCostVisitor(shareRecords)

        const result = sut.visit(lifoShareCost)

        expect(result).toBe(0)

        done()
      })
    })
  })
})
