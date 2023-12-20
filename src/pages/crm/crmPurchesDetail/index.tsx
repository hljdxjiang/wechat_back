import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import crmPurchesDetailApi from '@/api/crm/crmPurchesDetail'
import MyPage from '@/components/common/myPage';

const CrmPurchesDetail: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'brandId',
            slot: <Input placeholder="品牌" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'batchId',
            slot: <Input placeholder="批次ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodId',
            slot: <Input placeholder="产品ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'amount',
            slot: <Input placeholder="进货数量" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodPrice',
            slot: <Input placeholder="进货进货单价" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'remark',
            slot: <Input placeholder="用户备注" allowClear/>,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '品牌',
            key: 'brandId',
            dataIndex: 'brandId',
        }

        , {
            title: '批次ID',
            key: 'batchId',
            dataIndex: 'batchId',
        }

        , {
            title: '产品ID',
            key: 'prodId',
            dataIndex: 'prodId',
        }

        , {
            title: '进货数量',
            key: 'amount',
            dataIndex: 'amount',
        }

        , {
            title: '进货进货单价',
            key: 'prodPrice',
            dataIndex: 'prodPrice',
        }

        , {
            title: '用户备注',
            key: 'remark',
            dataIndex: 'remark',
        }


    ]
    return (
        <>
            <MyPage
                apiFun={crmPurchesDetailApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmPurchesDetailApi.add}
                editApiFun={crmPurchesDetailApi.edit}
                delApiFun={crmPurchesDetailApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmPurchesDetail
