import { CieloCreatePayment } from "@/application/procols/providers/cielo/create-payment";
import { Payment } from "@/domain/models/Payment";
import { AddPayments } from "@/domain/usecases/add-payments";

export class CieloProvider implements CieloCreatePayment {
  create: (params: AddPayments.Params) => Promise<Payment>;

}