import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import sysUserLabelsApi from '@/api/sys/sysUserLabels'
import MyPage from '@/components/common/myPage';

const SysUserLabels: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'status',
            slot: <Input placeholder="用户状态" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'labelId',
            slot: <Input placeholder="用户标签ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'labelKey',
            slot: <Input placeholder="标签key" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'labelDesc',
            slot: <Input placeholder="标签中文描述" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }


        , {
            title: '用户标签ID',
            key: 'labelId',
            dataIndex: 'labelId',
        }

        , {
            title: '标签key',
            key: 'labelKey',
            dataIndex: 'labelKey',
        }

        , {
            title: '标签中文描述',
            key: 'labelDesc',
            dataIndex: 'labelDesc',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={sysUserLabelsApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysUserLabelsApi.add}
                editApiFun={sysUserLabelsApi.edit}
                delApiFun={sysUserLabelsApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysUserLabels
