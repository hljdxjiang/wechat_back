import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import bbsColumnInfoApi from '@/api/bbs/bbsColumnInfo'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const BbsColumnInfo: FC = () => {
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
                    key:'columnId',
                slot: <Input placeholder="栏目ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'columnName',
                slot: <Input placeholder="栏目名称" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'columnDesc',
                slot: <Input placeholder="栏目描述" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'remark',
                slot: <Input placeholder="备注" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'status',
                slot: <Input placeholder="状态0有效1失效" allowClear />,
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
                        title: '栏目ID',
            key: 'columnId',
            dataIndex: 'columnId',
            }
            
                                                ,{
                        title: '栏目名称',
            key: 'columnName',
            dataIndex: 'columnName',
            }
            
                                                ,{
                        title: '栏目描述',
            key: 'columnDesc',
            dataIndex: 'columnDesc',
            }
            
                                                ,{
                        title: '备注',
            key: 'remark',
            dataIndex: 'remark',
            }
            
                                                ,{
                        title: '状态0有效1失效',
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
                apiFun={bbsColumnInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={bbsColumnInfoApi.add}
                editApiFun={bbsColumnInfoApi.edit}
                delApiFun={bbsColumnInfoApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BbsColumnInfo
