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
            key: 'menuId',
            slot: <Input placeholder="菜单ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'version',
            slot: <Input placeholder="使用版本" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'remark',
            slot: <Input placeholder="菜单备注" allowClear />,
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
            title: '使用版本',
            key: 'version',
            dataIndex: 'version',
        }

        , {
            title: '菜单备注',
            key: 'remark',
            dataIndex: 'remark',
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
