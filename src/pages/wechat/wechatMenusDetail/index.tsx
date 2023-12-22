import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import wechatMenusDetailApi from '@/api/wechat/wechatMenusDetail'
import MyPage from '@/components/common/myPage';

const WechatMenusDetail: FC = () => {
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
            key: 'itemPid',
            slot: <Input placeholder="菜单父ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'itemId',
            slot: <Input placeholder="菜单ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'sort',
            slot: <Input placeholder="排序" allowClear />,
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
            key: 'menuId',
            dataIndex: 'menuId',
        }

        , {
            title: '菜单父ID',
            key: 'itemPid',
            dataIndex: 'itemPid',
        }

        , {
            title: '菜单ID',
            key: 'itemId',
            dataIndex: 'itemId',
        }

        , {
            title: '排序',
            key: 'sort',
            dataIndex: 'sort',
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
            <MyPage
                apiFun={wechatMenusDetailApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatMenusDetailApi.add}
                editApiFun={wechatMenusDetailApi.edit}
                delApiFun={wechatMenusDetailApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatMenusDetail
