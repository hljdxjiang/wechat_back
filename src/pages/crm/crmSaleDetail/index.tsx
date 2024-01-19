import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import crmSaleDetailApi from '@/api/crm/crmSaleDetail'
import ViewPage from '@/components/common/viewPage';

const CrmSaleDetail: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'batchId',
            slot: <Input placeholder="批次ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'amount',
            slot: <Input placeholder="销售数量" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'realPrice',
            slot: <Input placeholder="真实销售金额" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodId',
            slot: <Input placeholder="产品ID" allowClear />,
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
            key: 'remark',
            slot: <Input placeholder="用户备注" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="用户状态" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '批次ID',
            key: 'batchId',
            dataIndex: 'batchId',
        }

        , {
            title: '销售数量',
            key: 'amount',
            dataIndex: 'amount',
        }

        , {
            title: '真实销售金额',
            key: 'realPrice',
            dataIndex: 'realPrice',
        }

        , {
            title: '产品ID',
            key: 'prodId',
            dataIndex: 'prodId',
        }

        , {
            title: '产品建议售价',
            key: 'prodPrice',
            dataIndex: 'prodPrice',
        }

        , {
            title: '用户备注',
            key: 'remark',
            dataIndex: 'remark',
        }

        , {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }


    ]
    return (
        <>
            <ViewPage
                apiFun={crmSaleDetailApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmSaleDetailApi.add}
                editApiFun={crmSaleDetailApi.edit}
                delApiFun={crmSaleDetailApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmSaleDetail
