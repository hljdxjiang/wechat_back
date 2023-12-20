import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import crmSalePayInfoApi from '@/api/crm/crmSalePayInfo'
import MyPage from '@/components/common/myPage';

const CrmSalePayInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'batchId',
            slot: <Input placeholder="批次ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'couponId',
            slot: <Input placeholder="优惠券ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'couponAmount',
            slot: <Input placeholder="抵扣金额" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'couponType',
            slot: <Input placeholder="抵扣类型" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'userCouponId',
            slot: <Input placeholder="优惠券ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'remark',
            slot: <Input placeholder="用户备注" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="用户状态" allowClear/>,
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
            title: '优惠券ID',
            key: 'couponId',
            dataIndex: 'couponId',
        }

        , {
            title: '抵扣金额',
            key: 'couponAmount',
            dataIndex: 'couponAmount',
        }

        , {
            title: '抵扣类型',
            key: 'couponType',
            dataIndex: 'couponType',
        }

        , {
            title: '优惠券ID',
            key: 'userCouponId',
            dataIndex: 'userCouponId',
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
            <MyPage
                apiFun={crmSalePayInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmSalePayInfoApi.add}
                editApiFun={crmSalePayInfoApi.edit}
                delApiFun={crmSalePayInfoApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmSalePayInfo
