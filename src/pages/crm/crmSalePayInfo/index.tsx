import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import crmSalePayInfoApi from '@/api/crm/crmSalePayInfo'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const CrmSalePayInfo: FC = () => {
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
                    key:'batchId',
                slot: <Input placeholder="批次ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'couponId',
                slot: <Input placeholder="优惠券ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'couponAmount',
                slot: <Input placeholder="抵扣金额" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'couponType',
                slot: <Input placeholder="抵扣类型" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'userCouponId',
                slot: <Input placeholder="优惠券ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'remark',
                slot: <Input placeholder="用户备注" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'status',
                slot: <Input placeholder="用户状态" allowClear />,
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
                        title: '批次ID',
            key: 'batchId',
            dataIndex: 'batchId',
            }
            
                                                ,{
                        title: '优惠券ID',
            key: 'couponId',
            dataIndex: 'couponId',
            }
            
                                                ,{
                        title: '抵扣金额',
            key: 'couponAmount',
            dataIndex: 'couponAmount',
            }
            
                                                ,{
                        title: '抵扣类型',
            key: 'couponType',
            dataIndex: 'couponType',
            }
            
                                                ,{
                        title: '优惠券ID',
            key: 'userCouponId',
            dataIndex: 'userCouponId',
            }
            
                                                ,{
                        title: '用户备注',
            key: 'remark',
            dataIndex: 'remark',
            }
            
                                                ,{
                        title: '用户状态',
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
