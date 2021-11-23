export * from './coinControllerController.service';
import { CoinControllerControllerService } from './coinControllerController.service';
export * from './pingController.service';
import { PingControllerService } from './pingController.service';
export * from './quotationControllerController.service';
import { QuotationControllerControllerService } from './quotationControllerController.service';
export const APIS = [CoinControllerControllerService, PingControllerService, QuotationControllerControllerService];
