import {company} from './company'
import {province} from './province'
import {user} from './user'
import {mainuser} from './mainuser'

export interface person {
    id:number;
    f_name : string;
    l_name : string;
    father_name : string;
    national_id :string;
    birth_date : string;
    phone : string;
    mobile : string;
    e_mail : string;
    address : string;
    shaba_number : string;
    created_at : string;
    province : province;
    auth : user;
    picture : string;
  
    company : company;
    is_main_user : mainuser;
    parent : person;
    rate : string;
   
  }