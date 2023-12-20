import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import backRuleControlApi from '@/api/back/backRuleControl'
import MyPage from '@/components/common/myPage';

const BackRuleControl: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'controlType',
            slot: <Input placeholder="产品类型" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'controlDesc',
            slot: <Input placeholder="产品描述" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'ruleRange',
            slot: <Input placeholder="规则范围" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'controlSwitch',
            slot: <Input placeholder="控制开关" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'ruleExpr',
            slot: <Input placeholder="规则表达式" allowClear/>,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '产品类型',
            key: 'controlType',
            dataIndex: 'controlType',
        }

        , {
            title: '产品描述',
            key: 'controlDesc',
            dataIndex: 'controlDesc',
        }

        , {
            title: '规则范围',
            key: 'ruleRange',
            dataIndex: 'ruleRange',
        }

        , {
            title: '控制开关',
            key: 'controlSwitch',
            dataIndex: 'controlSwitch',
        }

        , {
            title: '规则表达式',
            key: 'ruleExpr',
            dataIndex: 'ruleExpr',
        }


    ]
    return (
        <>
            <MyPage
                apiFun={backRuleControlApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backRuleControlApi.add}
                editApiFun={backRuleControlApi.edit}
                delApiFun={backRuleControlApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackRuleControl
