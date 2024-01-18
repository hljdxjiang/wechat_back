import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import userFeedbackInfoApi from '@/api/user/userFeedbackInfo'
import ModelPage from '@/components/common/modelPage';

const UserFeedbackInfo: FC = () => {
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
            key: 'mobileNo',
            slot: <Input placeholder="客户手机号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="用户状态" allowClear />,
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
        , {
            key: 'feedDetail',
            slot: <Input placeholder="反馈详情" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'feedImg',
            slot: <Input placeholder="反馈影像地址" allowClear />,
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
            title: '客户手机号',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
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
        }

        , {
            title: '反馈标题',
            key: 'feedTitle',
            dataIndex: 'feedTitle',
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
            <ModelPage
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
