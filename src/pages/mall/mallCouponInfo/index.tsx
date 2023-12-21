import React, { FC, useState } from 'react'
import { Input, } from 'antd'
import mallCouponInfoApi from '@/api/mall/mallCouponInfo'
import MyPage from '@/components/common/myPage';

const MallCouponInfo: FC = () => {
    const [selectRow, setSelectRow] = useState(Object);
    const [selectKeys, setSelectKeys] = useState([]);
    // 搜索栏配置项
    const searchConfigList = [
        {
            key: 'couponId',
            slot: <Input placeholder="优惠券编号" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'couponName',
            slot: <Input placeholder="优惠券名称" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'couponDesc',
            slot: <Input placeholder="优惠券详情" allowClear />,
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
            key: 'controlType',
            slot: <Input placeholder="优惠券控制类型：白名单LOCAL，全部ALL" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'grantType',
            slot: <Input placeholder="发放方式：手动,自动,人工" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'grantScope',
            slot: <Input placeholder="发放范围：ALL,VIP,白名单(LOCAL)" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'vaildDate',
            slot: <Input placeholder="开始领取时间" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'expireDate',
            slot: <Input placeholder="领取失效日期" allowClear />,
            rules: [],
            initialValue: ''
        }
        , {
            key: 'vaildDays',
            slot: <Input placeholder="有效时间范围" allowClear />,
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
            slot: <Input placeholder="用户状态" allowClear />,
            rules: [],
            initialValue: ''
        }
    ]
    const columns = [


        {
            title: '优惠券编号',
            key: 'couponId',
            dataIndex: 'couponId',
        }

        , {
            title: '优惠券名称',
            key: 'couponName',
            dataIndex: 'couponName',
        }

        , {
            title: '优惠券详情',
            key: 'couponDesc',
            dataIndex: 'couponDesc',
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
            title: '优惠券控制类型：白名单LOCAL，全部ALL',
            key: 'controlType',
            dataIndex: 'controlType',
        }

        , {
            title: '发放方式：手动,自动,人工',
            key: 'grantType',
            dataIndex: 'grantType',
        }

        , {
            title: '发放范围：ALL,VIP,白名单(LOCAL)',
            key: 'grantScope',
            dataIndex: 'grantScope',
        }

        , {
            title: '开始领取时间',
            key: 'vaildDate',
            dataIndex: 'vaildDate',
        }

        , {
            title: '领取失效日期',
            key: 'expireDate',
            dataIndex: 'expireDate',
        }

        , {
            title: '有效时间范围',
            key: 'vaildDays',
            dataIndex: 'vaildDays',
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
            title: '用户状态',
            key: 'status',
            dataIndex: 'status',
        }


    ]
    return (
        <>
            <MyPage
                apiFun={mallCouponInfoApi.queryByPage}
                columns={columns}
                permissionPrefix={"user:list"}
                addApiFun={mallCouponInfoApi.add}
                editApiFun={mallCouponInfoApi.edit}
                delApiFun={mallCouponInfoApi.deleteById}
                showOpeation={true}
                searchConfigList={searchConfigList}
            />
        </>
    )
}
export default MallCouponInfo
