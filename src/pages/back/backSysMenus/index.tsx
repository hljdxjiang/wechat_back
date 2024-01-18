import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import backSysMenusApi from '@/api/back/backSysMenus'
import ModelPage from '@/components/common/modelPage';

const BackSysMenus: FC = () => {
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
            key: 'path',
            slot: <Input placeholder="跳转路径" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'name',
            slot: <Input placeholder="菜单权限标题" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'icon',
            slot: <Input placeholder="菜单图标" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'hideinmenu',
            slot: <Input placeholder="是否展示0展示1不展示" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'exact',
            slot: <Input placeholder="匹配规则，0精确匹配" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'component',
            slot: <Input placeholder="链接组件" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'type',
            slot: <Input placeholder="菜单类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'parentId',
            slot: <Input placeholder="权限父ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'remark',
            slot: <Input placeholder="备注信息" allowClear />,
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
            title: '跳转路径',
            key: 'path',
            dataIndex: 'path',
        }

        , {
            title: '菜单权限标题',
            key: 'name',
            dataIndex: 'name',
        }

        , {
            title: '菜单图标',
            key: 'icon',
            dataIndex: 'icon',
        }

        , {
            title: '是否展示0展示1不展示',
            key: 'hideinmenu',
            dataIndex: 'hideinmenu',
        }

        , {
            title: '匹配规则，0精确匹配',
            key: 'exact',
            dataIndex: 'exact',
        }

        , {
            title: '链接组件',
            key: 'component',
            dataIndex: 'component',
        }

        , {
            title: '菜单类型',
            key: 'type',
            dataIndex: 'type',
        }

        , {
            title: '权限父ID',
            key: 'parentId',
            dataIndex: 'parentId',
        }


        , {
            title: '备注信息',
            key: 'remark',
            dataIndex: 'remark',
        }

    ]
    return (
        <>
            <ModelPage
                apiFun={backSysMenusApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backSysMenusApi.add}
                editApiFun={backSysMenusApi.edit}
                delApiFun={backSysMenusApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackSysMenus
