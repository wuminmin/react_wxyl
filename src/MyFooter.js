import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button, Tag, PageHeader } from 'antd';
import Carousel from 'nuka-carousel';
import React from 'react'
import Qs from 'qs'
import axios from 'axios'
import 'antd/dist/antd.css';
import './index.css';


export default class MyFooter extends React.Component {
    state = {
    };

    componentDidMount() {
    }

    render() {
        const my_footer_style = { 'borderColor': '#b9f7f5', color: '#000000', 'backgroundColor': '#b9f7f5' }
        return (
            <div>
                <br></br>
                <Row
                    style={my_footer_style}
                >

                    <Col span={2}>

                    </Col>
                    <Col span={20}
                        style={my_footer_style}
                    >
                        <p align={'center'}>池州市万象园林绿化工程有限公司</p>
                        <p align={'center'}>地址：安徽省池州市贵池区梅街镇</p>
                        <p align={'center'}>联系电话：18956688966，15395364652</p>
                        <p align={'center'}>皖ICP备 20001351号</p>
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
            </div>
        );
    }
}