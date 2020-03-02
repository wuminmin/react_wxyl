import { Card, Menu, Row, Col, Button } from 'antd';
// import Carousel from 'nuka-carousel';
import React from 'react';
import Qs from 'qs';
import axios from 'axios';
import 'antd/dist/antd.css';
import './index.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

class MyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            菜单列表: [],
            图片列表: [],
            lan_mu: this.props.lan_mu,
            ban_kuai: this.props.ban_kuai,
            my_tittle: this.props.my_tittle,
            myHTML_tittle: '',
            myHTML_article: '',
            myHTML_time: '',
        }
    }

    componentDidMount() {
        let self = this;
        let data = {
            "ban_kuai": this.props.ban_kuai
        }
        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: 'https://wx.wuminmin.top/wxyl/get_caidan_by_bankuai',
            data: Qs.stringify(data)
        }).then(function (response) {
            console.log(response)
            self.setState({
                菜单列表: response.data
            });
        })
            .catch(function (error) {
                console.log(error);
            });

        let data2 = {
            "ban_kuai": this.props.ban_kuai,
            "lan_mu": this.props.lan_mu,
            "tittle": this.props.my_tittle
        }
        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: 'https://wx.wuminmin.top/wxyl/get_imggrid_by_lanmu',
            data: Qs.stringify(data2)
        }).then(function (response) {
            console.log(response)
            self.setState({
                图片列表: response.data
            });

        })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Row>
                <Col span={4}>
                    <Card title={this.props.ban_kuai}
                        headStyle={{ textAlign: 'center', fontSize: '30px', width: '100%', height: 'auto', color: '#ffffff', background: '#1ca52c' }}
                        bodyStyle={{ width: '100%', height: 'auto', background: '#b9f7f5' }}
                    >
                        {this.state.菜单列表.map((myitem) => {
                            return (
                                <Button
                                    key={myitem}
                                    value={myitem}
                                    type='normal'
                                    style={{
                                        color: '#000000',
                                        width: '100%',
                                        height: 'auto',
                                        fontSize: '20px',
                                        background: 'none',
                                        // textShadow: '1px 1px #000000,-1px -1px #000000,1px -1px #000000,-1px 1px #000000',
                                    }}
                                    onClick={(e) => {
                                        console.log('click ', e.target.value);
                                        let self = this;
                                        let data = {
                                            "ban_kuai": this.state.ban_kuai,
                                            "lan_mu": e.target.value
                                        }
                                        axios({
                                            headers: {
                                                'Content-Type': 'application/x-www-form-urlencoded'
                                            },
                                            method: 'post',
                                            url: 'https://wx.wuminmin.top/wxyl/get_imggrid_by_lanmu',
                                            data: Qs.stringify(data)
                                        }).then(function (response) {
                                            console.log(response)
                                            self.setState({
                                                图片列表: response.data
                                            });
                                        })
                                            .catch(function (error) {
                                                console.log(error);
                                            });
                                    }}
                                >
                                    {myitem}
                                </Button>
                            )
                        })}
                    </Card>
                </Col>
                <Col span={20}>
                    {this.state.图片列表.map((i) => {
                        return (
                            <Row>
                                {i.map((j) => {
                                    return (
                                        <Col span={6}>
                                            <div
                                                style={{padding:'10px 10px 10px 10px'}}
                                            >
                                                <img
                                                    src={j.图片地址}
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto'
                                                    }}
                                                ></img>
                                                <h4
                                                    style={{
                                                        textAlign: 'center'
                                                    }}
                                                >{j.图片名称}</h4>
                                            </div>

                                        </Col>
                                    )
                                })}
                            </Row>
                        )
                    })}
                </Col>
            </Row>
            </div>
        )
    }
}

export default class MyImgGrid extends React.Component {
    state = {
        collapsed: false,
        myHTML: '',
        ban_kuai: '',
        lan_mu: '',
        my_tittle: '',
    };

    componentDidMount() {
        console.log(this.props)
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        console.log(params.get('ban_kuai'))
        console.log(params.get('lan_mu'))
        this.setState({
            ban_kuai: params.get('ban_kuai'),
            lan_mu: params.get('lan_mu'),
            my_tittle: params.get('tittle'),
        });
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);

        return (
            <div>
                <MyHeader></MyHeader>
                <br></br>

                {/* <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                    </Col>
                    <Col span={2}></Col>
                </Row> */}
                <MyMenu ban_kuai={params.get('ban_kuai')} lan_mu={params.get('lan_mu')} my_tittle={params.get('tittle')}></MyMenu>



                <MyFooter></MyFooter>


            </div>
        );
    }
}