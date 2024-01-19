import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import backUserLoginRecordApi from '@/api/back/backUserLoginRecord'
import ViewPage from '@/components/common/viewPage';

const BackUserLoginRecord: FC = () => {
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
            key: 'ipAddr',
            slot: <Input placeholder="登录Ip" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'country',
            slot: <Input placeholder="国家" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'province',
            slot: <Input placeholder="省份" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'city',
            slot: <Input placeholder="城市" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'county',
            slot: <Input placeholder="县区" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'loginTime',
            slot: <Input placeholder="登录时间" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'loginResult',
            slot: <Input placeholder="登录结果描述" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'loginResultCode',
            slot: <Input placeholder="登录结果码值" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'isp',
            slot: <Input placeholder="运营商" allowClear />,
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
            title: '登录Ip',
            key: 'ipAddr',
            dataIndex: 'ipAddr',
        }

        , {
            title: '国家',
            key: 'country',
            dataIndex: 'country',
        }

        , {
            title: '省份',
            key: 'province',
            dataIndex: 'province',
        }

        , {
            title: '城市',
            key: 'city',
            dataIndex: 'city',
        }

        , {
            title: '县区',
            key: 'county',
            dataIndex: 'county',
        }

        , {
            title: '登录时间',
            key: 'loginTime',
            dataIndex: 'loginTime',
        }

        , {
            title: '登录结果描述',
            key: 'loginResult',
            dataIndex: 'loginResult',
        }

        , {
            title: '登录结果码值',
            key: 'loginResultCode',
            dataIndex: 'loginResultCode',
        }

        , {
            title: '运营商',
            key: 'isp',
            dataIndex: 'isp',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={backUserLoginRecordApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backUserLoginRecordApi.add}
                editApiFun={backUserLoginRecordApi.edit}
                delApiFun={backUserLoginRecordApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackUserLoginRecord
