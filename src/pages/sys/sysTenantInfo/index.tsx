import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import sysTenantInfoApi from '@/api/sys/sysTenantInfo'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const SysTenantInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'tenantName',
            slot: <Input placeholder="租户名称" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'tenantDesc',
            slot: <Input placeholder="租户描述" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'registerTime',
            slot: <Input placeholder="注册日期" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'mobileNo',
            slot: <Input placeholder="注册手机号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'vipLevel',
            slot: <Input placeholder="会员等级" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'vipExpireDay',
            slot: <Input placeholder="会员过期日期" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'tenantCardNo',
            slot: <Input placeholder="绑定卡号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="状态（0正常1停用）" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'remark',
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
            key: 'tenantFavicon',
            slot: <Input placeholder="页面角标图片" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'tenantLogo',
            slot: <Input placeholder="租户logo" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'email',
            slot: <Input placeholder="租户邮箱" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'appid',
            slot: <Input placeholder="微信ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'appSecret',
            slot: <Input placeholder="微信秘钥" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'wechatToken',
            slot: <Input placeholder="微信token" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'minipSecret',
            slot: <Input placeholder="小程序token" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns:TableColumn[] = [


        {
            title: '租户名称',
            key: 'tenantName',
            dataIndex: 'tenantName',
        }

        , {
            title: '租户描述',
            key: 'tenantDesc',
            dataIndex: 'tenantDesc',
        }

        , {
            title: '注册日期',
            key: 'registerTime',
            dataIndex: 'registerTime',
        }

        , {
            title: '注册手机号',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
        }

        , {
            title: '会员等级',
            key: 'vipLevel',
            dataIndex: 'vipLevel',
        }

        , {
            title: '会员过期日期',
            key: 'vipExpireDay',
            dataIndex: 'vipExpireDay',
        }

        , {
            title: '绑定卡号',
            key: 'tenantCardNo',
            dataIndex: 'tenantCardNo',
        }

        , {
            title: '状态（0正常1停用）',
            key: 'status',
            dataIndex: 'status',
        }

        , {
            title: '备注',
            key: 'remark',
            dataIndex: 'remark',
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
            title: '页面角标图片',
            key: 'tenantFavicon',
            dataIndex: 'tenantFavicon',
        }

        , {
            title: '租户logo',
            key: 'tenantLogo',
            dataIndex: 'tenantLogo',
        }

        , {
            title: '租户邮箱',
            key: 'email',
            dataIndex: 'email',
        }

        , {
            title: '微信ID',
            key: 'appid',
            dataIndex: 'appid',
        }

        , {
            title: '微信秘钥',
            key: 'appSecret',
            dataIndex: 'appSecret',
        }

        , {
            title: '微信token',
            key: 'wechatToken',
            dataIndex: 'wechatToken',
        }

        , {
            title: '小程序token',
            key: 'minipSecret',
            dataIndex: 'minipSecret',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={sysTenantInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysTenantInfoApi.add}
                editApiFun={sysTenantInfoApi.edit}
                delApiFun={sysTenantInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysTenantInfo
