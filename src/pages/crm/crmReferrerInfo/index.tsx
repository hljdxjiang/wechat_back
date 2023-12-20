import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import crmReferrerInfoApi from '@/api/crm/crmReferrerInfo'
import MyPage from '@/components/common/myPage';

const CrmReferrerInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'tenantid',
            slot: <Input placeholder="租户ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'referrerId',
            slot: <Input placeholder="推荐人编号" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'referrerCertNo',
            slot: <Input placeholder="推荐人证件号" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'referrerCertType',
            slot: <Input placeholder="推荐人证件类型" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'referrerName',
            slot: <Input placeholder="推荐人姓名" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'referrerEmail',
            slot: <Input placeholder="推荐人邮箱" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'mobileNo',
            slot: <Input placeholder="推荐人手机号" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'referrerCardNo',
            slot: <Input placeholder="推荐人卡号" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="状态（0正常1停用）" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'channelNo',
            slot: <Input placeholder="推荐人渠道编号" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'createtime',
            slot: <Input placeholder="创建时间" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'lastmodifiedtime',
            slot: <Input placeholder="最后修改时间" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'remark',
            slot: <Input placeholder="备注" allowClear/>,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [

        {
            title: '租户ID',
            key: 'tenantid',
            dataIndex: 'tenantid',
        }

        , {
            title: '推荐人编号',
            key: 'referrerId',
            dataIndex: 'referrerId',
        }

        , {
            title: '推荐人证件号',
            key: 'referrerCertNo',
            dataIndex: 'referrerCertNo',
        }

        , {
            title: '推荐人证件类型',
            key: 'referrerCertType',
            dataIndex: 'referrerCertType',
        }

        , {
            title: '推荐人姓名',
            key: 'referrerName',
            dataIndex: 'referrerName',
        }

        , {
            title: '推荐人邮箱',
            key: 'referrerEmail',
            dataIndex: 'referrerEmail',
        }

        , {
            title: '推荐人手机号',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
        }

        , {
            title: '推荐人卡号',
            key: 'referrerCardNo',
            dataIndex: 'referrerCardNo',
        }

        , {
            title: '状态（0正常1停用）',
            key: 'status',
            dataIndex: 'status',
        }

        , {
            title: '推荐人渠道编号',
            key: 'channelNo',
            dataIndex: 'channelNo',
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
            title: '备注',
            key: 'remark',
            dataIndex: 'remark',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={crmReferrerInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmReferrerInfoApi.add}
                editApiFun={crmReferrerInfoApi.edit}
                delApiFun={crmReferrerInfoApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmReferrerInfo
