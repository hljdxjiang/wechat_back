import request from '@/utils/axios'

export default {
    // 分页查询
    queryByPage(params?: object): Promise<CommonObjectType<string>> {
        return request.post('wechatMenusVersion/queryByPage', params)
    },
    // 新增数据
    add(params?: object): Promise<CommonObjectType<string>> {
        return request.post('wechatMenusVersion/add', params)
    },
    // 修改数据
    edit(params?: object): Promise<CommonObjectType<string>> {
        return request.post('wechatMenusVersion/edit', params)
    },
    // 修改数据
    deleteById(params?: object): Promise<CommonObjectType<string>> {
        return request.post('wechatMenusVersion/delete', params)
    }
}
