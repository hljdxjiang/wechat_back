import {
    FireFilled,
    HomeOutlined,
    IeCircleFilled,
    SettingFilled,
    SketchCircleFilled,
    UserOutlined,
    VideoCameraFilled,
    WechatFilled
} from '@ant-design/icons'
import Home from '@/pages/home'
import { MenuRoute } from '@/route/types'
import TParamConfig from '@/pages/param/tParamConfig'
import TUserInfo from '@/pages/user/tUserInfo'
import CrmProdInfo from '@/pages/crm/crmProdInfo'
import SysFlowItems from '@/pages/sys/sysFlowItems'
import BackImgInfo from '@/pages/back/backImgInfo'
import SysPageFlowInfo from '@/pages/sys/sysPageFlowInfo'
import SysFlowInfo from '@/pages/sys/sysFlowInfo'
import SysBlacklist from '@/pages/sys/sysBlacklist'
import SysResourceInfo from '@/pages/sys/sysResourceInfo'
import BbsCourseResource from '@/pages/bbs/bbsCourseResource'
import BbsCourseDetail from '@/pages/bbs/bbsCourseDetail'
import BbsCourseInfo from '@/pages/bbs/bbsCourseInfo'
import UserCollectInfo from '@/pages/user/userCollectInfo'
import UserFeedbackInfo from '@/pages/user/userFeedbackInfo'
import UserCommentInfo from '@/pages/user/userCommentInfo'
import SysTenantToken from '@/pages/sys/sysTenantToken'
import SysTenantInfo from '@/pages/sys/sysTenantInfo'
import WechatTemplateInfo from '@/pages/wechat/wechatTemplateInfo'
import UserAddrInfo from '@/pages/user/userAddrInfo'
import MallSaleAddr from '@/pages/mall/mallSaleAddr'
import MallCardInfo from '@/pages/mall/mallCardInfo'
import MallLotteryWinner from '@/pages/mall/mallLotteryWinner'
import CrmSalePayInfo from '@/pages/crm/crmSalePayInfo'
import MallLotteryUser from '@/pages/mall/mallLotteryUser'
import MallLottery from '@/pages/mall/mallLottery'
import MallLotteryPrize from '@/pages/mall/mallLotteryPrize'
import MallUserCouponInfo from '@/pages/mall/mallUserCouponInfo'
import UserWinningRecord from '@/pages/user/userWinningRecord'
import MallLotteryCondition from '@/pages/mall/mallLotteryCondition'
import MallActivityCondition from '@/pages/mall/mallActivityCondition'
import MallActivityUser from '@/pages/mall/mallActivityUser'
import MallActivity from '@/pages/mall/mallActivity'
import UserPropertyDetail from '@/pages/user/userPropertyDetail'
import UserLocationRecord from '@/pages/user/userLocationRecord'
import UserProperty from '@/pages/user/userProperty'
import SysUserLabels from '@/pages/sys/sysUserLabels'
import UserRegInfo from '@/pages/user/userRegInfo'
import WechatMenusDetail from '@/pages/wechat/wechatMenusDetail'
import WechatMenusItem from '@/pages/wechat/wechatMenusItem'
import WechatMenusMatchrule from '@/pages/wechat/wechatMenusMatchrule'
import WechatMenus from '@/pages/wechat/wechatMenus'
import WechatUser from '@/pages/wechat/wechatUser'
import WechatMinipUser from '@/pages/wechat/wechatMinipUser'
import UserOperaRecord from '@/pages/user/userOperaRecord'
import SysParamConfig from '@/pages/sys/sysParamConfig'
import CrmReferrerInfo from '@/pages/crm/crmReferrerInfo'
import CrmProdType from '@/pages/crm/crmProdType'
import CrmProdGroup from '@/pages/crm/crmProdGroup'
import CrmProdDetail from '@/pages/crm/crmProdDetail'
import BackSysUser from '@/pages/back/backSysUser'
import BackOperaRecord from '@/pages/back/backOperaRecord'
import BbsArticleInfo from '@/pages/bbs/bbsArticleInfo'
import BbsColumnInfo from '@/pages/bbs/bbsColumnInfo'
import BbsCommentInfo from '@/pages/bbs/bbsCommentInfo'
import SysItemInfo from '@/pages/sys/sysItemInfo'
import SysPageInfo from '@/pages/sys/sysPageInfo'
import SysPageTypeInfo from '@/pages/sys/sysPageTypeInfo'
import BackUserLoginRecord from '@/pages/back/backUserLoginRecord'
import CrmBrandInfo from '@/pages/crm/crmBrandInfo'
import CrmSaleRecord from '@/pages/crm/crmSaleRecord'
import WechatSubscribeInfo from '@/pages/wechat/wechatSubscribeInfo'
import MallCouponRule from '@/pages/mall/mallCouponRule'
import MallCouponInfo from '@/pages/mall/mallCouponInfo'
import CrmSaleDetail from '@/pages/crm/crmSaleDetail'
import CrmPurchesRecord from '@/pages/crm/crmPurchesRecord'
import CrmPurchesDetail from '@/pages/crm/crmPurchesDetail'
import BackSysRoles from '@/pages/back/backSysRoles'
import BackSysDict from '@/pages/back/backSysDict'
import BackRuleControl from '@/pages/back/backRuleControl'

/**
 * path 跳转的路径
 * component 对应路径显示的组件
 * exact 匹配规则，true的时候则精确匹配。
 */
const preDefinedRoutes: MenuRoute[] = [
    {
        path: '/',
        name: '首页',
        exact: true,
        key: 'home',
        icon: HomeOutlined,
        component: Home
    }, {
        path: '/user',
        name: '用户权限',
        key: 'user',
        type: 'subMenu',
        icon: UserOutlined,
        routes: [
            {
                path: '/user/list',
                name: '用户列表',
                exact: true,
                key: 'user:list',
                component: TUserInfo
            }, {
                path: '/user/sysroles',
                name: '角色信息表',
                exact: true,
                key: 'back:sysroles',
                component: BackSysRoles
            },
        ]
    },
    // {
    //   path: '/workspace',
    //   name: '工作台',
    //   exact: true,
    //   key: 'workspace',
    //   component: Workspace,
    //   icon: DashboardOutlined
    //   // icon: () =>
    //   //   React.createElement(Icon, { icon: 'arcticons:syska-smart-home' })
    // },
    {
        path: '/others',
        name: '参数',
        key: 'hotel',
        type: 'subMenu',
        icon: UserOutlined,
        routes: [
            {
                path: '/sys/blacklist',
                name: '黑名单表',
                exact: true,
                key: 'sys:blacklist',
                component: SysBlacklist
            },
            {
                path: '/user/collectinfo',
                name: '用户收藏表',
                exact: true,
                key: 'user:collectinfo',
                component: UserCollectInfo
            },
            {
                path: '/user/feedbackinfo',
                name: '用户反馈信息表',
                exact: true,
                key: 'user:feedbackinfo',
                component: UserFeedbackInfo
            },
            {
                path: '/user/commentinfo',
                name: '客户信息表',
                exact: true,
                key: 'user:commentinfo',
                component: UserCommentInfo
            },
            {
                path: '/sys/tenanttoken',
                name: '企业token信息表',
                exact: true,
                key: 'sys:tenanttoken',
                component: SysTenantToken
            },
            {
                path: '/sys/tenantinfo',
                name: '租户信息表',
                exact: true,
                key: 'sys:tenantinfo',
                component: SysTenantInfo
            },

            {
                path: '/user/addrinfo',
                name: '客户信息表',
                exact: true,
                key: 'user:addrinfo',
                component: UserAddrInfo
            },
            {
                path: '/mall/saleaddr',
                name: '订单地址信息表',
                exact: true,
                key: 'mall:saleaddr',
                component: MallSaleAddr
            },
            {
                path: '/user/propertydetail',
                name: '用户资产记录表',
                exact: true,
                key: 'user:propertydetail',
                component: UserPropertyDetail
            },
            {
                path: '/user/locationrecord',
                name: '用户地理位置记录表',
                exact: true,
                key: 'user:locationrecord',
                component: UserLocationRecord
            },
            {
                path: '/user/property',
                name: '用户资产信息表',
                exact: true,
                key: 'user:property',
                component: UserProperty
            },
            {
                path: '/sys/userlabels',
                name: '客户信息表',
                exact: true,
                key: 'sys:userlabels',
                component: SysUserLabels
            },
            {
                path: '/user/reginfo',
                name: '客户信息表',
                exact: true,
                key: 'user:reginfo',
                component: UserRegInfo
            },
            {
                path: '/user/operarecord',
                name: '用户操作历史表',
                exact: true,
                key: 'user:operarecord',
                component: UserOperaRecord
            },

            {
                path: '/crm/referrerinfo',
                name: '推荐人信息表',
                exact: true,
                key: 'crm:referrerinfo',
                component: CrmReferrerInfo
            },
            {
                path: '/back/sysuser',
                name: '后管用户表',
                exact: true,
                key: 'back:sysuser',
                component: BackSysUser
            },
            {
                path: '/back/operarecord',
                name: '后管操作记录表',
                exact: true,
                key: 'back:operarecord',
                component: BackOperaRecord
            },
            {
                path: '/bbs/articleinfo',
                name: '文章记录表',
                exact: true,
                key: 'bbs:articleinfo',
                component: BbsArticleInfo
            },
            {
                path: '/bbs/columninfo',
                name: '文章栏目信息表',
                exact: true,
                key: 'bbs:columninfo',
                component: BbsColumnInfo
            },

            {
                path: '/sys/pagetype',
                name: '类型配置表',
                exact: true,
                key: 'sys:pagetype',
                component: SysPageTypeInfo
            },
            {
                path: '/back/userlogin',
                name: '用户登录历史表',
                exact: true,
                key: 'back:userlogin',
                component: BackUserLoginRecord
            },
            {
                path: '/wechat/subscribeinfo',
                name: '用户订阅信息表',
                exact: true,
                key: 'wechat:subscribeinfo',
                component: WechatSubscribeInfo
            },
        ]
    }
    , {
        path: '/config',
        name: '系统配置',
        key: 'config',
        type: 'subMenu',
        icon: SettingFilled,
        routes: [
            {
                path: '/config/imginfo',
                name: '系统图片配置表',
                exact: true,
                key: 'back:imginfo',
                component: BackImgInfo
            }, {
                path: '/config/paramConfig',
                name: '参数配置',
                exact: true,
                key: 'config.param',
                //hideInMenu: true,
                component: TParamConfig
            },
            {
                path: '/back/sysdict',
                name: '字典表',
                exact: true,
                key: 'back:sysdict',
                component: BackSysDict
            }, {
                path: '/back/rulecontrol',
                name: '开关控制表',
                exact: true,
                key: 'back:rulecontrol',
                component: BackRuleControl
            }, {
                path: '/sys/resourceinfo',
                name: '资源信息表',
                exact: true,
                key: 'sys:resourceinfo',
                component: SysResourceInfo
            },
        ]
    },
    {
        path: '/webPage',
        name: '页面配置',
        key: 'webPage',
        type: 'subMenu',
        icon: IeCircleFilled,
        routes: [
            {
                path: '/sys/flowitems',
                name: '楼层要素表',
                exact: true,
                key: 'sys:flowitems',
                component: SysFlowItems
            },
            {
                path: '/sys/pageflow',
                name: '页面楼层表',
                exact: true,
                key: 'sys:pageflow',
                component: SysPageFlowInfo
            },
            {
                path: '/sys/flowinfo',
                name: '楼层信息表',
                exact: true,
                key: 'sys:flowinfo',
                component: SysFlowInfo
            }, {
                path: '/sys/iteminfo',
                name: '楼层要素表',
                exact: true,
                key: 'sys:iteminfo',
                component: SysItemInfo
            },
            {
                path: '/sys/pageinfo',
                name: '页面信息表',
                exact: true,
                key: 'sys:pageinfo',
                component: SysPageInfo
            },
        ]
    },
    {
        path: '/activity',
        name: '活动信息',
        key: 'activity',
        type: 'subMenu',
        icon: FireFilled,
        routes: [
            {
                path: '/user/winningrecord',
                name: '抽奖获奖记录表',
                exact: true,
                key: 'user:winningrecord',
                component: UserWinningRecord
            },
            {
                path: '/mall/lotterycondition',
                name: '抽奖条件表',
                exact: true,
                key: 'mall:lotterycondition',
                component: MallLotteryCondition
            },
            {
                path: '/mall/activitycondition',
                name: '活动条件表',
                exact: true,
                key: 'mall:activitycondition',
                component: MallActivityCondition
            }, {
                path: '/mall/lotterywinner',
                name: '抽奖中奖记录表',
                exact: true,
                key: 'mall:lotterywinner',
                component: MallLotteryWinner
            },
            {
                path: '/mall/lotteryuser',
                name: '抽奖用户清单表',
                exact: true,
                key: 'mall:lotteryuser',
                component: MallLotteryUser
            },
            {
                path: '/mall/lottery',
                name: '抽奖活动信息表',
                exact: true,
                key: 'mall:lottery',
                component: MallLottery
            },
            {
                path: '/mall/lotteryprize',
                name: '奖品配置表',
                exact: true,
                key: 'mall:lotteryprize',
                component: MallLotteryPrize
            },
            {
                path: '/mall/couponrule',
                name: '优惠券使用规则控制',
                exact: true,
                key: 'mall:couponrule',
                component: MallCouponRule
            },
            {
                path: '/mall/couponinfo',
                name: '优惠券信息表',
                exact: true,
                key: 'mall:couponinfo',
                component: MallCouponInfo
            },
            {
                path: '/mall/activityuser',
                name: '活动参与用户清单表',
                exact: true,
                key: 'mall:activityuser',
                component: MallActivityUser
            },
            {
                path: '/mall/activity',
                name: '活动信息表',
                exact: true,
                key: 'mall:activity',
                component: MallActivity
            }, {
                path: '/mall/cardinfo',
                name: '卡券信息表',
                exact: true,
                key: 'mall:cardinfo',
                component: MallCardInfo
            },

            {
                path: '/mall/usercoupon',
                name: '优惠券领取信息表',
                exact: true,
                key: 'mall:usercoupon',
                component: MallUserCouponInfo
            },
        ]
    },
    {
        path: '/crm',
        name: '商品管理',
        key: 'crm',
        type: 'subMenu',
        icon: SketchCircleFilled,
        routes: [
            {
                path: '/crm/brandinfo',
                name: '品牌信息表',
                exact: true,
                key: 'crm:brandinfo',
                component: CrmBrandInfo
            },
            {
                path: '/crm/salerecord',
                name: '销售记录表',
                exact: true,
                key: 'crm:salerecord',
                component: CrmSaleRecord
            }, {
                path: '/crm/prodtype',
                name: '产品类型配置表',
                exact: true,
                key: 'crm:prodtype',
                component: CrmProdType
            },
            {
                path: '/crm/prodgroup',
                name: '产品分组表',
                exact: true,
                key: 'crm:prodgroup',
                component: CrmProdGroup
            },
            {
                path: '/crm/proddetail',
                name: '产品详情表',
                exact: true,
                key: 'crm:proddetail',
                component: CrmProdDetail
            },
            {
                path: '/crm/prodinfo',
                name: '产品信息表',
                exact: true,
                key: 'crm:prodinfo',
                component: CrmProdInfo
            }, {
                path: '/bbs/commentinfo',
                name: '评论记录表',
                exact: true,
                key: 'bbs:commentinfo',
                component: BbsCommentInfo
            },
            {
                path: '/crm/salepay',
                name: '销售支付记录表',
                exact: true,
                key: 'crm:salepay',
                component: CrmSalePayInfo
            },
            {
                path: '/crm/saledetail',
                name: '销售记录表',
                exact: true,
                key: 'crm:saledetail',
                component: CrmSaleDetail
            },
            {
                path: '/crm/purchesrecord',
                name: '进货记录表',
                exact: true,
                key: 'crm:purchesrecord',
                component: CrmPurchesRecord
            },
            {
                path: '/crm/purchesdetail',
                name: '进货详情表',
                exact: true,
                key: 'crm:purchesdetail',
                component: CrmPurchesDetail
            },
        ]
    },
    {
        path: '/wechat',
        name: '公众号配置',
        key: 'wechat',
        type: 'subMenu',
        icon: WechatFilled,
        iconfont: 'icon-xiaoshouzongjian',
        routes: [
            {
                path: '/wechat/menusdetail',
                name: '微信菜单详情',
                exact: true,
                key: 'wechat:menusdetail',
                component: WechatMenusDetail
            },
            {
                path: '/wechat/menusitem',
                name: '微信菜单信息',
                exact: true,
                key: 'wechat:menusitem',
                component: WechatMenusItem
            }, {
                path: '/wechat/templateinfo',
                name: '微信推送模板',
                exact: true,
                key: 'wechat:templateinfo',
                component: WechatTemplateInfo
            }, {
                path: '/wechat/menusmatchrule',
                name: '微信个性化菜单匹配表',
                exact: true,
                key: 'wechat:menusmatchrule',
                component: WechatMenusMatchrule
            },
            {
                path: '/wechat/menus',
                name: '微信菜单表',
                exact: true,
                key: 'wechat:menus',
                component: WechatMenus
            },
            {
                path: '/wechat/user',
                name: '微信用户信息表',
                exact: true,
                key: 'wechat:user',
                component: WechatUser
            },
            {
                path: '/wechat/minipuser',
                name: '小程序用户信息表',
                exact: true,
                key: 'wechat:minipuser',
                component: WechatMinipUser
            },
        ]
    },
    {
        path: '/course',
        name: '课程管理',
        key: 'course',
        type: 'subMenu',
        icon: VideoCameraFilled,
        routes: [
            {
                path: '/bbs/courseresource',
                name: '课程资源信息表',
                exact: true,
                key: 'bbs:courseresource',
                component: BbsCourseResource
            },
            {
                path: '/bbs/coursedetail',
                name: '课程详情表',
                exact: true,
                key: 'bbs:coursedetail',
                component: BbsCourseDetail
            },
            {
                path: '/bbs/courseinfo',
                name: '课程信息表',
                exact: true,
                key: 'bbs:courseinfo',
                component: BbsCourseInfo
            },
        ]
    }

]

export default preDefinedRoutes
