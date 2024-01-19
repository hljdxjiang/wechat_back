import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import mallLotteryWinnerApi from '@/api/mall/mallLotteryWinner'
import ViewPage from '@/components/common/viewPage';

const MallLotteryWinner: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'lotteryId',
            slot: <Input placeholder="抽奖ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'userid',
            slot: <Input placeholder="参与用户ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prizeType',
            slot: <Input placeholder="奖品类别：0实物1积分2金币3银币4优惠券5卡券" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prizeId',
            slot: <Input placeholder="奖品ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prizeAmount',
            slot: <Input placeholder="奖品数量" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="领取状态0未领取9已领取" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'relateId',
            slot: <Input placeholder="实体订单ID" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '抽奖ID',
            key: 'lotteryId',
            dataIndex: 'lotteryId',
        }

        , {
            title: '参与用户ID',
            key: 'userid',
            dataIndex: 'userid',
        }


        , {
            title: '奖品类别：0实物1积分2金币3银币4优惠券5卡券',
            key: 'prizeType',
            dataIndex: 'prizeType',
        }

        , {
            title: '奖品ID',
            key: 'prizeId',
            dataIndex: 'prizeId',
        }

        , {
            title: '奖品数量',
            key: 'prizeAmount',
            dataIndex: 'prizeAmount',
        }

        , {
            title: '领取状态0未领取9已领取',
            key: 'status',
            dataIndex: 'status',
        }

        , {
            title: '实体订单ID',
            key: 'relateId',
            dataIndex: 'relateId',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={mallLotteryWinnerApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallLotteryWinnerApi.add}
                editApiFun={mallLotteryWinnerApi.edit}
                delApiFun={mallLotteryWinnerApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallLotteryWinner
