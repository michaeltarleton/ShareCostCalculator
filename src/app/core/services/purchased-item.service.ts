import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '@env'
import { Observable } from 'rxjs'
import { take } from 'rxjs/operators'

import { PurchasedItem } from './purchased-item.interface'

@Injectable({
  providedIn: 'root',
})
export class PurchasedItemService {
  private readonly _baseUrl = `${environment.api}/friend`

  constructor(private http: HttpClient) {}

  getAll(friendId: string): Observable<ReadonlyArray<PurchasedItem>> {
    return this.http.get<ReadonlyArray<PurchasedItem>>(`${this._baseUrl}/${friendId}/purchased`).pipe(take(1))
  }

  get(friendId: string, purchasedItemId: string): Observable<PurchasedItem> {
    return this.http.get<PurchasedItem>(`${this._baseUrl}/${friendId}/purchased/${purchasedItemId}`).pipe(take(1))
  }

  add(friendId: string, purchasedItem: PurchasedItem): Observable<string> {
    return this.http
      .post(`${this._baseUrl}/${friendId}/purchased`, purchasedItem, { responseType: 'text' })
      .pipe(take(1))
  }

  update(friendId: string, purchasedItemId: string, purchasedItem: PurchasedItem): Observable<PurchasedItem> {
    return this.http
      .put<PurchasedItem>(`${this._baseUrl}/${friendId}/purchased/${purchasedItemId}`, purchasedItem)
      .pipe(take(2))
  }

  remove(friendId: string, purchasedItemId: string): Observable<string> {
    return this.http
      .delete(`${this._baseUrl}/${friendId}/purchased/${purchasedItemId}`, { responseType: 'text' })
      .pipe(take(1))
  }
}
