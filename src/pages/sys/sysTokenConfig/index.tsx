import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import sysTokenConfigApi from '@/api/sys/sysTokenConfig'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const SysTokenConfig: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'appid',
            slot: <Input placeholder="程序ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'tokenKey',
            slot: <Input placeholder="Token码值" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'tokenDesc',
            slot: <Input placeholder="Token描述" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'tokenVaildType',
            slot: <Input placeholder="Token有效期类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'tokenValidTime',
            slot: <Input placeholder="token有效期时常" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'tokenStatus',
            slot: <Input placeholder="配置状态" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'lastUpdateTime',
            slot: <Input placeholder="最后修改时间" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns:TableColumn[] = [


        {
            title: '程序ID',
            key: 'appid',
            dataIndex: 'appid',
        }

        , {
            title: 'Token码值',
            key: 'tokenKey',
            dataIndex: 'tokenKey',
        }

        , {
            title: 'Token描述',
            key: 'tokenDesc',
            dataIndex: 'tokenDesc',
        }

        , {
            title: 'Token有效期类型',
            key: 'tokenVaildType',
            dataIndex: 'tokenVaildType',
        }

        , {
            title: 'token有效期时常',
            key: 'tokenValidTime',
            dataIndex: 'tokenValidTime',
        }

        , {
            title: '配置状态',
            key: 'tokenStatus',
            dataIndex: 'tokenStatus',
        }


        , {
            title: '最后修改时间',
            key: 'lastUpdateTime',
            dataIndex: 'lastUpdateTime',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={sysTokenConfigApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysTokenConfigApi.add}
                editApiFun={sysTokenConfigApi.edit}
                delApiFun={sysTokenConfigApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysTokenConfig
