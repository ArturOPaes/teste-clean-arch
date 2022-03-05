import { AddPaymentsImpl } from "@/application/usecases/add-payments"
import { PaymentSequelizeRepository } from "@/infra/db/sequelize/modules/payment"
import { CieloProvider } from "@/infra/providers/cielo/cielo-provider"

export const makeAddPaymentFactory = () => {
  const paymentRepository = new PaymentSequelizeRepository()
  return new AddPaymentsImpl(paymentRepository, new CieloProvider())
  
}