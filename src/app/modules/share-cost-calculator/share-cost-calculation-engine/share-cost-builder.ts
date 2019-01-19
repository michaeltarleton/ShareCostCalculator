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
        return new FIFOShareCost(sharesSold, sharePrice, sellDate, costMethod)
      case ShareCostTypes.LIFO:
        return new LIFOShareCost(sharesSold, sharePrice, sellDate, costMethod)
      case ShareCostTypes.HighestCost:
        return new HighestCosthareCost(sharesSold, sharePrice, sellDate, costMethod)
      case ShareCostTypes.LowestCost:
        return new LowestCostShareCost(sharesSold, sharePrice, sellDate, costMethod)
      default:
        return new FIFOShareCost(sharesSold, sharePrice, sellDate, costMethod)
    }
  }
}
