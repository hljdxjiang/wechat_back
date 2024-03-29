import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import mallLotteryPrizeApi from '@/api/mall/mallLotteryPrize'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const MallLotteryPrize: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'lotteryId',
            slot: <Input placeholder="抽奖ID" allowClear />,
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
            key: 'prizeTitle',
            slot: <Input placeholder="奖品标题" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prizeDetail',
            slot: <Input placeholder="奖品详情" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prizeType',
            slot: <Input placeholder="奖品类别：0实物1积分2金币3银币4优惠券" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'rate',
            slot: <Input placeholder="中奖概率" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'amount',
            slot: <Input placeholder="奖品数量" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'sort',
            slot: <Input placeholder="奖品排序" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="奖品状态" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns:TableColumn[] = [

        {
            title: '抽奖ID',
            key: 'lotteryId',
            dataIndex: 'lotteryId',
        }


        , {
            title: '奖品ID',
            key: 'prizeId',
            dataIndex: 'prizeId',
        }

        , {
            title: '奖品标题',
            key: 'prizeTitle',
            dataIndex: 'prizeTitle',
        }

        , {
            title: '奖品详情',
            key: 'prizeDetail',
            dataIndex: 'prizeDetail',
        }

        , {
            title: '奖品类别：0实物1积分2金币3银币4优惠券',
            key: 'prizeType',
            dataIndex: 'prizeType',
        }

        , {
            title: '中奖概率',
            key: 'rate',
            dataIndex: 'rate',
        }

        , {
            title: '奖品数量',
            key: 'amount',
            dataIndex: 'amount',
        }

        , {
            title: '奖品排序',
            key: 'sort',
            dataIndex: 'sort',
        }

        , {
            title: '奖品状态',
            key: 'status',
            dataIndex: 'status',
        }


    ]
    return (
        <>
            <ViewPage
                apiFun={mallLotteryPrizeApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallLotteryPrizeApi.add}
                editApiFun={mallLotteryPrizeApi.edit}
                delApiFun={mallLotteryPrizeApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallLotteryPrize
