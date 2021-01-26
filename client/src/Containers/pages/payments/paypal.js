import React, { Component } from 'react';
import {Container, Card, CardBody, Button, CardFooter, Col, Row, Spinner } from 'reactstrap';
import Logo from '../../assets/images/background/jpg/mockup_buku_souvenir.jpg';
import { connect } from 'react-redux';
import { database } from '../../config/firebase/fire';
import PayPalBoard from './payPalBoard';

import '../../assets/style/paypal.scss';

class Paypal extends Component {

    state = {
        array: [],
        total: 0.00,
        checkListBuy: [],
        isCheckData: true,
        isCheckPay: false
    }

    userData = async () => {
       const data = await database.ref('/adds0FyTmIG1R7b5U7nJO2x0y6setEl2');
        
       return new Promise((resolve, reject) => {
           data.on('value', (snapshot) => {
               Object.keys(snapshot.val()).map(key => {
                   this.state.array.push({
                       id: key,
                       data: snapshot.val()[key]
                   })
               })
               console.log('data Paypal:', this.state.array);
                   this.setState({
                       isCheckData: false
                   })
           }, (err) => {
            if(err) {
                reject(console.log(err))
            } else {
                resolve('suskes')
            }
        })
       })
    }

    getPriceAll = (name, value) => {
        const { total } = this.state;
        this.setState({
            total: total + Number(value),
            checkListBuy: [...this.state.checkListBuy, {name, value}]
        })
    }

    componentDidMount() {
        this.userData();
    }

    render() {
        const { array, total, isCheckData, isCheckPay, checkListBuy } = this.state;
        const { getPriceAll } = this;
        console.log('list terbaru saat ini : ', checkListBuy);

        if(isCheckPay === true) {
            return (
                <div>
                    <PayPalBoard
                        total = {total}
                        items = {checkListBuy}
                    />
                </div>
            )
        }

        return (
            <div>   
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Total Price : {total} </h1>
                        <p className="lead"> Kami jumlahkan secara otomatis semua total pembelian anda saat ini </p>
                        <h3>Owner : Muhammad Khoirul Huda </h3>
                        <Button color="info" size="md" onClick={() => {
                            if(checkListBuy.length){
                                this.setState({ isCheckPay: true })
                            }
                        }}
                        >
                            Checkout {`${checkListBuy.length}`}
                        </Button>
                    </div>
                </div>
                <Container>
                    <Row>
                        {
                            isCheckData === true ? (
                                <div> <Spinner size="md"/> </div>
                            ) :
                            array.map(aray => {
                            return (
                                <Col lg="4" md="6" sm="12" className="col" key={aray.id}>
                                    <Card className="card" key={aray.id}>
                                        <div className="header-text">
                                            {aray.data.title}
                                        </div>
                                        <CardBody className="cardBody">
                                            <img src={Logo} alt="bg" className="img" />
                                        </CardBody>
                                        <CardFooter className="cardFooter">
                                            <div className="price">
                                               Rp. {aray.data.price}/-
                                            </div>
                                            <Button 
                                                color="success" 
                                                className="btn" 
                                                onClick={() => getPriceAll(aray.data.title, aray.data.price)}>
                                                Add to cart
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </Container>
            </div>
        );
    }
}

const getStateRedux = (state) => {
    return {
        data: state.notes
    }
}

export default connect(getStateRedux)(Paypal);