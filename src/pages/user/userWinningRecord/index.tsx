import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import userWinningRecordApi from '@/api/user/userWinningRecord'
import MyPage from '@/components/common/myPage';

const UserWinningRecord: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'userid',
            slot: <Input placeholder="登录账号" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'createtime',
            slot: <Input placeholder="创建时间" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'lastmodifiedtime',
            slot: <Input placeholder="最后修改时间" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'lotteryId',
            slot: <Input placeholder="抽奖ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'winType',
            slot: <Input placeholder="奖品类型" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'winProdCode',
            slot: <Input placeholder="奖品编号" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'winProdPass',
            slot: <Input placeholder="奖品秘钥" allowClear/>,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '登录账号',
            key: 'userid',
            dataIndex: 'userid',
        }

        , {
            title: '创建时间',
            key: 'createtime',
            dataIndex: 'createtime',
        }

        , {
            title: '最后修改时间',
            key: 'lastmodifiedtime',
            dataIndex: 'lastmodifiedtime',
        }

        , {
            title: '抽奖ID',
            key: 'lotteryId',
            dataIndex: 'lotteryId',
        }

        , {
            title: '奖品类型',
            key: 'winType',
            dataIndex: 'winType',
        }

        , {
            title: '奖品编号',
            key: 'winProdCode',
            dataIndex: 'winProdCode',
        }

        , {
            title: '奖品秘钥',
            key: 'winProdPass',
            dataIndex: 'winProdPass',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={userWinningRecordApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={userWinningRecordApi.add}
                editApiFun={userWinningRecordApi.edit}
                delApiFun={userWinningRecordApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default UserWinningRecord
