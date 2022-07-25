import request from './request'

interface AdminLoginData{
    username:string,
    password:string
}
//登录返回token
interface AdminLoginRes{
    code:number,
    data:{
        token:string,
        tokenHead:string
    };
    message:string
}
export const adminLoginApi= (data:AdminLoginData):Promise<AdminLoginRes> => request.post('/admin/login',data)