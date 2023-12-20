import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import backSysRevokesApi from '@/api/back/backSysRevokes'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const BackSysRevokes: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
                                                {
                    key:'revokeId',
                slot: <Input placeholder="权限ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'revokeTitle',
                slot: <Input placeholder="菜单权限标题" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'revokeType',
                slot: <Input placeholder="权限类型" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'revokeParentid',
                slot: <Input placeholder="权限父ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                                                        ,{
                    key:'remark',
                slot: <Input placeholder="备注信息" allowClear />,
                rules: [],
                initialValue: ''
            }
                        ]
    const columns = [
                                                        {
                                        title: '主键ID',
            key: 'id',
            dataIndex: 'id',
            }
            
                                                ,{
                        title: '权限ID',
            key: 'revokeId',
            dataIndex: 'revokeId',
            }
            
                                                ,{
                        title: '菜单权限标题',
            key: 'revokeTitle',
            dataIndex: 'revokeTitle',
            }
            
                                                ,{
                        title: '权限类型',
            key: 'revokeType',
            dataIndex: 'revokeType',
            }
            
                                                ,{
                        title: '权限父ID',
            key: 'revokeParentid',
            dataIndex: 'revokeParentid',
            }
            
                                                ,{
                        title: '',
            key: 'createTime',
            dataIndex: 'createTime',
            }
            
                                                ,{
                        title: '',
            key: 'lastModifiedTime',
            dataIndex: 'lastModifiedTime',
            }
            
                                                ,{
                        title: '备注信息',
            key: 'remark',
            dataIndex: 'remark',
            }
            
            ]
    return (
        <>
            <MyPage
                apiFun={backSysRevokesApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backSysRevokesApi.add}
                editApiFun={backSysRevokesApi.edit}
                delApiFun={backSysRevokesApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackSysRevokes
