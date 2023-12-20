import {UserInfo} from '@/app_models/user'
import request from '@/utils/axios'

export default {
    // 获取数据
    login(params?: object): Promise<UserInfo> {
        return request.post('userLogin/login', params)
    },
    logOut(params?: object): Promise<UserInfo> {
        return request.post('userLogin/logOut', params)
    },
    changePwd(params?: object): Promise<any> {
        console.log("changePwd", params)
        return request.post('userLogin/changePwd', params)
    }
}
