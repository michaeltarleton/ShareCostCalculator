import { Component, OnChanges, SimpleChanges } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import moment from 'moment'
import { ShareCostTypes } from './share-cost-calculation-engine/share-cost.enum'

@Component({
  selector: 'app-share-cost-calculator',
  templateUrl: './share-cost-calculator.component.html',
  styleUrls: ['./share-cost-calculator.component.css'],
})
export class ShareCostCalculatorComponent implements OnChanges {
  dateFormat = 'YYYY-MM-DD'
  shareCostTypes = Object.keys(ShareCostTypes)
  calculationForm = this.fb.group({
    sharesSold: ['0', [Validators.required]],
    sharePrice: ['0', [Validators.required]],
    sellDate: [moment().format(this.dateFormat), [Validators.required]],
    costMethod: [ShareCostTypes.FIFO, [Validators.required]],
  })

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('main from', changes)
  }
  handleClick(calculationForm: FormGroup): void {
    console.log('clicked', calculationForm)
  }
}
