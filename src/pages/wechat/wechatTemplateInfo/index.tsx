import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import wechatTemplateInfoApi from '@/api/wechat/wechatTemplateInfo'
import ViewPage from '@/components/common/viewPage';

const WechatTemplateInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'templateId',
            slot: <Input placeholder="模板ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'templateType',
            slot: <Input placeholder="模板类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'templateDes',
            slot: <Input placeholder="模板功能描述" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'templateUrl',
            slot: <Input placeholder="跳转URL" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'templateConfig',
            slot: <Input placeholder="模板配置：是否起用|是否推送非实名|是否保存推送记录0否1是" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'minipAppid',
            slot: <Input placeholder="跳转小程序ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'minipPagePath',
            slot: <Input placeholder="跳转小程序路径" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'messageType',
            slot: <Input placeholder="消息类型：TEMPLATE：模板消息SUBSCRIBLE:订阅消息" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '模板ID',
            key: 'templateId',
            dataIndex: 'templateId',
        }

        , {
            title: '模板类型',
            key: 'templateType',
            dataIndex: 'templateType',
        }

        , {
            title: '模板功能描述',
            key: 'templateDes',
            dataIndex: 'templateDes',
        }

        , {
            title: '跳转URL',
            key: 'templateUrl',
            dataIndex: 'templateUrl',
        }

        , {
            title: '模板配置：是否起用|是否推送非实名|是否保存推送记录0否1是',
            key: 'templateConfig',
            dataIndex: 'templateConfig',
        }

        , {
            title: '跳转小程序ID',
            key: 'minipAppid',
            dataIndex: 'minipAppid',
        }

        , {
            title: '跳转小程序路径',
            key: 'minipPagePath',
            dataIndex: 'minipPagePath',
        }

        , {
            title: '消息类型：TEMPLATE：模板消息SUBSCRIBLE:订阅消息',
            key: 'messageType',
            dataIndex: 'messageType',
        }


    ]
    return (
        <>
            <ViewPage
                apiFun={wechatTemplateInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatTemplateInfoApi.add}
                editApiFun={wechatTemplateInfoApi.edit}
                delApiFun={wechatTemplateInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatTemplateInfo
