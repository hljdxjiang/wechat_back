import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import backSysRolesApi from '@/api/back/backSysRoles'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';
import RolePage from '@/components/common/myPage/roleModel'

const BackSysRoles: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'roleId',
            slot: <Input placeholder="角色编号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'roleName',
            slot: <Input placeholder="角色名称" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'roleRemark',
            slot: <Input placeholder="角色描述" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [{
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

        , {
            title: '创建时间',
            key: 'createTime',
            dataIndex: 'createTime',
            tableShow:false,
        }

        , {
            title: '最后修改时间',
            key: 'lastModifiedTime',
            dataIndex: 'lastModifiedTime',
            tableShow:false,
        }

    ]
    return (
        <>
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
        </>
    )
}
export default BackSysRoles
