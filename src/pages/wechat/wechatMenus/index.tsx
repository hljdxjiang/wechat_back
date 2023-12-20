import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import wechatMenusApi from '@/api/wechat/wechatMenus'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const WechatMenus: FC = () => {
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
                    key:'menuId',
                slot: <Input placeholder="菜单ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'menuName',
                slot: <Input placeholder="菜单名称" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'wxMenuId',
                slot: <Input placeholder="微信返回的ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'version',
                slot: <Input placeholder="使用版本" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'remark',
                slot: <Input placeholder="菜单备注" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'menuType',
                slot: <Input placeholder="菜单类型0标准菜单1个性化菜单" allowClear />,
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
                        title: '菜单ID',
            key: 'menuId',
            dataIndex: 'menuId',
            }
            
                                                ,{
                        title: '菜单名称',
            key: 'menuName',
            dataIndex: 'menuName',
            }
            
                                                ,{
                        title: '微信返回的ID',
            key: 'wxMenuId',
            dataIndex: 'wxMenuId',
            }
            
                                                ,{
                        title: '使用版本',
            key: 'version',
            dataIndex: 'version',
            }
            
                                                ,{
                        title: '菜单备注',
            key: 'remark',
            dataIndex: 'remark',
            }
            
                                                ,{
                        title: '菜单类型0标准菜单1个性化菜单',
            key: 'menuType',
            dataIndex: 'menuType',
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
                apiFun={wechatMenusApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatMenusApi.add}
                editApiFun={wechatMenusApi.edit}
                delApiFun={wechatMenusApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatMenus
