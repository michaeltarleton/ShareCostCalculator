import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ShareCostTypes } from './share-cost-calculation-engine/share-cost.interface'

@Component({
  selector: 'app-share-cost-calculator',
  templateUrl: './share-cost-calculator.component.html',
  styleUrls: ['./share-cost-calculator.component.css'],
})
export class ShareCostCalculatorComponent {
  shareCostTypes = Object.keys(ShareCostTypes)
  calculationForm = this.fb.group({
    sharesSold: ['', [Validators.required]],
    sharePrice: ['', [Validators.required]],
    sellDate: ['', [Validators.required]],
    costMethod: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder) {}
}
