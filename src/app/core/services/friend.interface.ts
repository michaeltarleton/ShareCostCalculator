import { PurchasedItem } from './purchased-item.interface'

export interface Friend {
  id: string
  name: string
  purchasedItems: ReadonlyArray<PurchasedItem>
}
