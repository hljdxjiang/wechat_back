import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import userOperaRecordApi from '@/api/user/userOperaRecord'
import ViewPage from '@/components/common/viewPage';

const UserOperaRecord: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'userid',
            slot: <Input placeholder="登录账号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'operationType',
            slot: <Input placeholder="操作类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'requestUrl',
            slot: <Input placeholder="客户请求url" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'userIp',
            slot: <Input placeholder="用户ip" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'createtime',
            slot: <Input placeholder="创建时间" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'lastmodifiedtime',
            slot: <Input placeholder="最后修改时间" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'macAddr',
            slot: <Input placeholder="用户MAC地址" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'transCode',
            slot: <Input placeholder="交易码" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'version',
            slot: <Input placeholder="版本号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'sessionid',
            slot: <Input placeholder="登录sessionID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'replayid',
            slot: <Input placeholder="防止重放攻击ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'requestBody',
            slot: <Input placeholder="请求报文" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'responseCode',
            slot: <Input placeholder="返回报文状态" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '登录账号',
            key: 'userid',
            dataIndex: 'userid',
        }

        , {
            title: '操作类型',
            key: 'operationType',
            dataIndex: 'operationType',
        }

        , {
            title: '客户请求url',
            key: 'requestUrl',
            dataIndex: 'requestUrl',
        }

        , {
            title: '用户ip',
            key: 'userIp',
            dataIndex: 'userIp',
        }

        , {
            title: '创建时间',
            key: 'createtime',
            dataIndex: 'createtime',
        }

        , {
            title: '最后修改时间',
            key: 'lastmodifiedtime',
            dataIndex: 'lastmodifiedtime',
        }

        , {
            title: '用户MAC地址',
            key: 'macAddr',
            dataIndex: 'macAddr',
        }

        , {
            title: '交易码',
            key: 'transCode',
            dataIndex: 'transCode',
        }

        , {
            title: '版本号',
            key: 'version',
            dataIndex: 'version',
        }

        , {
            title: '登录sessionID',
            key: 'sessionid',
            dataIndex: 'sessionid',
        }

        , {
            title: '防止重放攻击ID',
            key: 'replayid',
            dataIndex: 'replayid',
        }

        , {
            title: '请求报文',
            key: 'requestBody',
            dataIndex: 'requestBody',
        }

        , {
            title: '返回报文状态',
            key: 'responseCode',
            dataIndex: 'responseCode',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={userOperaRecordApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={userOperaRecordApi.add}
                editApiFun={userOperaRecordApi.edit}
                delApiFun={userOperaRecordApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default UserOperaRecord
