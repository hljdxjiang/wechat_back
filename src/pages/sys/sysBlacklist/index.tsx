import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import sysBlacklistApi from '@/api/sys/sysBlacklist'
import ViewPage from '@/components/common/viewPage';

const SysBlacklist: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'userId',
            slot: <Input placeholder="用户编号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'channel',
            slot: <Input placeholder="操作渠道" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'remark',
            slot: <Input placeholder="黑名单原因" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'mobileNo',
            slot: <Input placeholder="手机号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'blackType',
            slot: <Input placeholder="黑名单类型" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '用户编号',
            key: 'userId',
            dataIndex: 'userId',
        }

        , {
            title: '操作渠道',
            key: 'channel',
            dataIndex: 'channel',
        }

        , {
            title: '黑名单原因',
            key: 'remark',
            dataIndex: 'remark',
        }


        , {
            title: '手机号',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
        }

        , {
            title: '黑名单类型',
            key: 'blackType',
            dataIndex: 'blackType',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={sysBlacklistApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysBlacklistApi.add}
                editApiFun={sysBlacklistApi.edit}
                delApiFun={sysBlacklistApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysBlacklist
