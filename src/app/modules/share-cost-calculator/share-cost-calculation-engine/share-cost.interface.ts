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

export class LIFOShareCost implements IShareCost {
  accept(shareCostVisitor: IShareCostVisitor): number {
    return shareCostVisitor.visit(this)
  }
}

export class FIFOShareCost implements IShareCost {
  accept(shareCostVisitor: IShareCostVisitor): number {
    return shareCostVisitor.visit(this)
  }
}

export class HighestCosthareCost implements IShareCost {
  accept(shareCostVisitor: IShareCostVisitor): number {
    return shareCostVisitor.visit(this)
  }
}

export class LowestCostShareCost implements IShareCost {
  accept(shareCostVisitor: IShareCostVisitor): number {
    return shareCostVisitor.visit(this)
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

export class ShareCostBuilder {
  constructor(shareCostType: ShareCostTypes) {
    switch (shareCostType) {
      case ShareCostTypes.FIFO:
        return new FIFOShareCost()
      case ShareCostTypes.LIFO:
        return new LIFOShareCost()
      case ShareCostTypes.HighestCost:
        return new HighestCosthareCost()
      case ShareCostTypes.LowestCost:
        return new LowestCostShareCost()
      default:
        return new FIFOShareCost()
    }
  }
}
