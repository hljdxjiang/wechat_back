import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import mallCardInfoApi from '@/api/mall/mallCardInfo'
import MyPage from '@/components/common/myPage';

const MallCardInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'cardId',
            slot: <Input placeholder="卡券编号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'cardName',
            slot: <Input placeholder="卡券名称" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'cardNo',
            slot: <Input placeholder="卡券卡号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'cardPwd',
            slot: <Input placeholder="卡券卡密" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'cardDesc',
            slot: <Input placeholder="卡券详情" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'cardType',
            slot: <Input placeholder="卡券类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'vaildDate',
            slot: <Input placeholder="生效时间" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'expireDate',
            slot: <Input placeholder="失效日期" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="卡券状态0未领取1已领取9已使用" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '卡券编号',
            key: 'cardId',
            dataIndex: 'cardId',
        }

        , {
            title: '卡券名称',
            key: 'cardName',
            dataIndex: 'cardName',
        }

        , {
            title: '卡券卡号',
            key: 'cardNo',
            dataIndex: 'cardNo',
        }

        , {
            title: '卡券卡密',
            key: 'cardPwd',
            dataIndex: 'cardPwd',
        }

        , {
            title: '卡券详情',
            key: 'cardDesc',
            dataIndex: 'cardDesc',
        }

        , {
            title: '卡券类型',
            key: 'cardType',
            dataIndex: 'cardType',
        }

        , {
            title: '生效时间',
            key: 'vaildDate',
            dataIndex: 'vaildDate',
        }

        , {
            title: '失效日期',
            key: 'expireDate',
            dataIndex: 'expireDate',
        }

        , {
            title: '卡券状态0未领取1已领取9已使用',
            key: 'status',
            dataIndex: 'status',
        }


    ]
    return (
        <>
            <MyPage
                apiFun={mallCardInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallCardInfoApi.add}
                editApiFun={mallCardInfoApi.edit}
                delApiFun={mallCardInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallCardInfo
