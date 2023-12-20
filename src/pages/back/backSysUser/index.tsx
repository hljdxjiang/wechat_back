import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import backSysUserApi from '@/api/back/backSysUser'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const BackSysUser: FC = () => {
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
                    key:'userId',
                slot: <Input placeholder="用户ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'passwd',
                slot: <Input placeholder="密码" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'groupId',
                slot: <Input placeholder="用户分组ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'roleId',
                slot: <Input placeholder="角色ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'userName',
                slot: <Input placeholder="姓名" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'mobileNo',
                slot: <Input placeholder="手机号" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'email',
                slot: <Input placeholder="邮箱地址" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'idNo',
                slot: <Input placeholder="证件号" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'idType',
                slot: <Input placeholder="证件类型" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'oauthCode',
                slot: <Input placeholder="二次认证码" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'remark',
                slot: <Input placeholder="用户备注" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'status',
                slot: <Input placeholder="用户状态" allowClear />,
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
                        title: '用户ID',
            key: 'userId',
            dataIndex: 'userId',
            }
            
                                                ,{
                        title: '密码',
            key: 'passwd',
            dataIndex: 'passwd',
            }
            
                                                ,{
                        title: '用户分组ID',
            key: 'groupId',
            dataIndex: 'groupId',
            }
            
                                                ,{
                        title: '角色ID',
            key: 'roleId',
            dataIndex: 'roleId',
            }
            
                                                ,{
                        title: '姓名',
            key: 'userName',
            dataIndex: 'userName',
            }
            
                                                ,{
                        title: '手机号',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
            }
            
                                                ,{
                        title: '邮箱地址',
            key: 'email',
            dataIndex: 'email',
            }
            
                                                ,{
                        title: '证件号',
            key: 'idNo',
            dataIndex: 'idNo',
            }
            
                                                ,{
                        title: '证件类型',
            key: 'idType',
            dataIndex: 'idType',
            }
            
                                                ,{
                        title: '二次认证码',
            key: 'oauthCode',
            dataIndex: 'oauthCode',
            }
            
                                                ,{
                        title: '用户备注',
            key: 'remark',
            dataIndex: 'remark',
            }
            
                                                ,{
                        title: '用户状态',
            key: 'status',
            dataIndex: 'status',
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
                apiFun={backSysUserApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backSysUserApi.add}
                editApiFun={backSysUserApi.edit}
                delApiFun={backSysUserApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackSysUser
