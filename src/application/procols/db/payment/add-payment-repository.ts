import { AddPayments } from "@/domain/usecases/add-payments";

export interface AddPaymentRepository {
  add: (params: AddPaymentRepository.Params) => Promise<AddPaymentRepository.Result>;
}

export namespace AddPaymentRepository {
  export type Params = AddPayments.Params
  export type Result = AddPayments.Result
}