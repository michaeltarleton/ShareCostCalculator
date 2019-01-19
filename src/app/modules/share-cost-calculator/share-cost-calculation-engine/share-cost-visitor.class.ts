// tslint:disable:max-classes-per-file

import { ShareRecord } from '@app/core/services/cost-data/cost-data-share-record.interface'
import { FIFOShareCost, HighestCosthareCost, LIFOShareCost, LowestCostShareCost } from './share-cost.class'

export interface IShareCostVisitor {
  visit: (shareCost: LIFOShareCost | FIFOShareCost | HighestCosthareCost | LowestCostShareCost) => number
}

export abstract class BaseShareCostVisitor {
  protected shareRecords: ReadonlyArray<ShareRecord>
  constructor(shareRecords: ReadonlyArray<ShareRecord>) {
    this.shareRecords = shareRecords
  }
}

export class ShareCostVisitor extends BaseShareCostVisitor implements IShareCostVisitor {
  constructor(shareRecords: ReadonlyArray<ShareRecord>) {
    super(shareRecords)
  }
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

export class ShareGainLossVisitor extends BaseShareCostVisitor implements IShareCostVisitor {
  constructor(shareRecords: ReadonlyArray<ShareRecord>) {
    super(shareRecords)
  }
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

export class RemaininSharesVisitor extends BaseShareCostVisitor implements IShareCostVisitor {
  constructor(shareRecords: ReadonlyArray<ShareRecord>) {
    super(shareRecords)
  }
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

export class RemainingShareCostPriceVisitor extends BaseShareCostVisitor implements IShareCostVisitor {
  constructor(shareRecords: ReadonlyArray<ShareRecord>) {
    super(shareRecords)
  }
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
