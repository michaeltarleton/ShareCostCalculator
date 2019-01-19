import { FIFOShareCost, HighestCosthareCost, IShareCost, LIFOShareCost, LowestCostShareCost } from './share-cost.class'
import { ShareCostTypes } from './share-cost.enum'

export class ShareCostBuilder {
  static build(
    sharesSold: number,
    sharePrice: number,
    sellDate: string | Date,
    costMethod: ShareCostTypes
  ): IShareCost {
    switch (costMethod) {
      case ShareCostTypes.FIFO:
        return new FIFOShareCost(sharesSold, sharePrice, sellDate)
      case ShareCostTypes.LIFO:
        return new LIFOShareCost(sharesSold, sharePrice, sellDate)
      case ShareCostTypes.HighestCost:
        return new HighestCosthareCost(sharesSold, sharePrice, sellDate)
      case ShareCostTypes.LowestCost:
        return new LowestCostShareCost(sharesSold, sharePrice, sellDate)
      default:
        return new FIFOShareCost(sharesSold, sharePrice, sellDate)
    }
  }
}
