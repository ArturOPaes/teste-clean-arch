import { LogControllerDecorator } from "@/main/decorators/log-controller-decorator";
import { Controller } from "@/presentation/protocols";

export const makeLogControllerDecorator = (controller: Controller) : Controller  => {
  // const logRepository = 
  return new LogControllerDecorator(controller);
}