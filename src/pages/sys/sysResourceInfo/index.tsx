import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import sysResourceInfoApi from '@/api/sys/sysResourceInfo'
import ViewPage from '@/components/common/viewPage';
import { SearchColumn, TableColumn } from '@/app_models/user';

const SysResourceInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList:SearchColumn[] = [
        {
            key: 'resourceId',
            slot: <Input placeholder="资源ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'resourceType',
            slot: <Input placeholder="资源类型:图片，视频，文档" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'linkUrl',
            slot: <Input placeholder="链接地址" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="资源状态" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'userId',
            slot: <Input placeholder="作者ID" allowClear />,
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
            key: 'expireTime',
            slot: <Input placeholder="失效时间" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'validTime',
            slot: <Input placeholder="生效时间" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns:TableColumn[] = [


        {
            title: '资源ID',
            key: 'resourceId',
            dataIndex: 'resourceId',
        }

        , {
            title: '资源类型:图片，视频，文档',
            key: 'resourceType',
            dataIndex: 'resourceType',
        }

        , {
            title: '链接地址',
            key: 'linkUrl',
            dataIndex: 'linkUrl',
        }

        , {
            title: '资源状态',
            key: 'status',
            dataIndex: 'status',
        }

        , {
            title: '作者ID',
            key: 'userId',
            dataIndex: 'userId',
        }

        , {
            title: '备注',
            key: 'remark',
            dataIndex: 'remark',
        }


        , {
            title: '失效时间',
            key: 'expireTime',
            dataIndex: 'expireTime',
        }

        , {
            title: '生效时间',
            key: 'validTime',
            dataIndex: 'validTime',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={sysResourceInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysResourceInfoApi.add}
                editApiFun={sysResourceInfoApi.edit}
                delApiFun={sysResourceInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysResourceInfo
