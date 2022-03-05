import { AddPayments } from "@/domain/usecases/add-payments";
import { badRequest, created, serverError } from "@/presentation/helper/http-helper";
import { Controller } from "@/presentation/protocols/controller";
import { HttpResponse } from "@/presentation/protocols/http";
import { Validation } from "@/presentation/protocols/validation";

export class AddPaymentController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly addPayment: AddPayments,
  ) {}

  async handle (request: AddPaymentController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if(error) {
        return badRequest(error)
      }

      const result = this.addPayment.add(request)

      return created(result)

    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddPaymentController {
  export type Request = AddPayments.Params
}