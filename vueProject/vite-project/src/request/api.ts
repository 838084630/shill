import request from './request'

//用类型别名简化Promise
type PromiseRes<T> = Promise<ManageResult<T>>

interface AdminLoginData {
    username: string,
    password: string
}
//登录返回token
interface ManageResult<T> {
    code: number,
    data: T
    // message: string
}
//登陆的返回接口
interface AdminLoginRes{
    token: string;
    tokenHead: string
}
//当前的用户信息
interface AdminInfoRes{
    menus: []
}
export const adminLoginApi = (data: AdminLoginData): PromiseRes<AdminLoginRes> => request.post('/admin/login', data)
export const getAdminInfoApi = (): PromiseRes<AdminInfoRes> => request.get('/admin/info')