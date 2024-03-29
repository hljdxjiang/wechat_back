import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import bbsCourseInfoApi from '@/api/bbs/bbsCourseInfo'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const BbsCourseInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'courseId',
            slot: <Input placeholder="课程ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'courseType',
            slot: <Input placeholder="课程类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'courseTitle',
            slot: <Input placeholder="课程标题" allowClear />,
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
            key: 'columnId',
            slot: <Input placeholder="专题标签" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'labelId',
            slot: <Input placeholder="文章标签" allowClear />,
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
            key: 'courseSummary',
            slot: <Input placeholder="课程摘要" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'courseDesc',
            slot: <Input placeholder="课程描述" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'price',
            slot: <Input placeholder="课程价格" allowClear />,
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
    ]
    const columns:TableColumn[] = [


        {
            title: '课程ID',
            key: 'courseId',
            dataIndex: 'courseId',
        }

        , {
            title: '课程类型',
            key: 'courseType',
            dataIndex: 'courseType',
        }

        , {
            title: '课程标题',
            key: 'courseTitle',
            dataIndex: 'courseTitle',
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
            title: '专题标签',
            key: 'columnId',
            dataIndex: 'columnId',
        }

        , {
            title: '文章标签',
            key: 'labelId',
            dataIndex: 'labelId',
        }

        , {
            title: '状态0草稿1审核中8审核拒绝9审核通过',
            key: 'status',
            dataIndex: 'status',
        }


        , {
            title: '课程摘要',
            key: 'courseSummary',
            dataIndex: 'courseSummary',
        }

        , {
            title: '课程描述',
            key: 'courseDesc',
            dataIndex: 'courseDesc',
        }

        , {
            title: '课程价格',
            key: 'price',
            dataIndex: 'price',
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

    ]
    return (
        <>
            <ViewPage
                apiFun={bbsCourseInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={bbsCourseInfoApi.add}
                editApiFun={bbsCourseInfoApi.edit}
                delApiFun={bbsCourseInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BbsCourseInfo
