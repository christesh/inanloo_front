import {insurancecompany} from './insurancecompany'
export interface company {
    id:number;
    name : string;
    national_no : string;
    picture :string;
    address :string;
    phone_number :string;
    email : string
    last_insurer : insurancecompany
}