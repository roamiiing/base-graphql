import {Application as FApplication} from '@feathersjs/feathers';

export interface ServiceTypes {}

export type Application = FApplication<ServiceTypes>;
