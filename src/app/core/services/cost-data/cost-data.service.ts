import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { ShareRecord } from './cost-data-share-record.interface'
import DATA from './cost.db.json'

@Injectable({
  providedIn: 'root',
})
export class CostDataService {
  get(): Observable<ReadonlyArray<ShareRecord>> {
    return of(DATA)
  }
}
