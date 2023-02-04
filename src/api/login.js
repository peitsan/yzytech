import { Get,PostJson} from '../utils/request';
import api from '../utils/api';
const config ={
    headers:{'Access-Control-Allow-Origin':'*'},
    contentType: "application/json",
    dataType: "json",
}
export function Login(params){
    return PostJson(api.login,params,config);
}

export function Register(params){
    return PostJson(api.register,params,config)
}