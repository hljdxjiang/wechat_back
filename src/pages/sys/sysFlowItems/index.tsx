import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import sysFlowItemsApi from '@/api/sys/sysFlowItems'
import MyPage from '@/components/common/myPage';

const SysFlowItems: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'flowId',
            slot: <Input placeholder="楼层ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemId',
            slot: <Input placeholder="标签ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemSort',
            slot: <Input placeholder="排序" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemType',
            slot: <Input placeholder="要素类型：flow:楼层,轮播图，金刚位，图片，图文，列表，" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="用户状态" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'channel',
            slot: <Input placeholder="展示渠道" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'controlFlag',
            slot: <Input placeholder="控制标识：ALL,LOCAL,OFF" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'dataType',
            slot: <Input placeholder="数据类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'dataValue',
            slot: <Input placeholder="数据范围" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'dataMatch',
            slot: <Input placeholder="数据匹配方式" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '楼层ID',
            key: 'flowId',
            dataIndex: 'flowId',
        }

        , {
            title: '标签ID',
            key: 'itemId',
            dataIndex: 'itemId',
        }

        , {
            title: '排序',
            key: 'itemSort',
            dataIndex: 'itemSort',
        }

        , {
            title: '要素类型：flow:楼层,轮播图，金刚位，图片，图文，列表，',
            key: 'itemType',
            dataIndex: 'itemType',
        }

        , {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }


        , {
            title: '展示渠道',
            key: 'channel',
            dataIndex: 'channel',
        }

        , {
            title: '控制标识：ALL,LOCAL,OFF',
            key: 'controlFlag',
            dataIndex: 'controlFlag',
        }

        , {
            title: '数据类型',
            key: 'dataType',
            dataIndex: 'dataType',
        }

        , {
            title: '数据范围',
            key: 'dataValue',
            dataIndex: 'dataValue',
        }

        , {
            title: '数据匹配方式',
            key: 'dataMatch',
            dataIndex: 'dataMatch',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={sysFlowItemsApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysFlowItemsApi.add}
                editApiFun={sysFlowItemsApi.edit}
                delApiFun={sysFlowItemsApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysFlowItems
