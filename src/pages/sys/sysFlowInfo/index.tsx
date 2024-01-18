import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import sysFlowInfoApi from '@/api/sys/sysFlowInfo'
import ModelPage from '@/components/common/modelPage';

const SysFlowInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'flowId',
            slot: <Input placeholder="页面ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'flowTitle',
            slot: <Input placeholder="页面标题" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'flowType',
            slot: <Input placeholder="页面类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'flowShowType',
            slot: <Input placeholder="楼层展示样式" allowClear />,
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
            key: 'flowRemark',
            slot: <Input placeholder="页面备注" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'userid',
            slot: <Input placeholder="创建用户ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'modifyUserid',
            slot: <Input placeholder="最后修改用户ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'flowData',
            slot: <Input placeholder="楼层数据" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'flowDataCount',
            slot: <Input placeholder="读取数据数量" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'flowImg',
            slot: <Input placeholder="楼层图片" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'flowUrl',
            slot: <Input placeholder="楼层跳转链接" allowClear />,
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
    ]
    const columns = [


        {
            title: '页面ID',
            key: 'flowId',
            dataIndex: 'flowId',
        }

        , {
            title: '页面标题',
            key: 'flowTitle',
            dataIndex: 'flowTitle',
        }

        , {
            title: '页面类型',
            key: 'flowType',
            dataIndex: 'flowType',
        }

        , {
            title: '楼层展示样式',
            key: 'flowShowType',
            dataIndex: 'flowShowType',
        }

        , {
            title: '控制标识：ALL,LOCAL,OFF',
            key: 'controlFlag',
            dataIndex: 'controlFlag',
        }

        , {
            title: '页面备注',
            key: 'flowRemark',
            dataIndex: 'flowRemark',
        }

        , {
            title: '创建用户ID',
            key: 'userid',
            dataIndex: 'userid',
        }

        , {
            title: '最后修改用户ID',
            key: 'modifyUserid',
            dataIndex: 'modifyUserid',
        }

        , {
            title: '楼层数据',
            key: 'flowData',
            dataIndex: 'flowData',
        }

        , {
            title: '读取数据数量',
            key: 'flowDataCount',
            dataIndex: 'flowDataCount',
        }

        , {
            title: '楼层图片',
            key: 'flowImg',
            dataIndex: 'flowImg',
        }

        , {
            title: '楼层跳转链接',
            key: 'flowUrl',
            dataIndex: 'flowUrl',
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

    ]
    return (
        <>
            <ModelPage
                apiFun={sysFlowInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysFlowInfoApi.add}
                editApiFun={sysFlowInfoApi.edit}
                delApiFun={sysFlowInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysFlowInfo
