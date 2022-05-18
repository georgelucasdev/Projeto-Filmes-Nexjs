import React from "react";
import Link from "next/link";
import { Container } from "reactstrap";
import head from "next/head";

const Navbar = () => {
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
            </head>
            <nav className="navbar navbar-expand-md">
                <Container>
                    <div className="container-fluid row justify-content-evenly">
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-11">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <Link href="/">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        margin-left="50px"
                                    >
                                        Inicio
                                    </a>
                                </Link>
                                <Link href="movie">
                                    <a className="nav-link" aria-current="page">
                                        Filmes
                                    </a>
                                </Link>
                                <Link href="series">
                                    <a className="nav-link" aria-current="page">
                                        Series
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="nav-link" aria-current="page">
                                        #
                                    </a>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    );
};
export default Navbar;