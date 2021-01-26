import React, { Component } from 'react';
import 'animate.css';
import './welcome.css';
import GoogleAuth from 'react-google-login';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from 'reactstrap';
import Logo2 from '../../assets/images/background/svg/sponsor/undraw_Beer_celebration_cefj.svg';
import Logo from '../../assets/images/background/svg/sponsor/undraw_dreamer_gxxi.svg';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';
import history from './history';
import Firebase from './firebase';
import { registerGrab, loginGrab } from '../../config/redux/actions';
import { connect } from 'react-redux';

class welcome extends Component {

    state = {
        user: [],
        bg: '',
        toko: '',
        namaError: '',
        tokoError: '',
        nomerError: '',
        emailError: '',
        alamatError: '',
        passwordError: '',
        isPenjual: false,
        isLoading: false,
        isSign: false,
        isAuth: false,
        isPassword: false,
        textForm: 'signUp',
        textBatal: 'batalkan',
        signUpSuccess: true,
        nama: '',
        nomer: '',
        alamat: '',
        email: '',
        password: '',
        kota: ''
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                isLoading: true
            })
        }, 3500)
        document.title = 'Grab - Shop';
    }

    onGoole = (response) => {
        console.log(response)
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () => {

        const { nama, toko, email, alamat, nomer, password, nameError, tokoError, emailError, alamatError, nomerError, passwordError } = this.state;

        if (!nama.length) {
            this.setState({
                namaError: 'nama tidak boleh kosong'
            })
            return false;
        } else if (nama.length < 2) {
            this.setState({
                namaError: 'karakter huruf minimal 3'
            })
            return false;
        } else {
            this.setState({ namaError: '' })
        }

        if (!toko.length) {
            this.setState({
                tokoError: 'nama tidak boleh kosong'
            })
            return false;
        } else if (toko.length < 2) {
            this.setState({
                tokoError: 'karakter huruf minimal 3'
            })
            return false;
        } else {
            this.setState({ tokoError: '' })
        }

        if (!email.includes('@')) {
            this.setState({
                emailError: 'email tidak valid'
            })
            return false;
        } else {
            this.setState({ emailError: '' })
        }

        if (!alamat.length) {
            this.setState({
                alamatError: 'alamat tidak boleh kosong'
            })
            return false;
        } else {
            this.setState({ alamatError: '' })
        }

        if (!nomer.length) {
            this.setState({
                nomerError: 'nomer tidak boleh kosong'
            })
            return false;
        } else {
            this.setState({ nomerError: '' })
        }

        if (!password.length > 4) {
            this.setState({
                passwordError: 'minimal 5 karakter'
            })
            return false;
        } else {
            this.setState({ passwordError: '' })
        }

        return true;
    }

    lanjutkan = (e) => {
        const validate = this.validate();

        if (validate) {

            history.push('/inputMakanan');
            this.setState({
                isPenjual: false
            })

        }
    }

    lanjutkanTest = () => {
        const { nama, alamat, nomer, provinsi } = this.state

        const data = {
            nama: nama,
            alamat: alamat,
            nomer: nomer,
            provinsi: provinsi
        }
        const userData = localStorage.setItem('dataForm', JSON.stringify(data));
        this.setState({
            isAuth: true,
            isPassword: true
        })
    }

    lanjutkanTest2 = async () => {
        const { nama, alamat, nomer, email, password, toko, kota } = this.state;
        const { registerSession } = this.props;
        const dataUser = {
            nama: nama,
            alamat: alamat,
            nomer: nomer,
            toko: toko,
            kota: kota
        }
        const res = await registerSession({ email, password, dataUser });
        if (res) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            })
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'warning',
                title: 'Signed in failed'
            })
        }
    }

    signIn = async () => {
        const { nama, password, alamat, nomer, email, toko } = this.state;
        const { loginSession } = this.props;
        const res = await loginSession({ email, password, toko, alamat, nomer });
        if (res) {
            this.setState({
                isPassword: false,
                textBatal: 'tutup'
            })
            setTimeout(() => {
                this.props.history.push('/shops');
                window.location.reload();
            }, 1000)
        } else {
            this.setState({
                isPassword: false,
                isAuth: false,
                textBatal: 'tutup'
            })
            this.props.history.push('/');
        }
    }

    batalkan = () => {
        setTimeout(() => {
            this.setState({
                nama: '',
                email: '',
                alamat: '',
                nomer: '',
                password: '',
                bg: '',
                isPenjual: false,
                nameError: '',
                emailError: '',
                alamatError: '',
                nomerError: '',
                passwordError: '',
                textBatal: 'batalkan',
                isSign: false,
                isPassword: false
            })
        }, 200)
    }

    opsiAuth1 = () => {
        this.setState({
            isAuth: false
        })
    }

    opsiAuth2 = () => {
        this.setState({
            isAuth: true,
            isSign: true,
            textForm: 'signIn'
        })
    }

    penjual = () => {
        this.setState({ isPenjual: true })
    }

    render() {
        const { valueChange, lanjutkanTest, batalkan, opsiAuth1, opsiAuth2, lanjutkanTest2, onGoogleAuth, signIn } = this;
        const { nama, email, password, alamat, nomer, isLoading, namaError, tokoError, emailError, passwordError, alamatError, nomerError, isAuth, isSign, isPassword, textForm, textBatal, toko, provinsi } = this.state;
        if (isLoading) {
            return (
                <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light navz animate__animated  animate__fadeInDown animate__delay-0.5s">
                            <div className="navbar-brand">
                                <button className="btn btn btz" data-toggle="modal" data-target="#exampleModal1" onClick={opsiAuth1}> Daftar </button>
                                <button className="btn btn btz" data-toggle="modal" data-target="#exampleModal1" onClick={opsiAuth2}> Masuk </button>
                            </div>
                        </nav>

                        <div className="jumbotron jumbotron-fluid jumbotz">
                            <div className="text-body txt">
                                <h2 className="animate__animated animate__jackInTheBox animate__delay-1s kemana"> Mau Kemana ? </h2>
                                <br />
                                <p className="bersiap animate__animated  animate__fadeInUp animate__delay-0.5s"> Bersiap untuk masuk dan bertransaksi di dalam toko online Grab kami. </p>
                            </div>
                            <div className="global-divs animate__animated  animate__fadeInUp animate__delay-0.5s">
                                <img src={Logo2} alt="Logo in" />
                            </div>
                        </div>

                        <div className="modal fade modal-fluid mdl" id="exampleModal1" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                            <div className="modal-dialog md" role="document">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">{textForm}</h5>
                                            {
                                                isSign ? (
                                                    <GoogleAuth
                                                        clientId="748804913240-dunivgolajbp6emh656e87rsq4c3d8pn.apps.googleusercontent.com"
                                                        buttonText="Login"
                                                        onSuccess={this.onGoole}
                                                        onFailure={this.onGoole}
                                                        cookiePolicy="single_host_origin"
                                                        style={{ fontWeight: 'bold' }}
                                                    />
                                                ) :
                                                    <button
                                                        type="submit"
                                                        className="btn btn bt-close"
                                                        data-dismiss="modal"
                                                        onClick={batalkan}>
                                                        {textBatal}
                                                    </button>
                                            }
                                        </div>

                                        {
                                            !isAuth ? (
                                                <div className="modal-body">
                                                    <div className="mb-5">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Nama penjual</label>
                                                        <input type="text" name="nama" className="form-control" value={nama} onChange={valueChange} placeholder="-" />
                                                        <span> {namaError} </span>
                                                    </div>
                                                    <div className="mb-5">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Nama toko</label>
                                                        <input type="text" name="toko" className="form-control" value={toko} onChange={valueChange} placeholder="-" />
                                                        <span> {tokoError} </span>
                                                    </div>
                                                    <div className="mb-5">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">No. Telephone</label>
                                                        <input type="number" name="nomer" className="form-control" value={nomer} onChange={valueChange} placeholder="-" />
                                                        <span> {nomerError} </span>
                                                    </div>
                                                    <div className="mb-5">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Alamat lengkap</label>
                                                        <input type="text" name="alamat" className="form-control" value={alamat} onChange={valueChange} placeholder="-" />
                                                        <span> {alamatError} </span>
                                                    </div>
                                                    <div className="mb-5">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Asal Kota</label>
                                                        <select name="kota" onChange={valueChange}>
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
                                                            <option value="108">Kab. irebon</option>
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
                                                    <span> {alamatError} </span>
                                                    <button type="submit" className="btn btn bt-next" onClick={lanjutkanTest}>Lanjutkan</button>
                                                    <button type="submit" className="btn btn bt-close" data-dismiss="modal" onClick={batalkan}>Batalkan</button>
                                                </div>
                                            ) :
                                                null
                                        }

                                        {
                                            isSign ? (
                                                <div className="modal-body">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">email</label>
                                                        <input type="email" name="email" className="form-control" value={email} onChange={valueChange} placeholder="-" />
                                                        <span> {emailError} </span>
                                                    </div>
                                                    <div className="mb-5">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">password</label>
                                                        <input type="password" name="password" className="form-control" value={password} onChange={valueChange} placeholder="-" />
                                                        <span> {passwordError} </span>
                                                    </div>
                                                    <button type="submit" className="btn btn bt-next" onClick={signIn}>Lanjutkan</button>
                                                    <button type="submit" className="btn btn bt-close" data-dismiss="modal" onClick={batalkan}>Batalkan</button>
                                                </div>
                                            ) :
                                                null
                                        }

                                        {
                                            isPassword ? (
                                                <div className="modal-body">
                                                    <div className="mb-5">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">New Toko</label>
                                                        <input type="text" name="toko" className="form-control" value={toko} onChange={valueChange} placeholder="-" />
                                                        <span> {namaError} </span>
                                                    </div>
                                                    <div className="mb-5">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">email</label>
                                                        <input type="email" name="email" className="form-control" value={email} onChange={valueChange} placeholder="-" />
                                                        <span> {emailError} </span>
                                                    </div>
                                                    <div className="mb-5">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">password</label>
                                                        <input type="password" name="password" className="form-control" value={password} onChange={valueChange} placeholder="-" />
                                                        <span> {passwordError} </span>
                                                    </div>
                                                    <button type="submit" className="btn btn bt-next" onClick={lanjutkanTest2}>Lanjutkan</button>
                                                    <button type="submit" className="btn btn bt-close" data-dismiss="modal" onClick={batalkan}>Batalkan</button>
                                                </div>
                                            ) :
                                                null
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            )
        }


        return (
            <div>
                <div className="jumbotron jumbotron-fluid jumbotz">
                    <div className="spinner">
                        <Spinner size="sm" className="spinn" />
                    </div>
                    <div id="demo"></div>
                    <div className="text-body txt animate__jackInTheBox">
                        <h1 className="animate__animated animate__jackInTheBox animate__delay-1s">
                            Grab
                            </h1>
                        <br />
                        <p className="txt-toko animate__animated  animate__fadeInUp animate__delay-0.5s"> Toko online berbasis web yang menyediakan peluang usaha dan jual beli bagi masyarakat wilayah Cirebon tercinta. </p>
                        <div className="global-div animate__animated  animate__fadeInUp animate__delay-0.5s">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const getActionRedux = (dispatch) => {
    return {
        registerSession: (data) => dispatch(registerGrab(data)),
        loginSession: (data) => dispatch(loginGrab(data))
    }
}

export default connect(null, getActionRedux)(welcome);