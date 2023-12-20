import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import mallCouponRuleApi from '@/api/mall/mallCouponRule'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const MallCouponRule: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
                                                {
                    key:'tenantId',
                slot: <Input placeholder="租户ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'couponId',
                slot: <Input placeholder="优惠券编号" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'status',
                slot: <Input placeholder="状态" allowClear />,
                rules: [],
                initialValue: ''
            }
                                                                        ,{
                    key:'ruleId',
                slot: <Input placeholder="规则ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                        ]
    const columns = [
                                                        {
                                        title: '',
            key: 'id',
            dataIndex: 'id',
            }
            
                    
                                                ,{
                        title: '优惠券编号',
            key: 'couponId',
            dataIndex: 'couponId',
            }
            
                                                ,{
                        title: '状态',
            key: 'status',
            dataIndex: 'status',
            }
            
                                                ,{
                        title: '创建时间',
            key: 'createTime',
            dataIndex: 'createTime',
            }
            
                                                ,{
                        title: '最后修改时间',
            key: 'lastModifiedTime',
            dataIndex: 'lastModifiedTime',
            }
            
                                                ,{
                        title: '规则ID',
            key: 'ruleId',
            dataIndex: 'ruleId',
            }
            
            ]
    return (
        <>
            <MyPage
                apiFun={mallCouponRuleApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallCouponRuleApi.add}
                editApiFun={mallCouponRuleApi.edit}
                delApiFun={mallCouponRuleApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallCouponRule
