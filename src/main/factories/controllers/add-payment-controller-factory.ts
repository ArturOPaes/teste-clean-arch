import { AddPaymentsImpl } from "@/application/usecases/add-payments";
import { PaymentSequelizeRepository } from "@/infra/db/sequelize/modules/payment";
import { CieloProvider } from "@/infra/providers/cielo/cielo-provider";
import { AddPaymentController } from "@/presentation/controllers/payment/add-payment-controller";
import { Controller } from "@/presentation/protocols";
import { makeLogControllerDecorator } from "../decorators/log-controller-decorator-factory";
import { makeAddPaymentFactory } from "../usecases/add-payment-usecase-factory";

export const makeAddPaymentControllerFactory = (): Controller => {
  const controller = new AddPaymentController(null, makeAddPaymentFactory())
  return makeLogControllerDecorator(controller)
}