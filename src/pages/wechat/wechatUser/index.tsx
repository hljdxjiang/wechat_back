import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import wechatUserApi from '@/api/wechat/wechatUser'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const WechatUser: FC = () => {
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
                    key:'unionid',
                slot: <Input placeholder="开放平台下统一ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'wxopenid',
                slot: <Input placeholder="微信公众号openId" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'nickname',
                slot: <Input placeholder="微信昵称" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'sex',
                slot: <Input placeholder="性别1为男,2为女,0为未知" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'province',
                slot: <Input placeholder="省" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'city',
                slot: <Input placeholder="城市" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'country',
                slot: <Input placeholder="国家" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'headimgurl',
                slot: <Input placeholder="头像地址" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'privilege',
                slot: <Input placeholder="用户特权信息" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'mobileNo',
                slot: <Input placeholder="手机号码" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'status',
                slot: <Input placeholder="用户状态" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'userId',
                slot: <Input placeholder="客户ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'remark',
                slot: <Input placeholder="用户备注" allowClear />,
                rules: [],
                initialValue: ''
            }
                                                                ]
    const columns = [
                                                        {
                                        title: '',
            key: 'id',
            dataIndex: 'id',
            }
            
                    
                                                ,{
                        title: '开放平台下统一ID',
            key: 'unionid',
            dataIndex: 'unionid',
            }
            
                                                ,{
                        title: '微信公众号openId',
            key: 'wxopenid',
            dataIndex: 'wxopenid',
            }
            
                                                ,{
                        title: '微信昵称',
            key: 'nickname',
            dataIndex: 'nickname',
            }
            
                                                ,{
                        title: '性别1为男,2为女,0为未知',
            key: 'sex',
            dataIndex: 'sex',
            }
            
                                                ,{
                        title: '省',
            key: 'province',
            dataIndex: 'province',
            }
            
                                                ,{
                        title: '城市',
            key: 'city',
            dataIndex: 'city',
            }
            
                                                ,{
                        title: '国家',
            key: 'country',
            dataIndex: 'country',
            }
            
                                                ,{
                        title: '头像地址',
            key: 'headimgurl',
            dataIndex: 'headimgurl',
            }
            
                                                ,{
                        title: '用户特权信息',
            key: 'privilege',
            dataIndex: 'privilege',
            }
            
                                                ,{
                        title: '手机号码',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
            }
            
                                                ,{
                        title: '用户状态',
            key: 'status',
            dataIndex: 'status',
            }
            
                                                ,{
                        title: '客户ID',
            key: 'userId',
            dataIndex: 'userId',
            }
            
                                                ,{
                        title: '用户备注',
            key: 'remark',
            dataIndex: 'remark',
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
                apiFun={wechatUserApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatUserApi.add}
                editApiFun={wechatUserApi.edit}
                delApiFun={wechatUserApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatUser
