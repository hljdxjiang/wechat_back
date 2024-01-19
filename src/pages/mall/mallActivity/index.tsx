import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import mallActivityApi from '@/api/mall/mallActivity'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const MallActivity: FC = () => {
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
            key: 'activityTitle',
            slot: <Input placeholder="活动标题" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'activityDetail',
            slot: <Input placeholder="活动详情" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'activityType',
            slot: <Input placeholder="活动类别" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'reward',
            slot: <Input placeholder="奖励类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'rewardAmount',
            slot: <Input placeholder="奖励金额" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'vaildDate',
            slot: <Input placeholder="活动生效日" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'expireDate',
            slot: <Input placeholder="活动失效日期" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'rewardValidDate',
            slot: <Input placeholder="奖励使用开始日期" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'rewardExpireDate',
            slot: <Input placeholder="奖励失效日期" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'numbero',
            slot: <Input placeholder="最多参与人数" allowClear />,
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
            title: '活动标题',
            key: 'activityTitle',
            dataIndex: 'activityTitle',
        }

        , {
            title: '活动详情',
            key: 'activityDetail',
            dataIndex: 'activityDetail',
        }

        , {
            title: '活动类别',
            key: 'activityType',
            dataIndex: 'activityType',
        }

        , {
            title: '奖励类型',
            key: 'reward',
            dataIndex: 'reward',
        }

        , {
            title: '奖励金额',
            key: 'rewardAmount',
            dataIndex: 'rewardAmount',
        }

        , {
            title: '活动生效日',
            key: 'vaildDate',
            dataIndex: 'vaildDate',
        }

        , {
            title: '活动失效日期',
            key: 'expireDate',
            dataIndex: 'expireDate',
        }

        , {
            title: '奖励使用开始日期',
            key: 'rewardValidDate',
            dataIndex: 'rewardValidDate',
        }

        , {
            title: '奖励失效日期',
            key: 'rewardExpireDate',
            dataIndex: 'rewardExpireDate',
        }

        , {
            title: '最多参与人数',
            key: 'numbero',
            dataIndex: 'numbero',
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
                apiFun={mallActivityApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallActivityApi.add}
                editApiFun={mallActivityApi.edit}
                delApiFun={mallActivityApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallActivity
