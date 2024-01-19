import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import wechatMenusItemApi from '@/api/wechat/wechatMenusItem'
import ViewPage from '@/components/common/viewPage';

const WechatMenusItem: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'itemId',
            slot: <Input placeholder="菜单ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'name',
            slot: <Input placeholder="菜单名称" allowClear />,
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
            key: 'key',
            slot: <Input placeholder="事件ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'url',
            slot: <Input placeholder="跳转链接" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'appid',
            slot: <Input placeholder="小程序ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'pagepath',
            slot: <Input placeholder="小程序地址" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'articleId',
            slot: <Input placeholder="媒体文件ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'articleViewLimited',
            slot: <Input placeholder="图文消息ID" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '菜单ID',
            key: 'itemId',
            dataIndex: 'itemId',
        }

        , {
            title: '菜单名称',
            key: 'name',
            dataIndex: 'name',
        }

        , {
            title: '菜单类型',
            key: 'type',
            dataIndex: 'type',
        }

        , {
            title: '事件ID',
            key: 'key',
            dataIndex: 'key',
        }

        , {
            title: '跳转链接',
            key: 'url',
            dataIndex: 'url',
        }

        , {
            title: '小程序ID',
            key: 'appid',
            dataIndex: 'appid',
        }

        , {
            title: '小程序地址',
            key: 'pagepath',
            dataIndex: 'pagepath',
        }

        , {
            title: '媒体文件ID',
            key: 'articleId',
            dataIndex: 'articleId',
        }

        , {
            title: '图文消息ID',
            key: 'articleViewLimited',
            dataIndex: 'articleViewLimited',
        }



    ]
    return (
        <>
            <ViewPage
                apiFun={wechatMenusItemApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatMenusItemApi.add}
                editApiFun={wechatMenusItemApi.edit}
                delApiFun={wechatMenusItemApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatMenusItem
