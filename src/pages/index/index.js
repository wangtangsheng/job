import React from 'react'
import { Router, Route, Switch } from 'react-router';
import history from 'history'
import css from './index.less';
import dynamic from 'dva/dynamic'
import { Layout, Col, Row } from 'antd'
const { Header, Footer, Content } = Layout;

export default function ({ history, app }) {
    const dynamicComponents = {
        demo: dynamic({
            app,
            models: () => [import('../demo/model.js')],
            component: () => import('../demo/index.js')
        }),
        home: dynamic({
            app,
            models: () => [import('../home/model.js')],
            component: () => import('../home/index.js')
        })
    }
    return (
        <React.Fragment>
            <Layout className={css.layout}>
                <Header className={css.layout_header}>
                    <Row>
                        <Col span={6}>
                            <a href="#/home"><img className={css.logo} src={'https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png'} alt='阿里巴巴社招官网' /></a>
                            <span className={css.line}></span>
                            <span className={css.text}>社招官网</span>
                        </Col>
                        <Col span={12} className={css.header_items}>
                            <a href='#/home' className={`${css.header_item} ${css.active}`}>首页</a>
                            <a href='#/home' className={`${css.header_item}`}>社会招聘</a>
                            <a href='#/home' className={`${css.header_item} `}>校园招聘</a>
                            <a href='#/home' className={`${css.header_item}`}>了解阿里</a>
                            <a href='#/home' className={`${css.header_item}`}>个人中心</a>
                        </Col>
                        <Col span={6} className={css.login_box}>
                            <span className={css.welcome}>欢迎来到阿里巴巴集团招聘！</span>
                            <a href='#/login' className={css.login}>登录</a>
                            <span className={css.login_line}>  | </span>
                            <a href='#/login' className={css.register}>注册</a>
                        </Col>
                    </Row>
                </Header>
                <Content>
                    <Router history={history}>
                        <Switch>
                          
                            <Route exact component={dynamicComponents.demo} path='/demo'></Route>
                            <Route  component={dynamicComponents.home}></Route>
                        </Switch>
                    </Router>
                </Content>
                <Footer className={css.layout_footer}>阿里巴巴集团 Copyright ©1999-2019 版权所有</Footer>
            </Layout>


        </React.Fragment>
    )
}