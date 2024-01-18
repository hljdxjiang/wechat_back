import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import crmBrandInfoApi from '@/api/crm/crmBrandInfo'
import ViewPage from '@/components/common/viewPage';

const CrmBrandInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'brandId',
            slot: <Input placeholder="品牌编号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'brandName',
            slot: <Input placeholder="品牌名称" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'companyName',
            slot: <Input placeholder="企业名称" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [
        {
            title: '品牌编号',
            key: 'brandId',
            dataIndex: 'brandId',
        }

        , {
            title: '品牌名称',
            key: 'brandName',
            dataIndex: 'brandName',
        }

        , {
            title: '品牌logo路径',
            key: 'brandLogo',
            dataIndex: 'brandLogo',
        }

        , {
            title: '企业名称',
            key: 'companyName',
            dataIndex: 'companyName',
        }

        , {
            title: '企业社会信用代码',
            key: 'brandUscc',
            dataIndex: 'brandUscc',
        }

        , {
            title: '联系人姓名',
            key: 'connectUname',
            dataIndex: 'connectUname',
        }

        , {
            title: '联系人电话',
            key: 'connectMobileNo',
            dataIndex: 'connectMobileNo',
        }

        , {
            title: '联系人微信ID',
            key: 'connectWechatId',
            dataIndex: 'connectWechatId',
            tableShow:false,
        }

        , {
            title: '品牌简介',
            key: 'brandDesc',
            dataIndex: 'brandDesc',
            editType:"textarea",
            tableShow:false,
        }

        , {
            title: '企业简介',
            key: 'companyDesc',
            dataIndex: 'companyDesc',
            editType:"textarea",
            tableShow:false,
        }

        , {
            title: '品牌详情',
            key: 'brandDetail',
            dataIndex: 'brandDetail',
        }
        , {
            title: '企业详情',
            key: 'companyDetail',
            dataIndex: 'companyDetail',
            tableShow:false,
        }

        , {
            title: '合约生效日',
            key: 'vaildDate',
            dataIndex: 'vaildDate',
            editType:"date"
        }

        , {
            title: '合约失效日期',
            key: 'expiredDate',
            dataIndex: 'expiredDate',
            editType:"date"
        }

        , {
            title: '品牌加盟费',
            key: 'brandFee',
            dataIndex: 'brandFee',
            tableShow:false,
        }

        , {
            title: '押金/保证金',
            key: 'brandMargin',
            dataIndex: 'brandMargin',
            tableShow:false,
        }

        , {
            title: '备注',
            key: 'remark',
            dataIndex: 'remark',
            tableShow:false,
        }

        , {
            title: '企业状态',
            key: 'status',
            dataIndex: 'status',
            tableShow:false,
        }
        , {
            title: '产品公共展示信息',
            key: 'brandCommonDesc',
            dataIndex: 'brandCommonDesc',
            tableShow:false,
            // editType:"edit",
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={crmBrandInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmBrandInfoApi.add}
                editApiFun={crmBrandInfoApi.edit}
                delApiFun={crmBrandInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmBrandInfo
