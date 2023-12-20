import React, {FC, useState} from 'react'
import {Input,} from 'antd'
import wechatSubscribeInfoApi from '@/api/wechat/wechatSubscribeInfo'
import MyPage from '@/components/common/myPage';

const WechatSubscribeInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'appid',
            slot: <Input placeholder="微信APPID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'wxopenid',
            slot: <Input placeholder="微信Openid" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'templateId',
            slot: <Input placeholder="模板ID" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'popupSence',
            slot: <Input placeholder="场景值" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'subscribeStatusString',
            slot: <Input placeholder="用户点击行为：同意、取消发送通知" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'sendStatus',
            slot: <Input placeholder="0未发送，1发送失败9发生成功" allowClear/>,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'sendResult',
            slot: <Input placeholder="推送结果" allowClear/>,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [

        {
            title: '微信APPID',
            key: 'appid',
            dataIndex: 'appid',
        }

        , {
            title: '微信Openid',
            key: 'wxopenid',
            dataIndex: 'wxopenid',
        }

        , {
            title: '模板ID',
            key: 'templateId',
            dataIndex: 'templateId',
        }

        , {
            title: '场景值',
            key: 'popupSence',
            dataIndex: 'popupSence',
        }

        , {
            title: '用户点击行为：同意、取消发送通知',
            key: 'subscribeStatusString',
            dataIndex: 'subscribeStatusString',
        }


        , {
            title: '0未发送，1发送失败9发生成功',
            key: 'sendStatus',
            dataIndex: 'sendStatus',
        }

        , {
            title: '推送结果',
            key: 'sendResult',
            dataIndex: 'sendResult',
        }

    ]
    return (
        <>
            <MyPage
                apiFun={wechatSubscribeInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatSubscribeInfoApi.add}
                editApiFun={wechatSubscribeInfoApi.edit}
                delApiFun={wechatSubscribeInfoApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatSubscribeInfo
