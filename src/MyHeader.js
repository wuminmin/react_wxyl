import { Carousel, Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
// import Carousel from 'nuka-carousel';
import React from 'react'
import Qs from 'qs'
import axios from 'axios'
import 'antd/dist/antd.css';
import './index.css';
import AppGlobal from './AppGlobal';
import img_header1 from './img_header1.png';
const { SubMenu } = Menu;
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/">
                首页
        </a>
        </Menu.Item>
    </Menu>
);
const menu2 = (
    <Menu style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
        <Menu.Item style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=产品展示&lan_mu=千层石&tittle=默认">
                千层石
        </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=产品展示&lan_mu=假山石料&tittle=默认">
                假山石料
        </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=产品展示&lan_mu=龟纹石&tittle=默认">
                龟纹石
            </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=产品展示&lan_mu=草坪石&tittle=默认">
                草坪石
            </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=产品展示&lan_mu=刻字石&tittle=默认">
                刻字石
            </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=产品展示&lan_mu=景观石&tittle=默认">
                景观石
            </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=产品展示&lan_mu=泰山石&tittle=默认">
                泰山石
            </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=产品展示&lan_mu=太湖石&tittle=默认">
                太湖石
            </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=产品展示&lan_mu=石槽石磨&tittle=默认">
                石槽石磨
            </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=产品展示&lan_mu=灵璧石&tittle=默认">
                灵璧石
            </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=产品展示&lan_mu=鹅软石&tittle=默认">
                鹅软石
            </a>
        </Menu.Item>
    </Menu>
);
const menu3 = (
    <Menu style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}
                target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=工程案例&lan_mu=假山工程&tittle=默认">
                假山工程
        </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}
                target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=工程案例&lan_mu=园林工程&tittle=默认">
                园林工程
        </a>
        </Menu.Item>
    </Menu>
);
const menu4 = (
    <Menu style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}
                target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=关于我们&lan_mu=关于我们&tittle=默认">
                关于我们
        </a>
        </Menu.Item>
    </Menu>
);
const menu5 = (
    <Menu style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}
                target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=资讯动态&lan_mu=公司动态&tittle=默认">
                公司动态
        </a>
        </Menu.Item>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}
                target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=资讯动态&lan_mu=行业动态&tittle=默认">
                行业动态
        </a>
        </Menu.Item>
    </Menu>
);
const menu6 = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.ahqy.gov.cn/">
                人民政府
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.jjw.gov.cn/">
                监察委员会
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://czqyfy.chinacourt.gov.cn/index.shtml">
                人民法院
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.ahqingyang.jcy.gov.cn/">
                人民检察院
        </a>
        </Menu.Item>
    </Menu>
);
const menu7 = (
    <Menu style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
        <Menu.Item style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>
            <a style={{ 'border-color': '#1ca52c', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}
                target="_blank" rel="noopener noreferrer" href="/#/mynews?ban_kuai=联系我们&lan_mu=联系我们&tittle=默认">
                联系我们
        </a>
        </Menu.Item>
    </Menu>
);


export default class MyHeader extends React.Component {
    state = {
        collapsed: false,
        myHTML: '',
        ban_kuai: '',
        lan_mu: '',
    };

    componentDidMount() {
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const my_header_style = { 'border-color': '#b9f7f5', color: '#000000', 'backgroundColor': '#b9f7f5' }
        return (
            <div>
                <Row style={my_header_style}>
                    <Col span={2}
                        style={my_header_style}
                    ></Col>
                    <Col span={10}
                        style={my_header_style}
                    >
                        <h1
                            style={{ 'border-color': '#b9f7f5', color: '#000000', 'backgroundColor': '#b9f7f5' }}
                        >池州市万象园林绿化工程有限公司 </h1>

                        <h2
                            style={{ 'border-color': '#b9f7f5', color: '#000000', 'backgroundColor': '#b9f7f5' }}
                        >基地直销  |  石材丰富  |  送货上门  |  量大从优</h2>
                    </Col>
                    <Col span={6}>
                        <h2>安徽省池州市贵池区梅街镇</h2>
                    </Col>
                    <Col span={3}>
                        <h4>邹经理：</h4>
                    </Col>
                    <Col span={3}
                        style={{ 'border-color': '#b9f7f5','align':'right', color: '#000000', 'backgroundColor': '#b9f7f5' }}
                    >
                        <h4
                            style={{ 'border-color': '#b9f7f5','align':'right', color: '#000000', 'backgroundColor': '#b9f7f5' }}
                        >18956688966</h4>
                        <h4
                            style={{ 'border-color': '#b9f7f5','align':'right', color: '#000000', 'backgroundColor': '#b9f7f5' }}
                        >      15395364652</h4>
                        <p
                            style={{ 'border-color': '#b9f7f5','align':'right', color: '#000000', 'backgroundColor': '#b9f7f5' }}
                        >全国服务支持热线</p>
                    </Col >
                </Row>
                <Row style={{ 'border-color': '#1ca52c', color: '#000000', 'backgroundColor': '#1ca52c' }}>
                    <Col span={4}>
                        <Button
                            type="primary"
                            style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}
                        >
                            <a target="_blank" rel="noopener noreferrer" href="/">
                                首页
                            </a>
                        </Button>
                    </Col>
                    <Col span={4}>
                        <Dropdown overlay={menu2} placement="bottomCenter">
                            <Button style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }} >产品中心</Button>
                        </Dropdown>
                    </Col>
                    <Col span={4}>
                        <Dropdown overlay={menu3} placement="bottomCenter"
                            type="primary"
                        >
                            <Button style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>工程案例</Button>
                        </Dropdown>
                    </Col>
                    <Col span={4}>
                        <Dropdown overlay={menu4} placement="bottomCenter">
                            <Button style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>关于我们</Button>
                        </Dropdown>
                    </Col>
                    <Col span={4}>
                        <Dropdown overlay={menu5} placement="bottomCenter">
                            <Button style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>资讯动态</Button>
                        </Dropdown>
                    </Col>
                    <Col span={4}>
                        <Dropdown overlay={menu7} placement="bottomCenter">
                            <Button style={{ 'border-color': '#FFFFFF', color: '#FFFFFF', 'backgroundColor': '#1ca52c', 'width': '100%' }}>联系我们</Button>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Carousel autoplay >
                        <img src={img_header1} />
                        {/* <img src={AppGlobal.url.首页滚动图片1} />
                        <img src={AppGlobal.url.首页滚动图片2} />
                        <img src={AppGlobal.url.首页滚动图片3} />
                        <img src={AppGlobal.url.首页滚动图片4} />
                        <img src={AppGlobal.url.首页滚动图片5} /> */}
                    </Carousel>
                </Row>
                <br></br>
            </div>
        );
    }
}