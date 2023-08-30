export class ServiceRequest {
    serviceId!: number;
    service!: string;
    priority!: string;
    title!: string;
    description!: string;
    expectedBy!: Date;
    selectServiceLevel!: string;
    osVersion!: string;
    fwVersion!: string;
    hwPlatform!: string;
    hwConfiguration!: string;
    recipeLink!: string;
    additionalInstruction!: string;
}
