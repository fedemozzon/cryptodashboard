export * from './coinControllerController.service';
import { CoinControllerControllerService } from './coinControllerController.service';
export * from './coinQuotationController.service';
import { CoinQuotationControllerService } from './coinQuotationController.service';
export * from './pingController.service';
import { PingControllerService } from './pingController.service';
export const APIS = [CoinControllerControllerService, CoinQuotationControllerService, PingControllerService];
