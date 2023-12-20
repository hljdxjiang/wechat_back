import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import sysPageInfoApi from '@/api/sys/sysPageInfo'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const SysPageInfo: FC = () => {
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
                    key:'pageId',
                slot: <Input placeholder="页面ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'pageTitle',
                slot: <Input placeholder="页面标题" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'pageType',
                slot: <Input placeholder="页面类型" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'controlFlag',
                slot: <Input placeholder="控制标识：ALL,LOCAL,OFF" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'needLogin',
                slot: <Input placeholder="是否需要登录0需要1不需要" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'pageRemark',
                slot: <Input placeholder="页面备注" allowClear />,
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
                        ]
    const columns = [
                                                        {
                                        title: '',
            key: 'id',
            dataIndex: 'id',
            }
            
                    
                                                ,{
                        title: '页面ID',
            key: 'pageId',
            dataIndex: 'pageId',
            }
            
                                                ,{
                        title: '页面标题',
            key: 'pageTitle',
            dataIndex: 'pageTitle',
            }
            
                                                ,{
                        title: '页面类型',
            key: 'pageType',
            dataIndex: 'pageType',
            }
            
                                                ,{
                        title: '控制标识：ALL,LOCAL,OFF',
            key: 'controlFlag',
            dataIndex: 'controlFlag',
            }
            
                                                ,{
                        title: '是否需要登录0需要1不需要',
            key: 'needLogin',
            dataIndex: 'needLogin',
            }
            
                                                ,{
                        title: '页面备注',
            key: 'pageRemark',
            dataIndex: 'pageRemark',
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
            
            ]
    return (
        <>
            <MyPage
                apiFun={sysPageInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={sysPageInfoApi.add}
                editApiFun={sysPageInfoApi.edit}
                delApiFun={sysPageInfoApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default SysPageInfo
