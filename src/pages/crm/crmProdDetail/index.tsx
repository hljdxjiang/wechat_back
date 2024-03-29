import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import crmProdDetailApi from '@/api/crm/crmProdDetail'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const CrmProdDetail: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'prodId',
            slot: <Input placeholder="产品编号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodName',
            slot: <Input placeholder="产品名称" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodGroupId',
            slot: <Input placeholder="分组ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodTitle',
            slot: <Input placeholder="展示标题" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodDesc',
            slot: <Input placeholder="产品简介" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodDetail',
            slot: <Input placeholder="产品详细介绍" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodLogo',
            slot: <Input placeholder="产品封面" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodBid',
            slot: <Input placeholder="产品进价" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodPrice',
            slot: <Input placeholder="产品建议售价" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodAmount',
            slot: <Input placeholder="产品建议库存" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodLimit',
            slot: <Input placeholder="产品最低库存" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodModule',
            slot: <Input placeholder="产品型号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodSpecs',
            slot: <Input placeholder="产品规格" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'remark',
            slot: <Input placeholder="用户备注" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="状态" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns:TableColumn[] = [


        {
            title: '产品编号',
            key: 'prodId',
            dataIndex: 'prodId',
        }

        , {
            title: '产品名称',
            key: 'prodName',
            dataIndex: 'prodName',
        }

        , {
            title: '分组ID',
            key: 'prodGroupId',
            dataIndex: 'prodGroupId',
        }

        , {
            title: '展示标题',
            key: 'prodTitle',
            dataIndex: 'prodTitle',
        }

        , {
            title: '产品简介',
            key: 'prodDesc',
            dataIndex: 'prodDesc',
        }

        , {
            title: '产品详细介绍',
            key: 'prodDetail',
            dataIndex: 'prodDetail',
        }

        , {
            title: '产品封面',
            key: 'prodLogo',
            dataIndex: 'prodLogo',
        }

        , {
            title: '产品进价',
            key: 'prodBid',
            dataIndex: 'prodBid',
        }

        , {
            title: '产品建议售价',
            key: 'prodPrice',
            dataIndex: 'prodPrice',
        }

        , {
            title: '产品建议库存',
            key: 'prodAmount',
            dataIndex: 'prodAmount',
        }

        , {
            title: '产品最低库存',
            key: 'prodLimit',
            dataIndex: 'prodLimit',
        }

        , {
            title: '产品型号',
            key: 'prodModule',
            dataIndex: 'prodModule',
        }

        , {
            title: '产品规格',
            key: 'prodSpecs',
            dataIndex: 'prodSpecs',
        }

        , {
            title: '用户备注',
            key: 'remark',
            dataIndex: 'remark',
        }

        , {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
        }


    ]
    return (
        <>
            <ViewPage
                apiFun={crmProdDetailApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmProdDetailApi.add}
                editApiFun={crmProdDetailApi.edit}
                delApiFun={crmProdDetailApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmProdDetail
