import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import wechatMenusDetailApi from '@/api/wechat/wechatMenusDetail'
import MyPage from '@/components/common/myPage';

const WechatMenusDetail: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'menuId',
            slot: <Input placeholder="菜单ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemPid',
            slot: <Input placeholder="菜单父ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemId',
            slot: <Input placeholder="菜单ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'sort',
            slot: <Input placeholder="排序" allowClear />,
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
                apiFun={wechatMenusDetailApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatMenusDetailApi.add}
                editApiFun={wechatMenusDetailApi.edit}
                delApiFun={wechatMenusDetailApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatMenusDetail
