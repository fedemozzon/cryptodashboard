import {CronJob, cronJob} from '@loopback/cron';
import {repository} from '@loopback/repository';
import {Coin} from '../models';
import {CoinRepository} from '../repositories';

@cronJob()
export class MyCronJob extends CronJob {
 constructor(@repository(CoinRepository) public coinRepository: CoinRepository,) {
   super({
     name: 'job-B', onTick: async () => {
       let coins: Coin[] = await coinRepository.find();
       console.log(new Date());
       console.log(coins);
     },
     cronTime: '*/10 * * * * *',
     start: true,
   });}}
