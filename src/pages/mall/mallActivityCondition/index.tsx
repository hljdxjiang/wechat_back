import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import mallActivityConditionApi from '@/api/mall/mallActivityCondition'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const MallActivityCondition: FC = () => {
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
                    key:'activityId',
                slot: <Input placeholder="活动ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'conditionId',
                slot: <Input placeholder="条件ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'conditionValue',
                slot: <Input placeholder="条件值" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'conditionType',
                slot: <Input placeholder="条件类别" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'conditionWay',
                slot: <Input placeholder="条件方式：大于，小于，等于，包含" allowClear />,
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
                        title: '活动ID',
            key: 'activityId',
            dataIndex: 'activityId',
            }
            
                                                ,{
                        title: '条件ID',
            key: 'conditionId',
            dataIndex: 'conditionId',
            }
            
                                                ,{
                        title: '条件值',
            key: 'conditionValue',
            dataIndex: 'conditionValue',
            }
            
                                                ,{
                        title: '条件类别',
            key: 'conditionType',
            dataIndex: 'conditionType',
            }
            
                                                ,{
                        title: '条件方式：大于，小于，等于，包含',
            key: 'conditionWay',
            dataIndex: 'conditionWay',
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
                apiFun={mallActivityConditionApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallActivityConditionApi.add}
                editApiFun={mallActivityConditionApi.edit}
                delApiFun={mallActivityConditionApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallActivityCondition
