import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import mallSaleAddrApi from '@/api/mall/mallSaleAddr'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const MallSaleAddr: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'batchId',
            slot: <Input placeholder="销售批次ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'userId',
            slot: <Input placeholder="" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'mobileNo',
            slot: <Input placeholder="客户手机号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'name',
            slot: <Input placeholder="姓名" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'address',
            slot: <Input placeholder="地址" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="用户状态" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'country',
            slot: <Input placeholder="国家" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'province',
            slot: <Input placeholder="省份" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'city',
            slot: <Input placeholder="城市" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'street',
            slot: <Input placeholder="街道" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'detail',
            slot: <Input placeholder="详细地址" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns:TableColumn[] = [


        {
            title: '销售批次ID',
            key: 'batchId',
            dataIndex: 'batchId',
        }

        , {
            title: '',
            key: 'userId',
            dataIndex: 'userId',
        }

        , {
            title: '客户手机号',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
        }

        , {
            title: '姓名',
            key: 'name',
            dataIndex: 'name',
        }

        , {
            title: '地址',
            key: 'address',
            dataIndex: 'address',
        }

        , {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }


        , {
            title: '国家',
            key: 'country',
            dataIndex: 'country',
        }

        , {
            title: '省份',
            key: 'province',
            dataIndex: 'province',
        }

        , {
            title: '城市',
            key: 'city',
            dataIndex: 'city',
        }

        , {
            title: '街道',
            key: 'street',
            dataIndex: 'street',
        }

        , {
            title: '详细地址',
            key: 'detail',
            dataIndex: 'detail',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={mallSaleAddrApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallSaleAddrApi.add}
                editApiFun={mallSaleAddrApi.edit}
                delApiFun={mallSaleAddrApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallSaleAddr
