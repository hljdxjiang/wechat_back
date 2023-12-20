import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import crmProdTypeApi from '@/api/crm/crmProdType'
import MyPage from '@/components/common/myPage';

const CrmProdType: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'prodTypeId',
            slot: <Input placeholder="分类ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodTypeName',
            slot: <Input placeholder="分类标识" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'parentId',
            slot: <Input placeholder="父ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="用户状态" allowClear/>,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '分类ID',
            key: 'prodTypeId',
            dataIndex: 'prodTypeId',
        }

        , {
            title: '分类标识',
            key: 'prodTypeName',
            dataIndex: 'prodTypeName',
        }

        , {
            title: '父ID',
            key: 'parentId',
            dataIndex: 'parentId',
        }


        , {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={crmProdTypeApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmProdTypeApi.add}
                editApiFun={crmProdTypeApi.edit}
                delApiFun={crmProdTypeApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmProdType
