import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import crmProdGroupApi from '@/api/crm/crmProdGroup'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const CrmProdGroup: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'prodId',
            slot: <Input placeholder="产品编号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodGroupId',
            slot: <Input placeholder="分组ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'prodGroupName',
            slot: <Input placeholder="分组名称" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'remark',
            slot: <Input placeholder="备注" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="状态" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns:TableColumn[] = [


        {
            title: '产品编号',
            key: 'prodId',
            dataIndex: 'prodId',
        }

        , {
            title: '分组ID',
            key: 'prodGroupId',
            dataIndex: 'prodGroupId',
        }

        , {
            title: '分组名称',
            key: 'prodGroupName',
            dataIndex: 'prodGroupName',
        }

        , {
            title: '备注',
            key: 'remark',
            dataIndex: 'remark',
        }

        , {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
        }


    ]
    return (
        <>
            <ViewPage
                apiFun={crmProdGroupApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmProdGroupApi.add}
                editApiFun={crmProdGroupApi.edit}
                delApiFun={crmProdGroupApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmProdGroup
