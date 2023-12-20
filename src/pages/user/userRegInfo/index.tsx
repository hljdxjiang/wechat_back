import React, { useRef, FC, useState } from 'react'
import { Button, Input, } from 'antd'
import { isAuthorized } from '@/assets/js/publicFunc'
import userRegInfoApi from '@/api/user/userRegInfo'
import { onItemChange } from "@/utils/tableCommon";
import MyPage from '@/components/common/myPage';

const UserRegInfo: FC = () => {
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
                    key:'idType',
                slot: <Input placeholder="证件类型" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'idNo',
                slot: <Input placeholder="证件号" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'validDate',
                slot: <Input placeholder="证件生效日期" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'expiredDate',
                slot: <Input placeholder="证件失效日期" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'issueAuthority',
                slot: <Input placeholder="发证机构" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'userName',
                slot: <Input placeholder="姓名" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'gender',
                slot: <Input placeholder="性别" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'birthDate',
                slot: <Input placeholder="生日" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'email',
                slot: <Input placeholder="邮箱" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'tranPwd',
                slot: <Input placeholder="密码" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'saverId',
                slot: <Input placeholder="客户经理" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'sourcePlatform',
                slot: <Input placeholder="渠道编号" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'referee',
                slot: <Input placeholder="推荐人" allowClear />,
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
                    key:'occupation',
                slot: <Input placeholder="职业" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'regSource',
                slot: <Input placeholder="注册来源" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'idPathFace',
                slot: <Input placeholder="证件照片地址正面id" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'idPathEmblem',
                slot: <Input placeholder="证件照片地址背面id" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'idPathHand',
                slot: <Input placeholder="证件照片地址手持id" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'distCode',
                slot: <Input placeholder="开户地区编码" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'userIp',
                slot: <Input placeholder="用户IP" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'setTranPwdTime',
                slot: <Input placeholder="交易密码设置时间" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'deviceId',
                slot: <Input placeholder="最后登录设备ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'loginPwd',
                slot: <Input placeholder="登录密码" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'gesturePwd',
                slot: <Input placeholder="手势密码" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'faceIdPwd',
                slot: <Input placeholder="人脸/指纹密码" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'userLabel',
                slot: <Input placeholder="用户标签ID" allowClear />,
                rules: [],
                initialValue: ''
            }
                                ,{
                    key:'status',
                slot: <Input placeholder="用户状态" allowClear />,
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
                        title: '证件类型',
            key: 'idType',
            dataIndex: 'idType',
            }
            
                                                ,{
                        title: '证件号',
            key: 'idNo',
            dataIndex: 'idNo',
            }
            
                                                ,{
                        title: '证件生效日期',
            key: 'validDate',
            dataIndex: 'validDate',
            }
            
                                                ,{
                        title: '证件失效日期',
            key: 'expiredDate',
            dataIndex: 'expiredDate',
            }
            
                                                ,{
                        title: '发证机构',
            key: 'issueAuthority',
            dataIndex: 'issueAuthority',
            }
            
                                                ,{
                        title: '姓名',
            key: 'userName',
            dataIndex: 'userName',
            }
            
                                                ,{
                        title: '性别',
            key: 'gender',
            dataIndex: 'gender',
            }
            
                                                ,{
                        title: '生日',
            key: 'birthDate',
            dataIndex: 'birthDate',
            }
            
                                                ,{
                        title: '邮箱',
            key: 'email',
            dataIndex: 'email',
            }
            
                                                ,{
                        title: '密码',
            key: 'tranPwd',
            dataIndex: 'tranPwd',
            }
            
                                                ,{
                        title: '客户经理',
            key: 'saverId',
            dataIndex: 'saverId',
            }
            
                                                ,{
                        title: '渠道编号',
            key: 'sourcePlatform',
            dataIndex: 'sourcePlatform',
            }
            
                                                ,{
                        title: '推荐人',
            key: 'referee',
            dataIndex: 'referee',
            }
            
                                                ,{
                        title: '地址',
            key: 'address',
            dataIndex: 'address',
            }
            
                                                ,{
                        title: '职业',
            key: 'occupation',
            dataIndex: 'occupation',
            }
            
                                                ,{
                        title: '注册来源',
            key: 'regSource',
            dataIndex: 'regSource',
            }
            
                                                ,{
                        title: '证件照片地址正面id',
            key: 'idPathFace',
            dataIndex: 'idPathFace',
            }
            
                                                ,{
                        title: '证件照片地址背面id',
            key: 'idPathEmblem',
            dataIndex: 'idPathEmblem',
            }
            
                                                ,{
                        title: '证件照片地址手持id',
            key: 'idPathHand',
            dataIndex: 'idPathHand',
            }
            
                                                ,{
                        title: '开户地区编码',
            key: 'distCode',
            dataIndex: 'distCode',
            }
            
                                                ,{
                        title: '用户IP',
            key: 'userIp',
            dataIndex: 'userIp',
            }
            
                                                ,{
                        title: '交易密码设置时间',
            key: 'setTranPwdTime',
            dataIndex: 'setTranPwdTime',
            }
            
                                                ,{
                        title: '最后登录设备ID',
            key: 'deviceId',
            dataIndex: 'deviceId',
            }
            
                                                ,{
                        title: '登录密码',
            key: 'loginPwd',
            dataIndex: 'loginPwd',
            }
            
                                                ,{
                        title: '手势密码',
            key: 'gesturePwd',
            dataIndex: 'gesturePwd',
            }
            
                                                ,{
                        title: '人脸/指纹密码',
            key: 'faceIdPwd',
            dataIndex: 'faceIdPwd',
            }
            
                                                ,{
                        title: '用户标签ID',
            key: 'userLabel',
            dataIndex: 'userLabel',
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
            
            ]
    return (
        <>
            <MyPage
                apiFun={userRegInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={userRegInfoApi.add}
                editApiFun={userRegInfoApi.edit}
                delApiFun={userRegInfoApi.deleteById}
                showOpeation={false}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default UserRegInfo
