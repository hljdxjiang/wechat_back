import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import sysItemInfoApi from '@/api/sys/sysItemInfo'
import MyPage from '@/components/common/myPage';

const SysItemInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'itemId',
            slot: <Input placeholder="标签ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemSort',
            slot: <Input placeholder="排序" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="用户状态" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemTitle',
            slot: <Input placeholder="" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemValue',
            slot: <Input placeholder="要素值" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemDesc',
            slot: <Input placeholder="要素描述" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemType',
            slot: <Input placeholder="要素类型" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'titleShowType',
            slot: <Input placeholder="标题展示样式" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'titleUrl',
            slot: <Input placeholder="标题跳转链接" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'valueUrl',
            slot: <Input placeholder="值跳转练级" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'valueShowType',
            slot: <Input placeholder="值展示样式" allowClear/>,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
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
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }


        , {
            title: '',
            key: 'itemTitle',
            dataIndex: 'itemTitle',
        }

        , {
            title: '要素值',
            key: 'itemValue',
            dataIndex: 'itemValue',
        }

        , {
            title: '要素描述',
            key: 'itemDesc',
            dataIndex: 'itemDesc',
        }

        , {
            title: '要素类型',
            key: 'itemType',
            dataIndex: 'itemType',
        }

        , {
            title: '标题展示样式',
            key: 'titleShowType',
            dataIndex: 'titleShowType',
        }

        , {
            title: '标题跳转链接',
            key: 'titleUrl',
            dataIndex: 'titleUrl',
        }

        , {
            title: '值跳转练级',
            key: 'valueUrl',
            dataIndex: 'valueUrl',
        }

        , {
            title: '值展示样式',
            key: 'valueShowType',
            dataIndex: 'valueShowType',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={sysItemInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysItemInfoApi.add}
                editApiFun={sysItemInfoApi.edit}
                delApiFun={sysItemInfoApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysItemInfo
