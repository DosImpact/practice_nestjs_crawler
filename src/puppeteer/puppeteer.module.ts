import { DynamicModule, Global, Module } from "@nestjs/common";
import { PuppeteerService } from "./puppeteer.service";


@Module({})
@Global()
export class PuppeteerModule{
    static forRoot():DynamicModule{
        return {
            module:PuppeteerModule,
            providers:[PuppeteerService],
            exports:[PuppeteerService]
        }
    }
}