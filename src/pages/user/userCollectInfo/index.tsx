import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import userCollectInfoApi from '@/api/user/userCollectInfo'
import MyPage from '@/components/common/myPage';

const UserCollectInfo: FC = () => {
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
            title: '用户ID',
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
            <MyPage
                apiFun={userCollectInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={userCollectInfoApi.add}
                editApiFun={userCollectInfoApi.edit}
                delApiFun={userCollectInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default UserCollectInfo
