import request from '@/utils/axios'

export default {
    // 分页查询
    queryByPage(params?: object): Promise<CommonObjectType<string>> {
        return request.post('mallLotteryCondition/queryByPage', params)
    },
    // 新增数据
    add(params?: object): Promise<CommonObjectType<string>> {
        return request.post('mallLotteryCondition/add', params)
    },
    // 修改数据
    edit(params?: object): Promise<CommonObjectType<string>> {
        return request.post('mallLotteryCondition/edit', params)
    },
    // 修改数据
    deleteById(params?: object): Promise<CommonObjectType<string>> {
        return request.post('mallLotteryCondition/delete', params)
    }
}
