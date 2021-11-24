/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Container from "../../components/Container/Container";

export default class SignUp extends Component {
    render() {
        return (
            <Container>
            <form>
                <h3>Registro</h3>

                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Seu Primeiro Nome" />
                </div>

                <div className="form-group">
                    <label>Sobrenome</label>
                    <input type="text" className="form-control" placeholder="Sobrenome" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Digite seu um e-mail" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Digite uma senha" />
                </div>
                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Regitar</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
            </Container>
        );
    }
}