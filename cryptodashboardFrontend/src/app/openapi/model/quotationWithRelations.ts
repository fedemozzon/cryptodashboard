/**
 * cryptodashboard_backend
 * cryptodashboard
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: mozzonfederico@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * (tsType: QuotationWithRelations, schemaOptions: { includeRelations: true })
 */
export interface QuotationWithRelations { 
    idQuotation?: number;
    priceQuotation: number;
    exchangeQuotation: string;
    coinId?: string;
}

