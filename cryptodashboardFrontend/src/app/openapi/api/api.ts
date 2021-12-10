export * from './coinController.service';
import { CoinControllerService } from './coinController.service';
export * from './pingController.service';
import { PingControllerService } from './pingController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [CoinControllerService, PingControllerService, UserControllerService];
