import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import wechatMenusMatchruleApi from '@/api/wechat/wechatMenusMatchrule'
import MyPage from '@/components/common/myPage';

const WechatMenusMatchrule: FC = () => {
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
            key: 'ruleId',
            slot: <Input placeholder="匹配字段" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'ruleValue',
            slot: <Input placeholder="匹配字段值" allowClear/>,
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
            title: '匹配字段',
            key: 'ruleId',
            dataIndex: 'ruleId',
        }

        , {
            title: '匹配字段值',
            key: 'ruleValue',
            dataIndex: 'ruleValue',
        }


    ]
    return (
        <>
            <MyPage
                apiFun={wechatMenusMatchruleApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatMenusMatchruleApi.add}
                editApiFun={wechatMenusMatchruleApi.edit}
                delApiFun={wechatMenusMatchruleApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatMenusMatchrule
