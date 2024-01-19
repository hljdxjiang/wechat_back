import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import wechatMinipUserApi from '@/api/wechat/wechatMinipUser'
import ViewPage from '@/components/common/viewPage';

const WechatMinipUser: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'mopenid',
            slot: <Input placeholder="" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'unionid',
            slot: <Input placeholder="" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'nickname',
            slot: <Input placeholder="" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'gender',
            slot: <Input placeholder="性别1为男,2为女,0为未知" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'province',
            slot: <Input placeholder="省" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'city',
            slot: <Input placeholder="城市" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'country',
            slot: <Input placeholder="国家" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'avatarurl',
            slot: <Input placeholder="头像地址" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'wartermark',
            slot: <Input placeholder="备注" allowClear />,
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
            key: 'mobileNo',
            slot: <Input placeholder="手机号码" allowClear />,
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
            key: 'userId',
            slot: <Input placeholder="管理客户ID" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [

        {
            title: '',
            key: 'mopenid',
            dataIndex: 'mopenid',
        }

        , {
            title: '',
            key: 'unionid',
            dataIndex: 'unionid',
        }

        , {
            title: '',
            key: 'nickname',
            dataIndex: 'nickname',
        }

        , {
            title: '性别1为男,2为女,0为未知',
            key: 'gender',
            dataIndex: 'gender',
        }

        , {
            title: '省',
            key: 'province',
            dataIndex: 'province',
        }

        , {
            title: '城市',
            key: 'city',
            dataIndex: 'city',
        }

        , {
            title: '国家',
            key: 'country',
            dataIndex: 'country',
        }

        , {
            title: '头像地址',
            key: 'avatarurl',
            dataIndex: 'avatarurl',
        }

        , {
            title: '备注',
            key: 'wartermark',
            dataIndex: 'wartermark',
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
            title: '手机号码',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
        }

        , {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }

        , {
            title: '管理客户ID',
            key: 'userId',
            dataIndex: 'userId',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={wechatMinipUserApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatMinipUserApi.add}
                editApiFun={wechatMinipUserApi.edit}
                delApiFun={wechatMinipUserApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatMinipUser
