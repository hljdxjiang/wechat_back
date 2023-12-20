import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import sysParamConfigApi from '@/api/sys/sysParamConfig'
import MyPage from '@/components/common/myPage';

const SysParamConfig: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'configName',
            slot: <Input placeholder="配置中文名" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'configKey',
            slot: <Input placeholder="配置主键" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'configValue',
            slot: <Input placeholder="配置值" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'configDesc',
            slot: <Input placeholder="配置描述" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'lastUpdateTime',
            slot: <Input placeholder="最后修改时间" allowClear/>,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '配置中文名',
            key: 'configName',
            dataIndex: 'configName',
        }

        , {
            title: '配置主键',
            key: 'configKey',
            dataIndex: 'configKey',
        }

        , {
            title: '配置值',
            key: 'configValue',
            dataIndex: 'configValue',
        }

        , {
            title: '配置描述',
            key: 'configDesc',
            dataIndex: 'configDesc',
        }


        , {
            title: '最后修改时间',
            key: 'lastUpdateTime',
            dataIndex: 'lastUpdateTime',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={sysParamConfigApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysParamConfigApi.add}
                editApiFun={sysParamConfigApi.edit}
                delApiFun={sysParamConfigApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysParamConfig
