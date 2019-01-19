// tslint:disable:max-classes-per-file

export enum ShareCostTypes {
  LIFO = 'LIFO',
  FIFO = 'FIFO',
  HighestCost = 'HighestCost',
  LowestCost = 'LowestCost',
}

export interface IShareCostVisitor {
  visit: (shareCost: LIFOShareCost | FIFOShareCost | HighestCosthareCost | LowestCostShareCost) => number
}

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
  constructor(sharesSold: number, sharePrice: number, sellDate: string | Date, costMethod: ShareCostTypes) {
    super(sharesSold, sharePrice, sellDate, costMethod)
  }
}

export class FIFOShareCost extends BaseShareCost {
  constructor(sharesSold: number, sharePrice: number, sellDate: string | Date, costMethod: ShareCostTypes) {
    super(sharesSold, sharePrice, sellDate, costMethod)
  }
}

export class HighestCosthareCost extends BaseShareCost {
  constructor(sharesSold: number, sharePrice: number, sellDate: string | Date, costMethod: ShareCostTypes) {
    super(sharesSold, sharePrice, sellDate, costMethod)
  }
}

export class LowestCostShareCost extends BaseShareCost {
  constructor(sharesSold: number, sharePrice: number, sellDate: string | Date, costMethod: ShareCostTypes) {
    super(sharesSold, sharePrice, sellDate, costMethod)
  }
}

export class ShareCostVisitor implements IShareCostVisitor {
  visit(shareCost: LIFOShareCost | FIFOShareCost | HighestCosthareCost | LowestCostShareCost): number {
    switch (typeof shareCost) {
      case typeof LIFOShareCost:
        return 0
      case typeof FIFOShareCost:
        return 0
      case typeof HighestCosthareCost:
        return 0
      case typeof LowestCostShareCost:
        return 0
      default:
        return 0
    }
  }
}

export class ShareGainLossVisitor implements IShareCostVisitor {
  visit(shareCost: LIFOShareCost | FIFOShareCost | HighestCosthareCost | LowestCostShareCost): number {
    switch (typeof shareCost) {
      case typeof LIFOShareCost:
        return 1
      case typeof FIFOShareCost:
        return 1
      case typeof HighestCosthareCost:
        return 1
      case typeof LowestCostShareCost:
        return 1
      default:
        return 1
    }
  }
}

export class RemaininSharesVisitor implements IShareCostVisitor {
  visit(shareCost: LIFOShareCost | FIFOShareCost | HighestCosthareCost | LowestCostShareCost): number {
    switch (typeof shareCost) {
      case typeof LIFOShareCost:
        return 2
      case typeof FIFOShareCost:
        return 2
      case typeof HighestCosthareCost:
        return 2
      case typeof LowestCostShareCost:
        return 2
      default:
        return 2
    }
  }
}

export class RemainingShareCostPriceVisitor implements IShareCostVisitor {
  visit(shareCost: LIFOShareCost | FIFOShareCost | HighestCosthareCost | LowestCostShareCost): number {
    switch (typeof shareCost) {
      case typeof LIFOShareCost:
        return 3
      case typeof FIFOShareCost:
        return 3
      case typeof HighestCosthareCost:
        return 3
      case typeof LowestCostShareCost:
        return 3
      default:
        return 3
    }
  }
}

export class ShareCostBuilder extends BaseShareCost {
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
