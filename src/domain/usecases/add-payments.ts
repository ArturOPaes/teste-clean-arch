import { Payment } from "../models/Payment";

export interface AddPayments {
  add: (params: AddPayments.Params) => Promise<AddPayments.Result>
}

export namespace AddPayments {
  export type Params = {
    price: number
    transaction_code: string
    payment_method: string
    created_at: Date
    updated_at: Date
    deleted_at: Date
    provider_name: string
    user_id: string
    external_product_id: string
  }
  export type Result = Payment
}