/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Container from "../../components/Container/Container";
import './Login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component {
    render() {
        return (
            <Container>
            <form>

                <h3>Entrar</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Digite o seu e-mail" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Digite uma senha" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Lembrar-me</label>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Logar</button>
                <p className="forgot-password text-right">
                    Esqueceu <a href="#">Senha?</a>
                </p>
            </form>
            </Container>
        );
    }
}