import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import sysPageTypeInfoApi from '@/api/sys/sysPageTypeInfo'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const SysPageTypeInfo: FC = () => {
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
                    key:'typeId',
                slot: <Input placeholder="类型ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'typeDesc',
                slot: <Input placeholder="类型描述" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'status',
                slot: <Input placeholder="状态0启用1禁用" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'typeRemark',
                slot: <Input placeholder="类型备注" allowClear />,
                rules: [],
                initialValue: ''
            }
                                                                        ,{
                    key:'userid',
                slot: <Input placeholder="创建用户ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'modifyUserid',
                slot: <Input placeholder="最后修改用户ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'typeKind',
                slot: <Input placeholder="类型大类" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'typeSort',
                slot: <Input placeholder="排序" allowClear />,
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
                        title: '类型ID',
            key: 'typeId',
            dataIndex: 'typeId',
            }
            
                                                ,{
                        title: '类型描述',
            key: 'typeDesc',
            dataIndex: 'typeDesc',
            }
            
                                                ,{
                        title: '状态0启用1禁用',
            key: 'status',
            dataIndex: 'status',
            }
            
                                                ,{
                        title: '类型备注',
            key: 'typeRemark',
            dataIndex: 'typeRemark',
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
            
                                                ,{
                        title: '创建用户ID',
            key: 'userid',
            dataIndex: 'userid',
            }
            
                                                ,{
                        title: '最后修改用户ID',
            key: 'modifyUserid',
            dataIndex: 'modifyUserid',
            }
            
                                                ,{
                        title: '类型大类',
            key: 'typeKind',
            dataIndex: 'typeKind',
            }
            
                                                ,{
                        title: '排序',
            key: 'typeSort',
            dataIndex: 'typeSort',
            }
            
            ]
    return (
        <>
            <MyPage
                apiFun={sysPageTypeInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysPageTypeInfoApi.add}
                editApiFun={sysPageTypeInfoApi.edit}
                delApiFun={sysPageTypeInfoApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysPageTypeInfo
