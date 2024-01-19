import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import backImgInfoApi from '@/api/back/backImgInfo'
import ViewPage from '@/components/common/viewPage';

const BackImgInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'imgPath',
            slot: <Input placeholder="图片本地路径" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'imgDesc',
            slot: <Input placeholder="图片描述" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'imgSort',
            slot: <Input placeholder="排序" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'imgType',
            slot: <Input placeholder="图片类型" allowClear />,
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
            slot: <Input placeholder="用户状态" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'controlFlag',
            slot: <Input placeholder="控制标识" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'whiteType',
            slot: <Input placeholder="白名单类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'validTime',
            slot: <Input placeholder="生效时间" allowClear />,
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
            key: 'channelNo',
            slot: <Input placeholder="展示渠道" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'needLogin',
            slot: <Input placeholder="是否需要登录0否1是" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [
        {
            title: '图片本地路径',
            key: 'imgPath',
            dataIndex: 'imgPath',
            editType: "upload",
            render: (picture: CommonObjectType<string>) => (
                <span onClick={() => { }}>
                    <img src={picture.thumbnail} width="40" alt="" />
                </span>
            ),
        }

        , {
            title: '图片描述',
            key: 'imgDesc',
            dataIndex: 'imgDesc',
        }

        , {
            title: '排序',
            key: 'imgSort',
            dataIndex: 'imgSort',
        }

        , {
            title: '图片类型',
            key: 'imgType',
            dataIndex: 'imgType',
        }

        , {
            title: '链接地址',
            key: 'linkUrl',
            dataIndex: 'linkUrl',
        }

        , {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }


        , {
            title: '控制标识',
            key: 'controlFlag',
            dataIndex: 'controlFlag',
        }

        , {
            title: '白名单类型',
            key: 'whiteType',
            dataIndex: 'whiteType',
        }

        , {
            title: '生效时间',
            key: 'validTime',
            dataIndex: 'validTime',
        }

        , {
            title: '失效时间',
            key: 'expireTime',
            dataIndex: 'expireTime',
        }

        , {
            title: '展示渠道',
            key: 'channelNo',
            dataIndex: 'channelNo',
        }

        , {
            title: '是否需要登录0否1是',
            key: 'needLogin',
            dataIndex: 'needLogin',
        }

    ]
    return (
        <>
            <ViewPage
                apiFun={backImgInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backImgInfoApi.add}
                editApiFun={backImgInfoApi.edit}
                delApiFun={backImgInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackImgInfo
