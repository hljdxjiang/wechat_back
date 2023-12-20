import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import wechatTemplateInfoApi from '@/api/wechat/wechatTemplateInfo'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const WechatTemplateInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
                                                {
                    key:'tenantId',
                slot: <Input placeholder="租户ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'templateId',
                slot: <Input placeholder="模板ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'templateType',
                slot: <Input placeholder="模板类型" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'templateDes',
                slot: <Input placeholder="模板功能描述" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'templateUrl',
                slot: <Input placeholder="跳转URL" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'templateConfig',
                slot: <Input placeholder="模板配置：是否起用|是否推送非实名|是否保存推送记录0否1是" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'minipAppid',
                slot: <Input placeholder="跳转小程序ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'minipPagePath',
                slot: <Input placeholder="跳转小程序路径" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'messageType',
                slot: <Input placeholder="消息类型：TEMPLATE：模板消息SUBSCRIBLE:订阅消息" allowClear />,
                rules: [],
                initialValue: ''
            }
                                                                ]
    const columns = [
                                                        {
                                        title: 'id',
            key: 'id',
            dataIndex: 'id',
            }
            
                    
                                                ,{
                        title: '模板ID',
            key: 'templateId',
            dataIndex: 'templateId',
            }
            
                                                ,{
                        title: '模板类型',
            key: 'templateType',
            dataIndex: 'templateType',
            }
            
                                                ,{
                        title: '模板功能描述',
            key: 'templateDes',
            dataIndex: 'templateDes',
            }
            
                                                ,{
                        title: '跳转URL',
            key: 'templateUrl',
            dataIndex: 'templateUrl',
            }
            
                                                ,{
                        title: '模板配置：是否起用|是否推送非实名|是否保存推送记录0否1是',
            key: 'templateConfig',
            dataIndex: 'templateConfig',
            }
            
                                                ,{
                        title: '跳转小程序ID',
            key: 'minipAppid',
            dataIndex: 'minipAppid',
            }
            
                                                ,{
                        title: '跳转小程序路径',
            key: 'minipPagePath',
            dataIndex: 'minipPagePath',
            }
            
                                                ,{
                        title: '消息类型：TEMPLATE：模板消息SUBSCRIBLE:订阅消息',
            key: 'messageType',
            dataIndex: 'messageType',
            }
            
                                                ,{
                        title: '创建时间',
            key: 'createTime',
            dataIndex: 'createTime',
            }
            
                                                ,{
                        title: '最后修改时间',
            key: 'lastModifiedTime',
            dataIndex: 'lastModifiedTime',
            }
            
            ]
    return (
        <>
            <MyPage
                apiFun={wechatTemplateInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatTemplateInfoApi.add}
                editApiFun={wechatTemplateInfoApi.edit}
                delApiFun={wechatTemplateInfoApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatTemplateInfo
