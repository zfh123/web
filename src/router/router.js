import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'

Vue.use(Router);

function load(component) {
  return () => import(`@/${component}.vue`)
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/empty-layout',
      meta: {},
      component: load('layout/empty-layout'),
      children: [
        {
          path: '/passport/login',
          name: 'passport_login',
          meta: {
            title: '门店登录',
            auth: true
          },
          component: load('pages/passport/login'),
        },
        {
          path: '/passport/register',
          name: 'passport_register',
          meta: {
            title: '门店注册',
            auth: true,
          },
          component: load('pages/passport/register'),
        },
        {
          path: '/permission_denied',
          name: 'permission_denied',
          meta: {title: '没有权限'},
          component: load('pages/permission_denied')
        },
        {
          path: '/ie-warning',
          name: 'ie_warning',
          meta: {title: '浏览器不支持',auth: true},
          component: load('pages/ie-warning/ie-warning')
        }

      ]
    },
    {
      path: '',
      meta: {title: '管理首页'},
      component: load('layout/manage-layout'),
      children: [

        {
          path: '/',
          name: 'manage_default',
          meta: {title: '概览'},
          component: load('pages/default/default'),
        },
        {
          path: 'setting',
          redirect:"/setting/setting",
          meta: {title: '门店设置'},
          component: load('pages/about-blank/about-blank'),
          children:[
            {
              path: '',
              redirect:'setting',
            },
            {
              path: 'setting',
              name: 'manage_setting',
              meta: {title: '基础设置'},
              component: load('pages/setting/setting'),
            },
            {
              path: 'price-tag',
              name: 'manage_setting_price_tag',
              meta: {title: '价签设置'},
              component: load('pages/setting/price-tag')
            },{
              path: 'account',
              name: 'manage_setting_account',
              meta: {title: '账户管理'},
              component: load('pages/setting/account')
            },{
              path: 'logs',
              name: 'manage_setting_logs',
              meta: {title: '操作日志'},
              component: load('pages/setting/logs')
            },
            {
              path: 'screen-ads',
              name: 'manage_setting_ad',
              meta: {title: '副屏广告'},
              component: load('pages/setting/ad')
            },
          ]
        },
        {
          path: '/purchase',
          meta: {title: '供应商管理'},
          component: load('pages/about-blank/about-blank'),
          children:[
            {
              path: '',
              redirect:'vendor',
            },
            {
              path: 'vendor',
              name: 'manage_purchase_vendor',
              meta: {title: '供应商'},
              component: load('pages/purchase/vendor'),
            },
            {
              path: 'invoice',
              meta: {title: '进货单'},
              component: load('pages/about-blank/about-blank'),
              children:[
                {
                  path: '',
                  name: 'manage_purchase_invoice',
                  meta: {title: '列表'},
                  component: load('pages/purchase/invoice'),
                },
                {
                  path: 'add',
                  name: 'manage_purchase_invoice_add',
                  meta: {title: '新增进货单'},
                  component: load('pages/purchase/invoice-add')
                },
              ]
            },

          ]
        },

        {
          path: 'employee',
          redirect:"/employee/list",
          meta: {title: '员工管理'},
          component: load('pages/about-blank/about-blank'),
          children:[
            {
              path: '',
              redirect:'list',
            },
            {
              path: 'list',
              name: 'manage_employee_list',
              meta: {title: '员工列表'},
              component: load('pages/employee/list'),
            },
            {
              path: 'add',
              name: 'manage_employee_add',
              meta: {title: '添加员工'},
              component: load('pages/employee/add'),
            },
            {
              path: 'role',
              name: 'manage_employee_role',
              meta: {title: '角色管理'},
              component: load('pages/employee/role'),
            }
          ]
        },
        {
          path: 'stocks',
          redirect:"/stocks/list",
          meta: {title: '库存管理'},
          component: load('pages/about-blank/about-blank'),
          children:[
            {
              path: '',
              redirect:'list',
            },
            {
              path: 'list',
              name: 'manage_stocks_list',
              meta: {title: '库存查询'},
              component: load('pages/stocks/list'),
            },
            {
              path: 'warning',
              redirect:"/warning/list",
              meta: {title: '库存告警'},
              component: load('pages/about-blank/about-blank'),
              children:[
                {
                  path: '',
                  redirect:'list',
                },
                {
                  path: 'list',
                  name: 'manage_stocks_warning_list',
                  meta: {title: '告警商品'},
                  component: load('pages/stocks/warning'),
                },
                {
                  path: 'order',
                  name: 'manage_stocks_warning_order',
                  meta: {title: '一键进货单'},
                  component: load('pages/stocks/warning-order'),
                },
              ]
            },
            {
              path: 'change-history',
              redirect:"/change-history/list",
              meta: {title: '库存明细'},
              component: load('pages/about-blank/about-blank'),
              children:[
                {
                  path: '',
                  redirect:'list',
                },
                {
                  path: 'list',
                  name: 'manage_stocks_change_history',
                  meta: {title: '明细列表'},
                  component: load('pages/stocks/change-history'),
                },
                {
                  path: 'goods',
                  name: 'manage_stocks_change_history_goods',
                  meta: {title: '商品明细'},
                  component: load('pages/stocks/change-history-goods'),
                },
              ]
            },
            {
              path: 'inventory',
              redirect:'/inventory/list',
              meta: {title: '商品盘点'},
              component: load('pages/about-blank/about-blank'),
              children:[
                {
                  path:'',
                  redirect:'list',
                },
                {
                  path: 'list',
                  name: 'manage_stocks_inventory',
                  meta: {title: '盘点历史'},
                  component: load('pages/stocks/inventory'),
                },
                {
                  path: 'detail',
                  name: 'manage_stocks_inventory_detail',
                  meta: {title: '盘点详情'},
                  component: load('pages/stocks/inventory-detail'),
                },
              ]
            },
            {
              path: 'damaged',
              meta: {title: '商品报损'},
              component: load('pages/about-blank/about-blank'),
              children:[
                {
                  path:'',
                  redirect:'list',
                },
                {
                  path: 'list',
                  name: 'manage_stocks_damaged',
                  meta: {title: '报损记录'},
                  component: load('pages/stocks/damaged'),
                },
                {
                  path: 'goods',
                  name: 'manage_stocks_damaged_goods',
                  meta: {title: '报损统计'},
                  component: load('pages/stocks/damaged-goods'),
                }
              ]
            }
          ]
        },
        {
          path: '/goods',
          meta: {title: '商品管理'},
          component: load('pages/about-blank/about-blank'),
          children:[
            {
              path:'',
              redirect:'list',
            },
            {
              path: 'list',
              name: 'manage_goods_list',
              meta: {title: '商品列表'},
              component: load('pages/goods/list'),
            },
            {
              path: 'add',
              name: 'manage_goods_add',
              meta: {title: '新增商品'},
              component: load('pages/goods/add'),
            },
            {
              path: 'catalogue',
              name: 'manage_goods_catalogue',
              meta: {title: '商品分类'},
              component: load('pages/goods/catalogue'),
            },
            {
              path: 'import',
              name: 'manage_goods_import',
              meta: {title: '批量导入'},
              component: load('pages/goods/import'),
            },
            {
              path: 'unit',
              name: 'manage_goods_unit',
              meta: {title: '包装单位'},
              component: load('pages/goods/unit'),
            },
          ]
        },




        {
          path: '/member',
          meta: {title: '会员管理'},
          component: load('pages/about-blank/about-blank'),
          children:[
            {
              path:'',
              redirect:'list',
            },
            {
              path: 'list',
              name: 'manage_member_list',
              meta: {title: '会员列表'},
              component: load('pages/member/list'),
            },
            {
              path: 'add',
              name: 'manage_member_add',
              meta: {title: '新增会员'},
              component: load('pages/member/add'),
            },
            {
              path: 'level',
              name: 'manage_member_level',
              meta: {title: '会员等级'},
              component: load('pages/member/level'),
            },
            {
              path: 'statistics',
              meta: {title: '会员报表'},
              component: load('pages/about-blank/about-blank'),
              children:[
                {
                  path: '',
                  name: 'manage_member_statistics',
                  meta: {title: '概览'},
                  component: load('pages/member/statistics'),
                },
                {
                  path: 'recharge',
                  name: 'manage_member_statistics_recharge',
                  meta: {title: '充值明细'},
                  component: load('pages/member/statistics-recharge-detail'),
                },
                {
                  path: 'consume',
                  name: 'manage_member_statistics_consume',
                  meta: {title: '消费明细'},
                  component: load('pages/member/statistics-consume-detail'),
                },
                {
                  path: 'statistics',
                  name: 'manage_member_statistics_integral',
                  meta: {title: '积分消费明细'},
                  component: load('pages/member/statistics-integral-detail'),
                },
              ]
            },

          ]
        },


        {
          path: '/online-store',
          redirect:'/online-store/order',
          meta: {title: '云店管理'},
          component: load('pages/about-blank/about-blank'),
          children:[
            {
              path: 'order',
              name: 'manage_online_store_order',
              meta: {title: '云店订单'},
              component: load('pages/online-store/order'),
            },{
              path: 'refund',
              name: 'manage_online_store_refund',
              meta: {title: '退款记录'},
              component: load('pages/online-store/refund'),
            },
            {
              path: 'setting',
              name: 'manage_online_store_setting',
              meta: {title: '云店设置'},
              component: load('pages/online-store/setting'),
            },
            {
              path: 'goods',
              redirect:'/online-store/goods',
              meta: {title: '商品管理'},
              component: load('pages/about-blank/about-blank'),
              children:[
                {
                  path: '',
                  name: 'manage_online_store_goods',
                  meta: {title: '商品列表'},
                  component: load('pages/online-store/goods'),
                },
                {
                  path: 'import',
                  name: 'manage_online_store_goods_import',
                  meta: {title: '添加商品'},
                  component: load('pages/online-store/import'),
                }
              ]
            },
            {
              path: 'catalogue',
              name: 'manage_online_store_catalogue',
              meta: {title: '商品分类'},
              component: load('pages/online-store/catalogue'),
            }
          ]
        },

      ]
    },
     {
       path:'*',
       name:'404',
       meta: {auth: true},
       component: load('pages/404/404')
     }
  ]
});
router.beforeEach(({meta, path,fullPath}, from, next, d, e) => {
  let {auth = false} = meta;
  let isLogin = Boolean(store.state.user.token);// true用户已登录， false用户未登录
  if (!auth && !isLogin && path !== '/passport/login') {
     next({path: '/passport/login',query: { redirect: fullPath }})
    return
  }
  next()
});
export default router
