import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import crmSaleRecordApi from '@/api/crm/crmSaleRecord'
import ModelPage from '@/components/common/modelPage';

const CrmSaleRecord: FC = () => {
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
            key: 'postageCost',
            slot: <Input placeholder="邮寄成本" allowClear />,
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
            key: 'postDate',
            slot: <Input placeholder="发货时间" allowClear />,
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
            key: 'remark',
            slot: <Input placeholder="用户备注" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'channelNo',
            slot: <Input placeholder="销售渠道" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'referrerId',
            slot: <Input placeholder="推荐人编号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="订单状态" allowClear />,
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
            title: '邮寄成本',
            key: 'postageCost',
            dataIndex: 'postageCost',
        }

        , {
            title: '邮件单号',
            key: 'traceCode',
            dataIndex: 'traceCode',
        }

        , {
            title: '发货时间',
            key: 'postDate',
            dataIndex: 'postDate',
        }

        , {
            title: '真实销售金额',
            key: 'realPrice',
            dataIndex: 'realPrice',
        }

        , {
            title: '用户备注',
            key: 'remark',
            dataIndex: 'remark',
        }

        , {
            title: '销售渠道',
            key: 'channelNo',
            dataIndex: 'channelNo',
        }

        , {
            title: '推荐人编号',
            key: 'referrerId',
            dataIndex: 'referrerId',
        }

        , {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }


    ]
    return (
        <>
            <ModelPage
                apiFun={crmSaleRecordApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmSaleRecordApi.add}
                editApiFun={crmSaleRecordApi.edit}
                delApiFun={crmSaleRecordApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmSaleRecord
