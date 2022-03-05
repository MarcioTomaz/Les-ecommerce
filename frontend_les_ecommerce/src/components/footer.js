
import React from "react";

function Footer() {
    return (
        <footer fragment="footer" className="bg-light box-shadow ">
            <div className="container py-4 ">
                <div className="row">
                    <div className="col-md-3 col-6 ">
                        <h4 className="h6 ">Categorias</h4>
                        <ul className="list-unstyled">
                            <li><a href="#/">Cartas</a></li>
                            <li><a href="#/">Deck box</a></li>
                            <li><a href="#/">Sleeve</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6">
                        <h4 className="h6">Informação</h4>
                        <ul className="list-unstyled">
                            <li><a href="#/">Sobre</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="h6">Yugi Store</h4>
                        <ul className="list-unstyled text-secondary">
                            <li>Rua não sei , nº 123 - São Paulo, SP</li>
                            <li>yugi@yugi.com.br</li>
                            <li>11 99999-9999</li>
                            <li>De Seg. à Sex. das 8h às 18h</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4 className="h6">REDES SOCIAIS</h4>
                        <ul className="list-unstyled">
                            <li><a className="btn btn-outline-secondary btn-sm btn-block mb-2" href="#/" >TikTok</a>
                            </li>
                            <li><a className="btn btn-outline-secondary btn-sm btn-block mb-2" href="#/">Orkut</a>
                            </li>
                            <li><a className="btn btn-outline-secondary btn-sm btn-block mb-2" href="#/" >Kwai</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-info text-center py-3">
                <p className="mb-0 text-white">Yugi Store © 2022.</p>
            </div>
        </footer>
    )
}

export default Footer;