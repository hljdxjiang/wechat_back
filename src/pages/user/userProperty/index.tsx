import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import userPropertyApi from '@/api/user/userProperty'
import ViewPage from '@/components/common/viewPage';

const UserProperty: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'userid',
            slot: <Input placeholder="登录账号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'integral',
            slot: <Input placeholder="积分" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'species',
            slot: <Input placeholder="金币" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'silverIcon',
            slot: <Input placeholder="银币" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'balance',
            slot: <Input placeholder="余额" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'giftAmount',
            slot: <Input placeholder="赠送金额余额" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'createtime',
            slot: <Input placeholder="创建时间" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'lastmodifiedtime',
            slot: <Input placeholder="最后修改时间" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '登录账号',
            key: 'userid',
            dataIndex: 'userid',
        }

        , {
            title: '积分',
            key: 'integral',
            dataIndex: 'integral',
        }

        , {
            title: '金币',
            key: 'species',
            dataIndex: 'species',
        }

        , {
            title: '银币',
            key: 'silverIcon',
            dataIndex: 'silverIcon',
        }

        , {
            title: '余额',
            key: 'balance',
            dataIndex: 'balance',
        }

        , {
            title: '赠送金额余额',
            key: 'giftAmount',
            dataIndex: 'giftAmount',
        }

        , {
            title: '创建时间',
            key: 'createtime',
            dataIndex: 'createtime',
        }

        , {
            title: '最后修改时间',
            key: 'lastmodifiedtime',
            dataIndex: 'lastmodifiedtime',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={userPropertyApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={userPropertyApi.add}
                editApiFun={userPropertyApi.edit}
                delApiFun={userPropertyApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default UserProperty
