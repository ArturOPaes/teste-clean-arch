export type Payment = {
  id: string
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

export type PaymentTransaction = {
  id: string
  payment: Payment
  status: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
  raw_data: string
}