import React from 'react';
import Swal from 'sweetalert2';
import {Nodemailer} from 'nodemailer';
import Home from './shops2';

class PaySuccess extends React.Component {

    componentDidMount = () => {
      
    }

    exitFirstPage = () => {
        this.props.history.push('/')
    }

    Success = () => {
        Swal.fire({
            title: 'pembayaran berhasil',
            text: "Kembali kedalam e-commerce kita!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: 'rgba(25, 226, 149, 0.836)',
            cancelButtonColor: 'rgba(25, 226, 149, 0.836)',
            confirmButtonText: 'Lanjutkan',
            cancelButtonText: 'Batalkan'
          }).then((result) => {
            if (result.isConfirmed) {
                return (
                    <Home />
                )
            }else{
                this.exitFirstPage();
            }
          })
    }

    render() {
        const {Success} = this;
        
        return (
            <div>
                <Success />
            </div>
        )
    }
}

export default PaySuccess;