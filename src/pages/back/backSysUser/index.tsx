import React, { FC, useEffect, useState } from 'react'
import { Input, } from 'antd'
import backSysUserApi from '@/api/back/backSysUser';
import MySelect from '@/components/common/mySelect';
import BackSysRoles from "@/api/back/backSysRoles";
import { error } from 'console';
import ViewPage from '@/components/common/viewPage';
import { ButtonInfo } from '@/app_models/user';

const BackSysUser: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [selectData, setSelectData] = useState<CommonObjectType<string>[]>([]);
    useEffect(() => {
        BackSysRoles.queryByPage({}).then((res) => {
            var list = res.list;
            if (Array.isArray(list)) {
                setSelectData(list.map((obj: any) => ({
                    name: obj.roleName,
                    key: obj.roleId
                })));
            }
            setDataLoaded(true); // 数据加载完成时设置dataLoaded为true
        }).catch(err => {
            console.log(err);
        })
    }, [])
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'userId',
            slot: <Input placeholder="用户ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'roleId',
            slot: dataLoaded ? ( // 当数据加载完成时有条件地渲染MySelect
                <MySelect
                    placeholder="角色"
                    data={selectData}
                    defaultValue={selectData[0].roleId}
                    allowClear={true}
                />
            ) : null,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'userName',
            slot: <Input placeholder="姓名" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'mobileNo',
            slot: <Input placeholder="手机号" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [
        {
            title: '用户ID',
            key: 'userId',
            dataIndex: 'userId',
        },
        {
            title: '角色ID',
            key: 'roleId',
            dataIndex: 'roleId',
            editType: "select",
            render: selectData.find(item => item.name === item.value)?.name,
            data: selectData,
        }

        , {
            title: '姓名',
            key: 'userName',
            dataIndex: 'userName',
        }

        , {
            title: '手机号',
            key: 'mobileNo',
            dataIndex: 'mobileNo',
        }

        , {
            title: '邮箱地址',
            key: 'email',
            dataIndex: 'email',
        }

        , {
            title: '证件号',
            key: 'idNo',
            dataIndex: 'idNo',
            tableShow: false,
        }

        , {
            title: '证件类型',
            key: 'idType',
            dataIndex: 'idType',
            tableShow: false,
        }

        , {
            title: '用户备注',
            key: 'remark',
            dataIndex: 'remark',
        }

        , {
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }
    ]

    const rowBtns: ButtonInfo[] = [{
        title: "重置密码",
        key: "reset",
        func: backSysUserApi.deleteById
    }]
    return (
        <>
            <ViewPage
                apiFun={backSysUserApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={backSysUserApi.add}
                editApiFun={backSysUserApi.edit}
                delApiFun={backSysUserApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default BackSysUser
