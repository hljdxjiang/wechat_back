import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import mallUserCouponInfoApi from '@/api/mall/mallUserCouponInfo'
import ModelPage from '@/components/common/modelPage';

const MallUserCouponInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'userId',
            slot: <Input placeholder="用户ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'userCouponId',
            slot: <Input placeholder="用户优惠券ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'couponId',
            slot: <Input placeholder="优惠券编号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'couponType',
            slot: <Input placeholder="优惠券类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'couponMethod',
            slot: <Input placeholder="优惠方式" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'couponAmount',
            slot: <Input placeholder="优惠比例" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'useVaildDate',
            slot: <Input placeholder="开始使用时间" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'useExpireDate',
            slot: <Input placeholder="使用时效时间" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'status',
            slot: <Input placeholder="状态0可用1过期9使用" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'relateType',
            slot: <Input placeholder="使用关联类型" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'relateId',
            slot: <Input placeholder="关联订单ID" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'access',
            slot: <Input placeholder="优惠券获取途径" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '用户ID',
            key: 'userId',
            dataIndex: 'userId',
        }

        , {
            title: '用户优惠券ID',
            key: 'userCouponId',
            dataIndex: 'userCouponId',
        }

        , {
            title: '优惠券编号',
            key: 'couponId',
            dataIndex: 'couponId',
        }

        , {
            title: '优惠券类型',
            key: 'couponType',
            dataIndex: 'couponType',
        }

        , {
            title: '优惠方式',
            key: 'couponMethod',
            dataIndex: 'couponMethod',
        }

        , {
            title: '优惠比例',
            key: 'couponAmount',
            dataIndex: 'couponAmount',
        }

        , {
            title: '开始使用时间',
            key: 'useVaildDate',
            dataIndex: 'useVaildDate',
        }

        , {
            title: '使用时效时间',
            key: 'useExpireDate',
            dataIndex: 'useExpireDate',
        }

        , {
            title: '状态0可用1过期9使用',
            key: 'status',
            dataIndex: 'status',
        }


        , {
            title: '使用关联类型',
            key: 'relateType',
            dataIndex: 'relateType',
        }

        , {
            title: '关联订单ID',
            key: 'relateId',
            dataIndex: 'relateId',
        }

        , {
            title: '优惠券获取途径',
            key: 'access',
            dataIndex: 'access',
        }

    ]
    return (
        <>
            <ModelPage
                apiFun={mallUserCouponInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallUserCouponInfoApi.add}
                editApiFun={mallUserCouponInfoApi.edit}
                delApiFun={mallUserCouponInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallUserCouponInfo
