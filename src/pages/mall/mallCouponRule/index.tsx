import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import mallCouponRuleApi from '@/api/mall/mallCouponRule'
import ViewPage from '@/components/common/viewPage';

const MallCouponRule: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'couponId',
            slot: <Input placeholder="优惠券编号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="状态" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'ruleId',
            slot: <Input placeholder="规则ID" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '优惠券编号',
            key: 'couponId',
            dataIndex: 'couponId',
        }

        , {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
        }


        , {
            title: '规则ID',
            key: 'ruleId',
            dataIndex: 'ruleId',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={mallCouponRuleApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallCouponRuleApi.add}
                editApiFun={mallCouponRuleApi.edit}
                delApiFun={mallCouponRuleApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallCouponRule
