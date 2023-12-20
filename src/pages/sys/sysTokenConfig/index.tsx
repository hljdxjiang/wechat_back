import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import sysTokenConfigApi from '@/api/sys/sysTokenConfig'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const SysTokenConfig: FC = () => {
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
                    key:'appid',
                slot: <Input placeholder="程序ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'tokenKey',
                slot: <Input placeholder="Token码值" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'tokenDesc',
                slot: <Input placeholder="Token描述" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'tokenVaildType',
                slot: <Input placeholder="Token有效期类型" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'tokenValidTime',
                slot: <Input placeholder="token有效期时常" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'tokenStatus',
                slot: <Input placeholder="配置状态" allowClear />,
                rules: [],
                initialValue: ''
            }
                                                    ,{
                    key:'lastUpdateTime',
                slot: <Input placeholder="最后修改时间" allowClear />,
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
                        title: '程序ID',
            key: 'appid',
            dataIndex: 'appid',
            }
            
                                                ,{
                        title: 'Token码值',
            key: 'tokenKey',
            dataIndex: 'tokenKey',
            }
            
                                                ,{
                        title: 'Token描述',
            key: 'tokenDesc',
            dataIndex: 'tokenDesc',
            }
            
                                                ,{
                        title: 'Token有效期类型',
            key: 'tokenVaildType',
            dataIndex: 'tokenVaildType',
            }
            
                                                ,{
                        title: 'token有效期时常',
            key: 'tokenValidTime',
            dataIndex: 'tokenValidTime',
            }
            
                                                ,{
                        title: '配置状态',
            key: 'tokenStatus',
            dataIndex: 'tokenStatus',
            }
            
                                                ,{
                        title: '创建时间',
            key: 'createTime',
            dataIndex: 'createTime',
            }
            
                                                ,{
                        title: '最后修改时间',
            key: 'lastUpdateTime',
            dataIndex: 'lastUpdateTime',
            }
            
            ]
    return (
        <>
            <MyPage
                apiFun={sysTokenConfigApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysTokenConfigApi.add}
                editApiFun={sysTokenConfigApi.edit}
                delApiFun={sysTokenConfigApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysTokenConfig
