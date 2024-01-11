import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import backSysUserApi from '@/api/back/backSysUser'
import MyPage from '@/components/common/myPage';
import MySelect from '@/components/common/mySelect';

const BackSysUser: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'userId',
            slot: <Input placeholder="用户ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'passwd',
            slot: <Input placeholder="密码" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'groupId',
            slot: <Input placeholder="用户分组ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'roleId',
            slot: <Input placeholder="角色ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'userName',
            slot: <Input placeholder="姓名" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'mobileNo',
            slot: <Input placeholder="手机号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'idNo',
            slot: <Input placeholder="证件号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <MySelect
                placeholder="gender" defaultValue="0" paramType="aaa" allowClear={true} />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '用户ID',
            key: 'userId',
            dataIndex: 'userId',
        }

        , {
            title: '密码',
            key: 'passwd',
            dataIndex: 'passwd',
        }

        , {
            title: '用户分组ID',
            key: 'groupId',
            dataIndex: 'groupId',
        }

        , {
            title: '角色ID',
            key: 'roleId',
            dataIndex: 'roleId',
        }

        , {
            title: '姓名',
            key: 'userName',
            dataIndex: 'userName',
        }

        , {
            title: '手机号',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
        }

        , {
            title: '邮箱地址',
            key: 'email',
            dataIndex: 'email',
        }

        , {
            title: '证件号',
            key: 'idNo',
            dataIndex: 'idNo',
        }

        , {
            title: '证件类型',
            key: 'idType',
            dataIndex: 'idType',
        }

        , {
            title: '二次认证码',
            key: 'oauthCode',
            dataIndex: 'oauthCode',
        }

        , {
            title: '用户备注',
            key: 'remark',
            dataIndex: 'remark',
        }

        , {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }


    ]
    return (
        <>
            <MyPage
                apiFun={backSysUserApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backSysUserApi.add}
                editApiFun={backSysUserApi.edit}
                delApiFun={backSysUserApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackSysUser
