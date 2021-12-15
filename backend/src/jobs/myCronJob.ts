import {CronJob, cronJob} from '@loopback/cron';
import {repository} from '@loopback/repository';
import {Exchange, Quotation} from '../models';
import {QuotationRepository, ExchangeRepository} from '../repositories';

@cronJob()
export class MyCronJob extends CronJob {
 constructor(@repository(ExchangeRepository) public exchangeRepository: ExchangeRepository,@repository(QuotationRepository) public quotationRepository:QuotationRepository) {
   super({
     name: 'job-B', onTick: async () => {
       let exchanges: Exchange[] = await exchangeRepository.find();
       var quotation:any = {
         price:0,
         dateCreation:'',
         coinId:'',
         result:true

       }
      exchanges.forEach((exchange) => {
        // tengo que poner una fecha valida
        quotation.dateCreation = 'dakjadkja',
        quotation.price = eval(exchange.script),
        quotation.coinId = exchange.coinId
        quotationRepository.create(quotation)
      })
     },
     cronTime: '*/10 * * * * *',
     start: true,
   });}
}
