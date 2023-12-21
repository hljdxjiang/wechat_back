import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import userPropertyDetailApi from '@/api/user/userPropertyDetail'
import MyPage from '@/components/common/myPage';

const UserPropertyDetail: FC = () => {
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
        , {
            key: 'propertyType',
            slot: <Input placeholder="资产类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'operaType',
            slot: <Input placeholder="消费类型obtain获取cost消费" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'amount',
            slot: <Input placeholder="金额" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'relateType',
            slot: <Input placeholder="关联类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'relateId',
            slot: <Input placeholder="关联活动ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'expireDate',
            slot: <Input placeholder="失效日期" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'vaildType',
            slot: <Input placeholder="有效期类型0永久1定期" allowClear />,
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
            title: '创建时间',
            key: 'createtime',
            dataIndex: 'createtime',
        }

        , {
            title: '最后修改时间',
            key: 'lastmodifiedtime',
            dataIndex: 'lastmodifiedtime',
        }

        , {
            title: '资产类型',
            key: 'propertyType',
            dataIndex: 'propertyType',
        }

        , {
            title: '消费类型obtain获取cost消费',
            key: 'operaType',
            dataIndex: 'operaType',
        }

        , {
            title: '金额',
            key: 'amount',
            dataIndex: 'amount',
        }

        , {
            title: '关联类型',
            key: 'relateType',
            dataIndex: 'relateType',
        }

        , {
            title: '关联活动ID',
            key: 'relateId',
            dataIndex: 'relateId',
        }

        , {
            title: '失效日期',
            key: 'expireDate',
            dataIndex: 'expireDate',
        }


        , {
            title: '有效期类型0永久1定期',
            key: 'vaildType',
            dataIndex: 'vaildType',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={userPropertyDetailApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={userPropertyDetailApi.add}
                editApiFun={userPropertyDetailApi.edit}
                delApiFun={userPropertyDetailApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default UserPropertyDetail
