import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import userAddrInfoApi from '@/api/user/userAddrInfo'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const UserAddrInfo: FC = () => {
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
                slot: <Input placeholder="" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'mobileNo',
                slot: <Input placeholder="客户手机号" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'name',
                slot: <Input placeholder="姓名" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'address',
                slot: <Input placeholder="地址" allowClear />,
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
                    key:'country',
                slot: <Input placeholder="国家" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'province',
                slot: <Input placeholder="省份" allowClear />,
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
                    key:'street',
                slot: <Input placeholder="街道" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'detail',
                slot: <Input placeholder="详细地址" allowClear />,
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
                        title: '',
            key: 'userId',
            dataIndex: 'userId',
            }
            
                                                ,{
                        title: '客户手机号',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
            }
            
                                                ,{
                        title: '姓名',
            key: 'name',
            dataIndex: 'name',
            }
            
                                                ,{
                        title: '地址',
            key: 'address',
            dataIndex: 'address',
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
                        title: '国家',
            key: 'country',
            dataIndex: 'country',
            }
            
                                                ,{
                        title: '省份',
            key: 'province',
            dataIndex: 'province',
            }
            
                                                ,{
                        title: '城市',
            key: 'city',
            dataIndex: 'city',
            }
            
                                                ,{
                        title: '街道',
            key: 'street',
            dataIndex: 'street',
            }
            
                                                ,{
                        title: '详细地址',
            key: 'detail',
            dataIndex: 'detail',
            }
            
            ]
    return (
        <>
            <MyPage
                apiFun={userAddrInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={userAddrInfoApi.add}
                editApiFun={userAddrInfoApi.edit}
                delApiFun={userAddrInfoApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default UserAddrInfo
