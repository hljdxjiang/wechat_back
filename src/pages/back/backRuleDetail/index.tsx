import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import backRuleDetailApi from '@/api/back/backRuleDetail'
import MyPage from '@/components/common/myPage';

const BackRuleDetail: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'roleId',
            slot: <Input placeholder="" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'keyValue',
            slot: <Input placeholder="" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'keyType',
            slot: <Input placeholder="" allowClear/>,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '',
            key: 'roleId',
            dataIndex: 'roleId',
        }

        , {
            title: '',
            key: 'keyValue',
            dataIndex: 'keyValue',
        }

        , {
            title: '',
            key: 'keyType',
            dataIndex: 'keyType',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={backRuleDetailApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backRuleDetailApi.add}
                editApiFun={backRuleDetailApi.edit}
                delApiFun={backRuleDetailApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackRuleDetail
