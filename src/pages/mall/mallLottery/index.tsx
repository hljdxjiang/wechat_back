import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import mallLotteryApi from '@/api/mall/mallLottery'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const MallLottery: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
                                                {
                    key:'tenantId',
                slot: <Input placeholder="抽奖ID" allowClear />,
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
                    key:'lotteryTitle',
                slot: <Input placeholder="抽奖标题" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'lotteryDetail',
                slot: <Input placeholder="抽奖详情" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'lotteryType',
                slot: <Input placeholder="抽奖类别：0抽取参与者1参与者抽取奖品" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'reward',
                slot: <Input placeholder="奖励类型" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'rewardAmount',
                slot: <Input placeholder="奖励金额" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'vaildDate',
                slot: <Input placeholder="抽奖生效日" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'expireDate',
                slot: <Input placeholder="抽奖失效日期" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'rewardValidDate',
                slot: <Input placeholder="奖励使用开始日期" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'rewardExpireDate',
                slot: <Input placeholder="奖励失效日期" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'numbero',
                slot: <Input placeholder="最多参与人数" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'status',
                slot: <Input placeholder="用户状态" allowClear />,
                rules: [],
                initialValue: ''
            }
                                                                        ,{
                    key:'cost',
                slot: <Input placeholder="抽奖消费" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'costType',
                slot: <Input placeholder="抽奖消费类型" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'rewardType',
                slot: <Input placeholder="奖品类型" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'cycleAmount',
                slot: <Input placeholder="循环期数" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'cyclePeriod',
                slot: <Input placeholder="间隔天数" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'cycleType',
                slot: <Input placeholder="循环类型0按周期1开奖后次日2开奖后即开" allowClear />,
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
                        title: '抽奖标题',
            key: 'lotteryTitle',
            dataIndex: 'lotteryTitle',
            }
            
                                                ,{
                        title: '抽奖详情',
            key: 'lotteryDetail',
            dataIndex: 'lotteryDetail',
            }
            
                                                ,{
                        title: '抽奖类别：0抽取参与者1参与者抽取奖品',
            key: 'lotteryType',
            dataIndex: 'lotteryType',
            }
            
                                                ,{
                        title: '奖励类型',
            key: 'reward',
            dataIndex: 'reward',
            }
            
                                                ,{
                        title: '奖励金额',
            key: 'rewardAmount',
            dataIndex: 'rewardAmount',
            }
            
                                                ,{
                        title: '抽奖生效日',
            key: 'vaildDate',
            dataIndex: 'vaildDate',
            }
            
                                                ,{
                        title: '抽奖失效日期',
            key: 'expireDate',
            dataIndex: 'expireDate',
            }
            
                                                ,{
                        title: '奖励使用开始日期',
            key: 'rewardValidDate',
            dataIndex: 'rewardValidDate',
            }
            
                                                ,{
                        title: '奖励失效日期',
            key: 'rewardExpireDate',
            dataIndex: 'rewardExpireDate',
            }
            
                                                ,{
                        title: '最多参与人数',
            key: 'numbero',
            dataIndex: 'numbero',
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
            
                                                ,{
                        title: '抽奖消费',
            key: 'cost',
            dataIndex: 'cost',
            }
            
                                                ,{
                        title: '抽奖消费类型',
            key: 'costType',
            dataIndex: 'costType',
            }
            
                                                ,{
                        title: '奖品类型',
            key: 'rewardType',
            dataIndex: 'rewardType',
            }
            
                                                ,{
                        title: '循环期数',
            key: 'cycleAmount',
            dataIndex: 'cycleAmount',
            }
            
                                                ,{
                        title: '间隔天数',
            key: 'cyclePeriod',
            dataIndex: 'cyclePeriod',
            }
            
                                                ,{
                        title: '循环类型0按周期1开奖后次日2开奖后即开',
            key: 'cycleType',
            dataIndex: 'cycleType',
            }
            
            ]
    return (
        <>
            <MyPage
                apiFun={mallLotteryApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallLotteryApi.add}
                editApiFun={mallLotteryApi.edit}
                delApiFun={mallLotteryApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallLottery
