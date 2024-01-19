import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import backRuleDetailApi from '@/api/back/backRuleDetail'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';


const BackRuleDetail: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'roleId',
            slot: <Input placeholder="" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'keyValue',
            slot: <Input placeholder="" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'keyType',
            slot: <Input placeholder="" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns:TableColumn[] = [


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
            <ViewPage
                apiFun={backRuleDetailApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backRuleDetailApi.add}
                editApiFun={backRuleDetailApi.edit}
                delApiFun={backRuleDetailApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackRuleDetail
