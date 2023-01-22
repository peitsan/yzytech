import { Get,Post} from '../utils/request';
import api from '../utils/api';

export function Login(params){
    return Post(api.login,{params})
}