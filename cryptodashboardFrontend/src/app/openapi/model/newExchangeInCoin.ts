/**
 * backend
 * iaw
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: mozzonfederico@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Exchange, \'idExchange\'>, \'coinId\'>, schemaOptions: { title: \'NewExchangeInCoin\', exclude: [ \'idExchange\' ], optional: [ \'coinId\' ] })
 */
export interface NewExchangeInCoin { 
    nameExchange: string;
    script: string;
    coinId?: string;
}

