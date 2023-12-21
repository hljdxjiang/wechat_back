import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import bbsCourseResourceApi from '@/api/bbs/bbsCourseResource'
import MyPage from '@/components/common/myPage';

const BbsCourseResource: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'courseId',
            slot: <Input placeholder="教程ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'partId',
            slot: <Input placeholder="章节ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'userId',
            slot: <Input placeholder="作者ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'remark',
            slot: <Input placeholder="备注" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="状态0草稿1审核中8审核拒绝9审核通过" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'custLevel',
            slot: <Input placeholder="客户级别" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'vipType',
            slot: <Input placeholder="会员类型0免费会员" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'resourceId',
            slot: <Input placeholder="资源ID" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '教程ID',
            key: 'courseId',
            dataIndex: 'courseId',
        }

        , {
            title: '章节ID',
            key: 'partId',
            dataIndex: 'partId',
        }

        , {
            title: '作者ID',
            key: 'userId',
            dataIndex: 'userId',
        }

        , {
            title: '备注',
            key: 'remark',
            dataIndex: 'remark',
        }

        , {
            title: '状态0草稿1审核中8审核拒绝9审核通过',
            key: 'status',
            dataIndex: 'status',
        }


        , {
            title: '客户级别',
            key: 'custLevel',
            dataIndex: 'custLevel',
        }

        , {
            title: '会员类型0免费会员',
            key: 'vipType',
            dataIndex: 'vipType',
        }

        , {
            title: '资源ID',
            key: 'resourceId',
            dataIndex: 'resourceId',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={bbsCourseResourceApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={bbsCourseResourceApi.add}
                editApiFun={bbsCourseResourceApi.edit}
                delApiFun={bbsCourseResourceApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BbsCourseResource
