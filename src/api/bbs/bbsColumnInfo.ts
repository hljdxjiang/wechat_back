import request from '@/utils/axios'

export default {
    // 分页查询
    queryByPage(params?: object): Promise<CommonObjectType<string>> {
        return request.post('bbsColumnInfo/queryByPage', params)
    },
    // 新增数据
    add(params?: object): Promise<CommonObjectType<string>> {
        return request.post('bbsColumnInfo/add', params)
    },
    // 修改数据
    edit(params?: object): Promise<CommonObjectType<string>> {
        return request.post('bbsColumnInfo/edit', params)
    },
    // 修改数据
    deleteById(params?: object): Promise<CommonObjectType<string>> {
        return request.post('bbsColumnInfo/delete', params)
    }
}
