import request from '@/utils/axios'

export default {
    // 分页查询
    queryByPage(params?: object): Promise<CommonObjectType<string>> {
        return request.post('backSysRoles/queryByPage', params)
    },
    // 新增数据
    add(params?: object): Promise<CommonObjectType<string>> {
        return request.post('backSysRoles/add', params)
    },
    // 修改数据
    edit(params?: object): Promise<CommonObjectType<string>> {
        return request.post('backSysRoles/edit', params)
    },
    // 修改数据
    deleteById(params?: object): Promise<CommonObjectType<string>> {
        return request.post('backSysRoles/delete', params)
    },

    getRoleDetail(params?: object): Promise<any> {
        return request.post('backSysRoles/getRoleDetail', params)
    },
    saveRole(params?: object): Promise<any> {
        return request.post('backSysRoles/saveRole', params)
    },
    deleteRole(params?: object): Promise<any> {
        return request.post('backSysRoles/deleteRole', params)
    }
}
