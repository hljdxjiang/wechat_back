import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import userLocationRecordApi from '@/api/user/userLocationRecord'
import ModelPage from '@/components/common/modelPage';

const UserLocationRecord: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'userId',
            slot: <Input placeholder="" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'latitude',
            slot: <Input placeholder="地理位置纬度" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'longitude',
            slot: <Input placeholder="地理位置经度" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'precision',
            slot: <Input placeholder="地理位置精度" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'channel',
            slot: <Input placeholder="渠道" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'validDate',
            slot: <Input placeholder="生效日期" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '',
            key: 'userId',
            dataIndex: 'userId',
        }

        , {
            title: '地理位置纬度',
            key: 'latitude',
            dataIndex: 'latitude',
        }

        , {
            title: '地理位置经度',
            key: 'longitude',
            dataIndex: 'longitude',
        }

        , {
            title: '地理位置精度',
            key: 'precision',
            dataIndex: 'precision',
        }

        , {
            title: '渠道',
            key: 'channel',
            dataIndex: 'channel',
        }

        , {
            title: '生效日期',
            key: 'validDate',
            dataIndex: 'validDate',
        }

    ]
    return (
        <>
            <ModelPage
                apiFun={userLocationRecordApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={userLocationRecordApi.add}
                editApiFun={userLocationRecordApi.edit}
                delApiFun={userLocationRecordApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default UserLocationRecord
