import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import mallLotteryUserApi from '@/api/mall/mallLotteryUser'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const MallLotteryUser: FC = () => {
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
                    key:'lotteryId',
                slot: <Input placeholder="抽奖ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'status',
                slot: <Input placeholder="参与状态0参与8未中奖9中奖" allowClear />,
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
                                ,{
                    key:'rewardId',
                slot: <Input placeholder="奖品ID" allowClear />,
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
                        title: '抽奖ID',
            key: 'lotteryId',
            dataIndex: 'lotteryId',
            }
            
                                                ,{
                        title: '参与状态0参与8未中奖9中奖',
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
            
                                                ,{
                        title: '奖品ID',
            key: 'rewardId',
            dataIndex: 'rewardId',
            }
            
            ]
    return (
        <>
            <MyPage
                apiFun={mallLotteryUserApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallLotteryUserApi.add}
                editApiFun={mallLotteryUserApi.edit}
                delApiFun={mallLotteryUserApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallLotteryUser
