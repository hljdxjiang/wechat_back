import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import backSysRoleDetailApi from '@/api/back/backSysRoleDetail'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const BackSysRoleDetail: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
                                                {
                    key:'roleid',
                slot: <Input placeholder="角色ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'path',
                slot: <Input placeholder="权限路径" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'title',
                slot: <Input placeholder="权限描述" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'type',
                slot: <Input placeholder="权限类型" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'parentPath',
                slot: <Input placeholder="父ID" allowClear />,
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
                        title: '角色ID',
            key: 'roleid',
            dataIndex: 'roleid',
            }
            
                                                ,{
                        title: '权限路径',
            key: 'path',
            dataIndex: 'path',
            }
            
                                                ,{
                        title: '权限描述',
            key: 'title',
            dataIndex: 'title',
            }
            
                                                ,{
                        title: '权限类型',
            key: 'type',
            dataIndex: 'type',
            }
            
                                                ,{
                        title: '父ID',
            key: 'parentPath',
            dataIndex: 'parentPath',
            }
            
            ]
    return (
        <>
            <MyPage
                apiFun={backSysRoleDetailApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backSysRoleDetailApi.add}
                editApiFun={backSysRoleDetailApi.edit}
                delApiFun={backSysRoleDetailApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackSysRoleDetail
