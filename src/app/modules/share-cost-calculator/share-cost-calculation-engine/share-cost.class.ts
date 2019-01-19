// tslint:disable:max-classes-per-file

import { IShareCostVisitor } from './share-cost-visitor.class'
import { ShareCostTypes } from './share-cost.enum'

export interface IShareCost {
  accept: (shareCostVisitor: IShareCostVisitor) => number
}

abstract class BaseShareCost implements IShareCost {
  protected sharesSold: number
  protected sharePrice: number
  protected sellDate: string | Date
  protected costMethod: ShareCostTypes

  constructor(sharesSold: number, sharePrice: number, sellDate: string | Date, costMethod: ShareCostTypes) {
    this.sharesSold = sharesSold
    this.sharePrice = sharePrice
    this.sellDate = sellDate
    this.costMethod = costMethod
  }

  accept(shareCostVisitor: IShareCostVisitor): number {
    return shareCostVisitor.visit(this)
  }
}

export class LIFOShareCost extends BaseShareCost {
  constructor(sharesSold: number, sharePrice: number, sellDate: string | Date) {
    super(sharesSold, sharePrice, sellDate, ShareCostTypes.LIFO)
  }
}

export class FIFOShareCost extends BaseShareCost {
  constructor(sharesSold: number, sharePrice: number, sellDate: string | Date) {
    super(sharesSold, sharePrice, sellDate, ShareCostTypes.FIFO)
  }
}

export class HighestCosthareCost extends BaseShareCost {
  constructor(sharesSold: number, sharePrice: number, sellDate: string | Date) {
    super(sharesSold, sharePrice, sellDate, ShareCostTypes.HighestCost)
  }
}

export class LowestCostShareCost extends BaseShareCost {
  constructor(sharesSold: number, sharePrice: number, sellDate: string | Date) {
    super(sharesSold, sharePrice, sellDate, ShareCostTypes.LowestCost)
  }
}
