import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import sysTenantTokenApi from '@/api/sys/sysTenantToken'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const SysTenantToken: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'status',
            slot: <Input placeholder="用户状态" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'authType',
            slot: <Input placeholder="认证方式0直接认证1授权认证" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'appid',
            slot: <Input placeholder="微信ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'appSecret',
            slot: <Input placeholder="微信秘钥" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'channel',
            slot: <Input placeholder="token渠道WX,MINIP,JD" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'token',
            slot: <Input placeholder="token值" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'refreshToken',
            slot: <Input placeholder="刷新token" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'echostr',
            slot: <Input placeholder="微信配置Key" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns:TableColumn[] = [


        {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }

        , {
            title: '认证方式0直接认证1授权认证',
            key: 'authType',
            dataIndex: 'authType',
        }

        , {
            title: '微信ID',
            key: 'appid',
            dataIndex: 'appid',
        }

        , {
            title: '微信秘钥',
            key: 'appSecret',
            dataIndex: 'appSecret',
        }

        , {
            title: 'token渠道WX,MINIP,JD',
            key: 'channel',
            dataIndex: 'channel',
        }

        , {
            title: 'token值',
            key: 'token',
            dataIndex: 'token',
        }

        , {
            title: '刷新token',
            key: 'refreshToken',
            dataIndex: 'refreshToken',
        }

        , {
            title: '微信配置Key',
            key: 'echostr',
            dataIndex: 'echostr',
        }


    ]
    return (
        <>
            <ViewPage
                apiFun={sysTenantTokenApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysTenantTokenApi.add}
                editApiFun={sysTenantTokenApi.edit}
                delApiFun={sysTenantTokenApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysTenantToken
