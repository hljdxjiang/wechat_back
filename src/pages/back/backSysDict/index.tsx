import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import backSysDictApi from '@/api/back/backSysDict'
import MyPage from '@/components/common/myPage';

const BackSysDict: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'dictValue',
            slot: <Input placeholder="字典键值" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'dictTitle',
            slot: <Input placeholder="字典标签" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'dictType',
            slot: <Input placeholder="字典类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'dictSort',
            slot: <Input placeholder="字典排序" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="状态（0正常1停用）" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'remark',
            slot: <Input placeholder="备注" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [

        {
            title: '字典键值',
            key: 'dictValue',
            dataIndex: 'dictValue',
        }

        , {
            title: '字典标签',
            key: 'dictTitle',
            dataIndex: 'dictTitle',
        }

        , {
            title: '字典类型',
            key: 'dictType',
            dataIndex: 'dictType',
        }

        , {
            title: '字典排序',
            key: 'dictSort',
            dataIndex: 'dictSort',
        }

        , {
            title: '状态（0正常1停用）',
            key: 'status',
            dataIndex: 'status',
        }

        , {
            title: '备注',
            key: 'remark',
            dataIndex: 'remark',
        }


    ]
    return (
        <>
            <MyPage
                apiFun={backSysDictApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backSysDictApi.add}
                editApiFun={backSysDictApi.edit}
                delApiFun={backSysDictApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackSysDict
