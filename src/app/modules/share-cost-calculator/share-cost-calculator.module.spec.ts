import { ShareCostCalculatorModule } from './share-cost-calculator.module';

describe('ShareCostCalculatorModule', () => {
  let shareCostCalculatorModule: ShareCostCalculatorModule;

  beforeEach(() => {
    shareCostCalculatorModule = new ShareCostCalculatorModule();
  });

  it('should create an instance', () => {
    expect(shareCostCalculatorModule).toBeTruthy();
  });
});
