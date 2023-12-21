import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import userCommentInfoApi from '@/api/user/userCommentInfo'
import MyPage from '@/components/common/myPage';

const UserCommentInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'userId',
            slot: <Input placeholder="" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'commentId',
            slot: <Input placeholder="消息ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'commentPid',
            slot: <Input placeholder="消息父ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'commentDetail',
            slot: <Input placeholder="评论详情" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'relateType',
            slot: <Input placeholder="关联类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'relateId',
            slot: <Input placeholder="关联ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'trampleAmount',
            slot: <Input placeholder="点踩量" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'crownAmount',
            slot: <Input placeholder="点顶量" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '',
            key: 'userId',
            dataIndex: 'userId',
        }

        , {
            title: '消息ID',
            key: 'commentId',
            dataIndex: 'commentId',
        }

        , {
            title: '消息父ID',
            key: 'commentPid',
            dataIndex: 'commentPid',
        }

        , {
            title: '评论详情',
            key: 'commentDetail',
            dataIndex: 'commentDetail',
        }

        , {
            title: '关联类型',
            key: 'relateType',
            dataIndex: 'relateType',
        }

        , {
            title: '关联ID',
            key: 'relateId',
            dataIndex: 'relateId',
        }

        , {
            title: '点踩量',
            key: 'trampleAmount',
            dataIndex: 'trampleAmount',
        }

        , {
            title: '点顶量',
            key: 'crownAmount',
            dataIndex: 'crownAmount',
        }


    ]
    return (
        <>
            <MyPage
                apiFun={userCommentInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={userCommentInfoApi.add}
                editApiFun={userCommentInfoApi.edit}
                delApiFun={userCommentInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default UserCommentInfo
