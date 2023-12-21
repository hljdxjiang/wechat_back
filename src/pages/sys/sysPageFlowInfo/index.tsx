import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import sysPageFlowInfoApi from '@/api/sys/sysPageFlowInfo'
import MyPage from '@/components/common/myPage';

const SysPageFlowInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'pageId',
            slot: <Input placeholder="页面ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'flowId',
            slot: <Input placeholder="楼层ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'flowSort',
            slot: <Input placeholder="楼层排序" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="状态0启用1关闭" allowClear />,
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
    ]
    const columns = [

        {
            title: '页面ID',
            key: 'pageId',
            dataIndex: 'pageId',
        }


        , {
            title: '楼层ID',
            key: 'flowId',
            dataIndex: 'flowId',
        }

        , {
            title: '楼层排序',
            key: 'flowSort',
            dataIndex: 'flowSort',
        }

        , {
            title: '状态0启用1关闭',
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

    ]
    return (
        <>
            <MyPage
                apiFun={sysPageFlowInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysPageFlowInfoApi.add}
                editApiFun={sysPageFlowInfoApi.edit}
                delApiFun={sysPageFlowInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysPageFlowInfo
