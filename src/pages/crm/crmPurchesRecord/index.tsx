import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import crmPurchesRecordApi from '@/api/crm/crmPurchesRecord'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const CrmPurchesRecord: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'batchId',
            slot: <Input placeholder="批次ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'brandId',
            slot: <Input placeholder="品牌" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'amount',
            slot: <Input placeholder="进货数量" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'arrivalTime',
            slot: <Input placeholder="到货日期" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'orderTime',
            slot: <Input placeholder="下单日期" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'spend',
            slot: <Input placeholder="订单费用" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'postage',
            slot: <Input placeholder="邮费" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'traceCode',
            slot: <Input placeholder="邮件单号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'otherCost',
            slot: <Input placeholder="其他费用" allowClear />,
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
    const columns:TableColumn[] = [


        {
            title: '批次ID',
            key: 'batchId',
            dataIndex: 'batchId',
        }

        , {
            title: '品牌',
            key: 'brandId',
            dataIndex: 'brandId',
        }

        , {
            title: '进货数量',
            key: 'amount',
            dataIndex: 'amount',
        }

        , {
            title: '到货日期',
            key: 'arrivalTime',
            dataIndex: 'arrivalTime',
        }

        , {
            title: '下单日期',
            key: 'orderTime',
            dataIndex: 'orderTime',
        }

        , {
            title: '订单费用',
            key: 'spend',
            dataIndex: 'spend',
        }

        , {
            title: '邮费',
            key: 'postage',
            dataIndex: 'postage',
        }

        , {
            title: '邮件单号',
            key: 'traceCode',
            dataIndex: 'traceCode',
        }

        , {
            title: '其他费用',
            key: 'otherCost',
            dataIndex: 'otherCost',
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
                apiFun={crmPurchesRecordApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmPurchesRecordApi.add}
                editApiFun={crmPurchesRecordApi.edit}
                delApiFun={crmPurchesRecordApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmPurchesRecord
