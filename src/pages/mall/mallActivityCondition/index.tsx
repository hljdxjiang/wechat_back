import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import mallActivityConditionApi from '@/api/mall/mallActivityCondition'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const MallActivityCondition: FC = () => {
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
            key: 'conditionId',
            slot: <Input placeholder="条件ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'conditionValue',
            slot: <Input placeholder="条件值" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'conditionType',
            slot: <Input placeholder="条件类别" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'conditionWay',
            slot: <Input placeholder="条件方式：大于，小于，等于，包含" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="用户状态" allowClear />,
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
            title: '条件ID',
            key: 'conditionId',
            dataIndex: 'conditionId',
        }

        , {
            title: '条件值',
            key: 'conditionValue',
            dataIndex: 'conditionValue',
        }

        , {
            title: '条件类别',
            key: 'conditionType',
            dataIndex: 'conditionType',
        }

        , {
            title: '条件方式：大于，小于，等于，包含',
            key: 'conditionWay',
            dataIndex: 'conditionWay',
        }

        , {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }


    ]
    return (
        <>
            <ViewPage
                apiFun={mallActivityConditionApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallActivityConditionApi.add}
                editApiFun={mallActivityConditionApi.edit}
                delApiFun={mallActivityConditionApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallActivityCondition
