import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import sysParamConfigApi from '@/api/sys/sysParamConfig'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const SysParamConfig: FC = () => {
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
                    key:'configName',
                slot: <Input placeholder="配置中文名" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'configKey',
                slot: <Input placeholder="配置主键" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'configValue',
                slot: <Input placeholder="配置值" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'configDesc',
                slot: <Input placeholder="配置描述" allowClear />,
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
                        title: '配置中文名',
            key: 'configName',
            dataIndex: 'configName',
            }
            
                                                ,{
                        title: '配置主键',
            key: 'configKey',
            dataIndex: 'configKey',
            }
            
                                                ,{
                        title: '配置值',
            key: 'configValue',
            dataIndex: 'configValue',
            }
            
                                                ,{
                        title: '配置描述',
            key: 'configDesc',
            dataIndex: 'configDesc',
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
                apiFun={sysParamConfigApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysParamConfigApi.add}
                editApiFun={sysParamConfigApi.edit}
                delApiFun={sysParamConfigApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysParamConfig
