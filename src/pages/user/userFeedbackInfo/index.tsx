import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import userFeedbackInfoApi from '@/api/user/userFeedbackInfo'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const UserFeedbackInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList: SearchColumn[] = [
        {
            key: 'userId',
            slot: <Input placeholder="反馈用户ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'mobileNo',
            slot: <Input placeholder="客户手机号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="状态" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'feedType',
            slot: <Input placeholder="反馈类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'feedTitle',
            slot: <Input placeholder="反馈标题" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns: TableColumn[] = [
        {
            title: '反馈用户ID',
            key: 'userId',
            dataIndex: 'userId',
            requried: true,
            rules: [{ required: true, message: 'Please select time!' }]
        }

        , {
            title: '客户手机号',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
            requried: true
        }

        , {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }


        , {
            title: '反馈类型',
            key: 'feedType',
            dataIndex: 'feedType',
            requried: true
        }

        , {
            title: '反馈标题',
            key: 'feedTitle',
            dataIndex: 'feedTitle',
            requried: true
        }

        , {
            title: '反馈详情',
            key: 'feedDetail',
            dataIndex: 'feedDetail',
        }

        , {
            title: '反馈影像地址',
            key: 'feedImg',
            dataIndex: 'feedImg',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={userFeedbackInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={userFeedbackInfoApi.add}
                editApiFun={userFeedbackInfoApi.edit}
                delApiFun={userFeedbackInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default UserFeedbackInfo
