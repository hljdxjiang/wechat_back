import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import wechatMenusOptionApi from '@/api/wechat/wechatMenusOption'
import MyPage from '@/components/common/myPage';

const WechatMenusOption: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'menuId',
            slot: <Input placeholder="菜单ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemPid',
            slot: <Input placeholder="菜单父ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemId',
            slot: <Input placeholder="菜单ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'sort',
            slot: <Input placeholder="排序" allowClear/>,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '菜单ID',
            key: 'menuId',
            dataIndex: 'menuId',
        }

        , {
            title: '菜单父ID',
            key: 'itemPid',
            dataIndex: 'itemPid',
        }

        , {
            title: '菜单ID',
            key: 'itemId',
            dataIndex: 'itemId',
        }


        , {
            title: '排序',
            key: 'sort',
            dataIndex: 'sort',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={wechatMenusOptionApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatMenusOptionApi.add}
                editApiFun={wechatMenusOptionApi.edit}
                delApiFun={wechatMenusOptionApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatMenusOption
