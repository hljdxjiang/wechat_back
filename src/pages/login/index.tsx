import React, { useEffect, FC } from 'react'
import { useHistory } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input, Button, message } from 'antd'
import ReactCanvasNest from 'react-canvas-nest'
import './login.less'
import Logo from '@/assets/img/logo.jpg'
import session from '@/api/sys/session'
import { useAppDispatch, useAppSelector } from '@/store/redux-hooks'
import { selectUserInfo, setUserInfo } from '@/store/slicers/userSlice'
import { setTabs } from '@/store/slicers/tabSlice'
import { selectTheme } from '@/store/slicers/appSlice'

const LoginForm: FC = () => {
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(selectUserInfo)
  const theme = useAppSelector(selectTheme)
  const history = useHistory()
  useEffect(() => {
    const { token } = userInfo
    if (token) {
      history.push('/')
      return
    }
    // 重置 tab栏为首页
    dispatch(setTabs(['/']))
  }, [history, dispatch, userInfo])

  // 触发登录方法
  const onFinish = async (values: CommonObjectType<string>) => {
    // 开发环境 mock

    const { username, password } = values

    await session.login({ userId:username, passWD:password }).then((res) => {
      //TODO 以下代码为测试代码，需要从登录接口返回用户具有的所有菜单及权限
      // result.permission.forEach(element => {
      //   result.menus = [...result.menus, { key: element.code, desc: element.name }]
      // });
      dispatch(setUserInfo(res))
      history.push('/')
    }).catch((e)=>{
      const response = (e as any)?.response // Axios异常
      message.error(
        response
          ? `发生错误:${response.data}`
          : `认证服务异常,请联系管理员:${e}`
      )
    })
    // //TODO 以下代码为测试代码，需要从登录接口返回用户具有的所有菜单及权限
    // result.permission.forEach(element => {
    //   result.menus = [...result.menus, { key: element.code, desc: element.name }]
    // });
    // dispatch(setUserInfo(result))
    // history.push('/')
    // 线上环境直接返回信息
    return

  }

  const FormView = (
    <Form
      initialValues={{ username: 'admin', password: '123456' }}
      className="login-form"
      name="login-form"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="用户名" prefix={<UserOutlined />} size="large" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
        extra="用户名：admin 密码：123456"
      >
        <Input.Password
          placeholder="密码"
          prefix={<LockOutlined />}
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Button
          className="login-form-button"
          htmlType="submit"
          size="large"
          type="primary"
        >
          登录
        </Button>
        {/* <OidcLogin loginCallback={() => history.push('/')} /> */}
      </Form.Item>
    </Form>
  )

  const floatColor = theme === 'default' ? '24,144,255' : '110,65,255'
  return (
    <div className="login-layout" id="login-layout">
      <ReactCanvasNest
        config={{
          pointColor: floatColor,
          lineColor: floatColor,
          pointOpacity: 0.6
        }}
        style={{ zIndex: 1 }}
      />
      <div className="logo-box">
        <img alt="" className="logo" src={Logo} />
        <span className="logo-name">后台管理系统</span>
      </div>
      {FormView}
    </div>
  )
}

export default LoginForm
