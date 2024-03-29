import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import mallActivityUserApi from '@/api/mall/mallActivityUser'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const MallActivityUser: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'activityId',
            slot: <Input placeholder="活动ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="参与状态0参与1完成" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'userid',
            slot: <Input placeholder="参与用户ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'complateTime',
            slot: <Input placeholder="完成时间" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns:TableColumn[] = [


        {
            title: '活动ID',
            key: 'activityId',
            dataIndex: 'activityId',
        }

        , {
            title: '参与状态0参与1完成',
            key: 'status',
            dataIndex: 'status',
        }

        , {
            title: '参与用户ID',
            key: 'userid',
            dataIndex: 'userid',
        }


        , {
            title: '完成时间',
            key: 'complateTime',
            dataIndex: 'complateTime',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={mallActivityUserApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallActivityUserApi.add}
                editApiFun={mallActivityUserApi.edit}
                delApiFun={mallActivityUserApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallActivityUser
