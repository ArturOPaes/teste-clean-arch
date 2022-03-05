import { AddPaymentRepository } from "@/application/procols/db/payment/add-payment-repository";
import { Payment } from "@/domain/models/Payment";
import { AddPayments } from "@/domain/usecases/add-payments";


export class PaymentSequelizeRepository implements AddPaymentRepository {
  async add (params: AddPayments.Params): Promise<Payment> {
    
  }
}