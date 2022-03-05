import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddPaymentControllerFactory } from '@/main/factories/controllers/add-payment-controller-factory'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/payment', adaptRoute(makeAddPaymentControllerFactory()))
}