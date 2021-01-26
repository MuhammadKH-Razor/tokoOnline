import React from 'react';
import Swal from 'sweetalert2';
import './auth1.css';
import { registerGrab, loginGrab } from '../config/redux/actions';
import { connect } from 'react-redux';

class Regis extends React.Component {

    state = {
        nama: '',
        alamat: '',
        email: '',
        password: '',
        kelamin: '',
        nomer: '',
        kota: '',
        namaKota: '',
        text: 'login',
        detect: false
    }

    componentDidMount = () => {
            localStorage.removeItem('loginData');
            localStorage.removeItem('dataUser');
            localStorage.removeItem('dataFirestore');
            localStorage.removeItem('registerData');
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    registerUser = async (e) => {
        e.preventDefault();
        
        const { kota, namaKota } = this.state;
        const { registerCommerce } = this.props;

        if(kota === '1') {
            this.setState({
                namaKota: 'Aceh Barat'
            })
        }else if(kota === '3') {
            this.setState({
                namaKota: 'Aceh Besar'
            })
        }else if(kota === '4') {
            this.setState({
                namaKota: 'Aceh Jaya'
            })
        }else if(kota === '19') {
            this.setState({
                namaKota: 'Balikpapan'
            })
        }else if(kota === '20') {
            this.setState({
                namaKota: 'Banda aceh'
            })
        }else if(kota === '21') {
            this.setState({
                namaKota: 'Bandar lampung'
            })
        }else if(kota === '22') {
            this.setState({
                namaKota: 'Kab. Bandung'
            })
        }else if(kota === '23') {
            this.setState({
                namaKota: 'kota. Bandung'
            })
        }else if(kota === '32') {
            this.setState({
                namaKota: 'Bangli'
            })
        }else if(kota === '33') {
            this.setState({
                namaKota: 'Banjar'
            })
        }else if(kota === '36') {
            this.setState({
                namaKota: 'Banjarmasin'
            })
        }else if(kota === '42') {
            this.setState({
                namaKota: 'Banyuwangi'
            })
        }else if(kota === '48') {
            this.setState({
                namaKota: 'Batam'
            })
        }else if(kota === '54') {
            this.setState({
                namaKota: 'Kab. Bekasi'
            })
        }else if(kota === '55') {
            this.setState({
                namaKota: 'Kota. Bekasi'
            })
        }else if(kota === '62') {
            this.setState({
                namaKota: 'Bengkulu'
            })
        }else if(kota === '78') {
            this.setState({
                namaKota: 'Kab. Bogor'
            })
        }else if(kota === '79') {
            this.setState({
                namaKota: 'Kota. Bogor'
            })
        }else if(kota === '103') {
            this.setState({
                namaKota: 'Ciamis'
            })
        }else if(kota === '104') {
            this.setState({
                namaKota: 'Cianjur'
            })
        }else if(kota === '108') {
            this.setState({
                namaKota: 'Kab. Cirebon'
            })
        }else if(kota === '109') {
            this.setState({
                namaKota: 'Kota. Cirebon'
            })
        }else if(kota === '114') {
            this.setState({
                namaKota: 'Denpasar'
            })
        }else if(kota === '126') {
            this.setState({
                namaKota: 'Garut'
            })
        }else if(kota === '129') {
            this.setState({
                namaKota: 'Kab. Gorontalo'
            })
        }else if(kota === '130') {
            this.setState({
                namaKota: 'Kota. Gorontalo'
            })
        }else if(kota === '149') {
            this.setState({
                namaKota: 'Indramayu'
            })
        }else if(kota === '151') {
            this.setState({
                namaKota: 'Jakarta Barat'
            })
        }else if(kota === '152') {
            this.setState({
                namaKota: 'Jakarta Pusat'
            })
        }else if(kota === '153') {
            this.setState({
                namaKota: 'Jakarta Selatan'
            })
        }else if(kota === '154') {
            this.setState({
                namaKota: 'Jakarta Timur'
            })
        }else if(kota === '155') {
            this.setState({
                namaKota: 'Jakarta Utara'
            })
        }else if(kota === '156') {
            this.setState({
                namaKota: 'Jambi'
            })
        }else if(kota === '157') {
            this.setState({
                namaKota: 'Jayapura'
            })
        }else if(kota === '171') {
            this.setState({
                namaKota: 'Karawang'
            })
        }else if(kota === '211') {
            this.setState({
                namaKota: 'Kuningan'
            })
        }else if(kota === '430') {
            this.setState({
                namaKota: 'Kab. Sukabumi'
            })
        }else if(kota === '431') {
            this.setState({
                namaKota: 'Kota. Sukabumi'
            })
        }else if(kota === '440') {
            this.setState({
                namaKota: 'Sumedang'
            })
        }
        

        const dataUser = {
            nama: this.state.nama,
            alamat: this.state.alamat,
            email: this.state.email,
            password: this.state.password,
            kelamin: this.state.kelamin,
            nomer: this.state.nomer,
            kota: this.state.kota,
            nama_kota: this.state.namaKota
        }

        const reg = await registerCommerce({ dataUser });
        if (reg) {
            console.log('sukses')
            this.setState({
                nama: '',
                alamat: '',
                email: '',
                password: '',
                kelamin: '',
                nomer: '',
                kota: '',
                text: 'login',
                detect: false
            })
        } else {
            console.log('gagal')
        }
    }

    LoginUser = async (e) => {
        e.preventDefault();

        const { loginCommerce } = this.props;

        const dataUser = {
            email: this.state.email,
            password: this.state.password,
        }

        const log = await loginCommerce({dataUser});
        if (log) {
            console.log('login sukses')
            this.setState({
                email: '',
                password: '',
            })
            setTimeout(() => {
                this.props.history.push('/sop');
            }, 1000)
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
              })
        }
    }

    registerAgain = () => {
        this.setState({
            text: 'register',
            detect: true,
            nama: '',
            alamat: '',
            email: '',
            password: '',
            kelamin: '',
            nomer: '',
            kota: '',
        })
    }

    loginSkuy = (e) => {
        e.preventDefault();

        this.setState({
            detect: false,
            text: 'login',
            nama: '',
            alamat: '',
            email: '',
            password: '',
            kelamin: '',
            nomer: '',
            kota: '',
        })
    }

    registerSkuy = (e) => {
        e.preventDefault();

        this.setState({
            detect: true,
            text: 'register',
            nama: '',
            alamat: '',
            email: '',
            password: '',
            kelamin: '',
            nomer: '',
            kota: '',
        })
    }

    render() {
        const { nama, alamat, email, password, nomer, kelamin, kota, text, detect } = this.state;
        const { registerUser, LoginUser, registerSkuy, valueChange, registerAgain, loginSkuy } = this;
        console.log(this.state)

        return (
            <div>
                <form>
                    {
                        detect ? (
                            <h2>{text} - <button className="loginSkuy" onClick={loginSkuy}>Login</button></h2>
                        ) :
                            <h2>{text} - <button className="loginSkuy" onClick={registerSkuy}>Register</button></h2>
                    }
                    {
                        detect ? (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Nama pengguna</label>
                                    <input type="text" name="nama" value={nama} className="form-control" id="exampleFormControlInput1" onChange={valueChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Email pengguna</label>
                                    <input type="email" name="email" value={email} className="form-control" id="exampleFormControlInput1" onChange={valueChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Password</label>
                                    <input type="password" name="password" value={password} className="form-control" id="exampleFormControlInput1" onChange={valueChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Alamat</label>
                                    <input type="text" name="alamat" value={alamat} className="form-control" id="exampleFormControlInput1" onChange={valueChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">No. Telephone</label>
                                    <input type="text" name="nomer" value={nomer} className="form-control" id="exampleFormControlInput1" onChange={valueChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Jenis Kelamin</label>
                                    <select className="form-control" value={kelamin} name="kelamin" id="exampleFormControlSelect1" onChange={valueChange}>
                                        <option value="">-</option>
                                        <option value="pria">Pria</option>
                                        <option value="wanita">Wanita</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Kota/kabupaten</label>
                                    <select className="form-control" name="kota" value={kota} id="exampleFormControlSelect1" onChange={valueChange}>
                                        <option value="">-</option>
                                        <option value="1">Aceh Barat</option>
                                        <option value="3">Aceh Besar</option>
                                        <option value="4">Aceh Jaya</option>
                                        <option value="19">Balikpapan</option>
                                        <option value="20">Banda Aceh</option>
                                        <option value="21">Bandar Lampung</option>
                                        <option value="22">Kab. Bandung</option>
                                        <option value="23">kota. Bandung</option>
                                        <option value="32">Bangli</option>
                                        <option value="33">Banjar</option>
                                        <option value="36">Banjarmasin</option>
                                        <option value="42">Banyuwangi</option>
                                        <option value="48">Batam</option>
                                        <option value="54">Kab. Bekasi</option>
                                        <option value="55">Kota. Bekasi</option>
                                        <option value="62">Bengkulu</option>
                                        <option value="78">Kab. Bogor</option>
                                        <option value="79">Kota. Bogor</option>
                                        <option value="103">Ciamis</option>
                                        <option value="104">Cianjur</option>
                                        <option value="108">Kab. Cirebon</option>
                                        <option value="109">Kota. Cirebon</option>
                                        <option value="114">Denpasar</option>
                                        <option value="126">Garut</option>
                                        <option value="129">Kab. Gorontalo</option>
                                        <option value="130">Kota. Gorontalo</option>
                                        <option value="149">Indramayu</option>
                                        <option value="151">Jakarta Barat</option>
                                        <option value="152">Jakarta Pusat</option>
                                        <option value="153">Jakarta Selatan</option>
                                        <option value="154">Jakarta Timur</option>
                                        <option value="155">Jakarta Utara</option>
                                        <option value="156">Jambi</option>
                                        <option value="157">Jayapura</option>
                                        <option value="171">Karawang</option>
                                        <option value="211">Kuningan</option>
                                        <option value="430">Kab. Sukabumi</option>
                                        <option value="431">KOta. Sukabumi</option>
                                        <option value="440">Sumedang</option>
                                    </select>
                                </div>
                                <button className="btn-register" onClick={registerUser}>
                                    Register now
                            </button>
                            </div>
                        ) :
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Email pengguna</label>
                                    <input type="email" name="email" value={email} className="form-control" id="exampleFormControlInput1" onChange={valueChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Password</label>
                                    <input type="password" name="password" value={password} className="form-control" id="exampleFormControlInput1" onChange={valueChange} />
                                </div>
                                <button className="btn-register" onClick={LoginUser}>
                                    Login now
                                </button>
                            </div>
                    }

                </form>
            </div>
        )
    }
}

const getActionRedux = (dispatch) => {
    return {
        registerCommerce: (data) => dispatch(registerGrab(data)),
        loginCommerce: (data) => dispatch(loginGrab(data)),
    }
}

export default connect(null, getActionRedux)(Regis);