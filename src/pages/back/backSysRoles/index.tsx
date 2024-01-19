import React, {FC} from 'react'
import {Input,} from 'antd'
import backSysRolesApi from '@/api/back/backSysRoles'
import RolePage from '@/components/common/modelPage/roleModel'
import { SearchColumn, TableColumn } from '@/app_models/user';

const BackSysRoles: FC = () => {
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'roleId',
            slot: <Input placeholder="角色编号" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'roleName',
            slot: <Input placeholder="角色名称" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'roleRemark',
            slot: <Input placeholder="角色描述" allowClear/>,
            rules: [],
            initialValue: ''
        }
    ]
    const columns:TableColumn[] = [{
        title: '角色编号',
        key: 'roleId',
        dataIndex: 'roleId',
    }

        , {
            title: '角色名称',
            key: 'roleName',
            dataIndex: 'roleName',
        }

        , {
            title: '角色描述',
            key: 'roleRemark',
            dataIndex: 'roleRemark',
        }
    ]
    return (
        <RolePage
            apiFun={backSysRolesApi.queryByPage}
            columns={columns}
            permissionPrefix={"user:list"}
            addApiFun={backSysRolesApi.add}
            editApiFun={backSysRolesApi.edit}
            delApiFun={backSysRolesApi.deleteById}
            showOpeation={true}
            searchConfigList={searchConfigList}
        />
    )
}
export default BackSysRoles
