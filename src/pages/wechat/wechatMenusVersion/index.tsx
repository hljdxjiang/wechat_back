import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import wechatMenusVersionApi from '@/api/wechat/wechatMenusVersion'
import MyPage from '@/components/common/myPage';

const WechatMenusVersion: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'optionId',
            slot: <Input placeholder="选项ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'optionKey',
            slot: <Input placeholder="微信选项ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'optionDesc',
            slot: <Input placeholder="选项中文描述" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'optionType',
            slot: <Input placeholder="选项类型：text文本select下拉" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '选项ID',
            key: 'optionId',
            dataIndex: 'optionId',
        }

        , {
            title: '微信选项ID',
            key: 'optionKey',
            dataIndex: 'optionKey',
        }

        , {
            title: '选项中文描述',
            key: 'optionDesc',
            dataIndex: 'optionDesc',
        }

        , {
            title: '选项类型：text文本select下拉',
            key: 'optionType',
            dataIndex: 'optionType',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={wechatMenusVersionApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatMenusVersionApi.add}
                editApiFun={wechatMenusVersionApi.edit}
                delApiFun={wechatMenusVersionApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatMenusVersion
