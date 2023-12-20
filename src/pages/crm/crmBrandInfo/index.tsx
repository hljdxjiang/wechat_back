import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import crmBrandInfoApi from '@/api/crm/crmBrandInfo'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const CrmBrandInfo: FC = () => {
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
                    key:'brandId',
                slot: <Input placeholder="品牌编号" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'brandName',
                slot: <Input placeholder="品牌名称" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'brandLogo',
                slot: <Input placeholder="品牌logo路径" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'companyName',
                slot: <Input placeholder="企业名称" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'brandUscc',
                slot: <Input placeholder="企业社会信用代码" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'connectUname',
                slot: <Input placeholder="联系人姓名" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'connectMobileNo',
                slot: <Input placeholder="联系人电话" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'connectWechatId',
                slot: <Input placeholder="联系人微信ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'brandDesc',
                slot: <Input placeholder="品牌简介" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'companyDesc',
                slot: <Input placeholder="企业简介" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'brandDetail',
                slot: <Input placeholder="品牌详情" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'companyDetail',
                slot: <Input placeholder="企业详情" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'vaildDate',
                slot: <Input placeholder="合约生效日" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'expiredDate',
                slot: <Input placeholder="合约失效日期" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'brandFee',
                slot: <Input placeholder="品牌加盟费" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'brandMargin',
                slot: <Input placeholder="押金/保证金" allowClear />,
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
                slot: <Input placeholder="用户状态" allowClear />,
                rules: [],
                initialValue: ''
            }
                                                                        ,{
                    key:'brandCommonDesc',
                slot: <Input placeholder="产品公共展示信息" allowClear />,
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
                        title: '品牌编号',
            key: 'brandId',
            dataIndex: 'brandId',
            }
            
                                                ,{
                        title: '品牌名称',
            key: 'brandName',
            dataIndex: 'brandName',
            }
            
                                                ,{
                        title: '品牌logo路径',
            key: 'brandLogo',
            dataIndex: 'brandLogo',
            }
            
                                                ,{
                        title: '企业名称',
            key: 'companyName',
            dataIndex: 'companyName',
            }
            
                                                ,{
                        title: '企业社会信用代码',
            key: 'brandUscc',
            dataIndex: 'brandUscc',
            }
            
                                                ,{
                        title: '联系人姓名',
            key: 'connectUname',
            dataIndex: 'connectUname',
            }
            
                                                ,{
                        title: '联系人电话',
            key: 'connectMobileNo',
            dataIndex: 'connectMobileNo',
            }
            
                                                ,{
                        title: '联系人微信ID',
            key: 'connectWechatId',
            dataIndex: 'connectWechatId',
            }
            
                                                ,{
                        title: '品牌简介',
            key: 'brandDesc',
            dataIndex: 'brandDesc',
            }
            
                                                ,{
                        title: '企业简介',
            key: 'companyDesc',
            dataIndex: 'companyDesc',
            }
            
                                                ,{
                        title: '品牌详情',
            key: 'brandDetail',
            dataIndex: 'brandDetail',
            }
            
                                                ,{
                        title: '企业详情',
            key: 'companyDetail',
            dataIndex: 'companyDetail',
            }
            
                                                ,{
                        title: '合约生效日',
            key: 'vaildDate',
            dataIndex: 'vaildDate',
            }
            
                                                ,{
                        title: '合约失效日期',
            key: 'expiredDate',
            dataIndex: 'expiredDate',
            }
            
                                                ,{
                        title: '品牌加盟费',
            key: 'brandFee',
            dataIndex: 'brandFee',
            }
            
                                                ,{
                        title: '押金/保证金',
            key: 'brandMargin',
            dataIndex: 'brandMargin',
            }
            
                                                ,{
                        title: '备注',
            key: 'remark',
            dataIndex: 'remark',
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
                        title: '产品公共展示信息',
            key: 'brandCommonDesc',
            dataIndex: 'brandCommonDesc',
            }
            
            ]
    return (
        <>
            <MyPage
                apiFun={crmBrandInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={crmBrandInfoApi.add}
                editApiFun={crmBrandInfoApi.edit}
                delApiFun={crmBrandInfoApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default CrmBrandInfo
