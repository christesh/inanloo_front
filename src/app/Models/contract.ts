import {person} from './person';
import {plan} from './plan';
import {insurancecompany} from './insurancecompany'
import {company} from './company'
export interface contract {
id:number;
title:  string;
policy_owner :  company;
insurer :  string;
start_date :  Date;
end_date :  Date;
created_at :  Date;
created_by : person;
contract_number : string;
contract_image : string;
plan : plan;
}