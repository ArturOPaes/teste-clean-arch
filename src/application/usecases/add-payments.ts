import { AddPaymentRepository } from './../procols/db/payment/add-payment-repository';
import { Payment } from '@/domain/models/Payment';
import { AddPayments } from '@/domain/usecases/add-payments';
import { CieloCreatePayment } from '../procols/providers/cielo/create-payment';

export class AddPaymentsImpl implements AddPayments {
  constructor(
    private readonly addPaymentRepository: AddPaymentRepository,
    private readonly cieloCreatePayment: CieloCreatePayment,
  ) {}
  async add(params: AddPayments.Params): Promise<Payment> {
    let result;
    if (params.provider_name === 'CIELO') {
      result = await this.cieloCreatePayment.create(params)
    }
    const payment = await this.addPaymentRepository.add(result)
    return payment;
  }
  
}