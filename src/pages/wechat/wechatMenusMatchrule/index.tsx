import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import wechatMenusMatchruleApi from '@/api/wechat/wechatMenusMatchrule'
import MyPage from '@/components/common/myPage';

const WechatMenusMatchrule: FC = () => {
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
            key: 'ruleId',
            slot: <Input placeholder="匹配字段ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'ruleName',
            slot: <Input placeholder="匹配字段描述" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'ruleValue',
            slot: <Input placeholder="匹配字段值" allowClear />,
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
            title: '菜单ID',
            key: 'menuId',
            dataIndex: 'menuId',
        }

        , {
            title: '匹配字段ID',
            key: 'ruleId',
            dataIndex: 'ruleId',
        }

        , {
            title: '匹配字段描述',
            key: 'ruleName',
            dataIndex: 'ruleName',
        }

        , {
            title: '匹配字段值',
            key: 'ruleValue',
            dataIndex: 'ruleValue',
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
                apiFun={wechatMenusMatchruleApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatMenusMatchruleApi.add}
                editApiFun={wechatMenusMatchruleApi.edit}
                delApiFun={wechatMenusMatchruleApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatMenusMatchrule
