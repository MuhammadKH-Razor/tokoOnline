import React, { useState, useRef, useEffect, Fragment } from 'react';
import { useHistory } from "react-router";
import Nodemailer from 'nodemailer';
import Swal from 'sweetalert2';
import './paypal.css';
import PaySuccess from '../paySuccess';
import payError from '../payError';
import Home from '../shops2';
import { ListGroupItem, ListGroup } from 'reactstrap';

function PayPalBoard(props) {

    const { items, total } = props;
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();
    const history = useHistory();

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: 'CAPTURE',
                        purchase_units: [{
                            description: 'Orderan anda di app kami',
                            amount: {
                                currency_code: "USD",
                                value: total
                            }
                        }]
                    })
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaidFor(true)
                    console.log(order)
                },
                onError: async (err) => {
                    setError(err)
                }
            }).render(paypalRef.current)
    }, [items])

    if (paidFor) {
        fetch("http://localhost:4000/emailSend", {
            method: 'post',
        })

        Swal.fire({
            title: 'pembayaran berhasil',
            text: "Masuk e-commerce dan periksa email kamu",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: 'rgba(25, 226, 149, 0.836)',
            cancelButtonColor: 'rgba(25, 226, 149, 0.836)',
            confirmButtonText: 'lanjutkan',
            cancelButtonText: 'cek email',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        })
    }

    if (error) {
        return (
            <payError />
        )
    }

    return (
        <div>
            <div className="listgroup">
                <h2>Payments with paypal</h2>
                <ListGroup className="wrap-listgroup">
                    {
                        items.map((item, index) =>
                            <ListGroupItem key={index}> {item.name} - Rp. {item.value}</ListGroupItem>
                        )}
                    <div className="total-paypal">
                        <h3>
                            Total: Rp. {total}
                        </h3>
                    </div>
                    <div className="tombol-paypals" ref={paypalRef} />
                </ListGroup>
            </div>
        </div>
    )

}

export default PayPalBoard;