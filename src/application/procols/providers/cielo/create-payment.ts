import { AddPayments } from "@/domain/usecases/add-payments";

export interface CieloCreatePayment {
  create: (params: CieloCreatePayment.Params) => Promise<CieloCreatePayment.Result>;
}

export namespace CieloCreatePayment {
  export type Params = AddPayments.Params
  export type Result = AddPayments.Result
}