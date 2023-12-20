import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import mallActivityUserApi from '@/api/mall/mallActivityUser'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const MallActivityUser: FC = () => {
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
                    key:'status',
                slot: <Input placeholder="参与状态0参与1完成" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'userid',
                slot: <Input placeholder="参与用户ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                                                        ,{
                    key:'complateTime',
                slot: <Input placeholder="完成时间" allowClear />,
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
                        title: '参与状态0参与1完成',
            key: 'status',
            dataIndex: 'status',
            }
            
                                                ,{
                        title: '参与用户ID',
            key: 'userid',
            dataIndex: 'userid',
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
                        title: '完成时间',
            key: 'complateTime',
            dataIndex: 'complateTime',
            }
            
            ]
    return (
        <>
            <MyPage
                apiFun={mallActivityUserApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallActivityUserApi.add}
                editApiFun={mallActivityUserApi.edit}
                delApiFun={mallActivityUserApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallActivityUser
