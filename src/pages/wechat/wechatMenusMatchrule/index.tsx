import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import wechatMenusMatchruleApi from '@/api/wechat/wechatMenusMatchrule'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const WechatMenusMatchrule: FC = () => {
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
                    key:'ruleId',
                slot: <Input placeholder="匹配字段" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'ruleValue',
                slot: <Input placeholder="匹配字段值" allowClear />,
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
                        title: '匹配字段',
            key: 'ruleId',
            dataIndex: 'ruleId',
            }
            
                                                ,{
                        title: '匹配字段值',
            key: 'ruleValue',
            dataIndex: 'ruleValue',
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
                apiFun={wechatMenusMatchruleApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={wechatMenusMatchruleApi.add}
                editApiFun={wechatMenusMatchruleApi.edit}
                delApiFun={wechatMenusMatchruleApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default WechatMenusMatchrule
