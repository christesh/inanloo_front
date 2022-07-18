import {person} from './person'
import { service } from './service';
export interface plan {
    id:number;
    title : string;
    created_by :person;
    created_at : Date
    description :string;
    service : service;
}