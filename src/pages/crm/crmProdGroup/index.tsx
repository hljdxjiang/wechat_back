import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import crmProdGroupApi from '@/api/crm/crmProdGroup'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const CrmProdGroup: FC = () => {
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
                    key:'prodId',
                slot: <Input placeholder="产品编号" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'prodGroupId',
                slot: <Input placeholder="分组ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'prodGroupName',
                slot: <Input placeholder="分组名称" allowClear />,
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
                slot: <Input placeholder="状态" allowClear />,
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
                        title: '产品编号',
            key: 'prodId',
            dataIndex: 'prodId',
            }
            
                                                ,{
                        title: '分组ID',
            key: 'prodGroupId',
            dataIndex: 'prodGroupId',
            }
            
                                                ,{
                        title: '分组名称',
            key: 'prodGroupName',
            dataIndex: 'prodGroupName',
            }
            
                                                ,{
                        title: '备注',
            key: 'remark',
            dataIndex: 'remark',
            }
            
                                                ,{
                        title: '状态',
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
                apiFun={crmProdGroupApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmProdGroupApi.add}
                editApiFun={crmProdGroupApi.edit}
                delApiFun={crmProdGroupApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmProdGroup
