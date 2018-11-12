import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark2 sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="/trang-chu">
                        <img alt="WeGo" src="http://placehold.it/35x35" className="rounded-circle" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end navMenu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/trang-chu" className="nav-link h5" activeStyle={{ fontWeight: "bold", color: "#00a8ad" }}>Tour</a>
                            </li>
                            <li className="nav-item">
                                <a href="/chi-tiet" className="nav-link h5" activeStyle={{ fontWeight: "bold", color: "#00a8ad" }}>Chi tiết</a>
                            </li>
                            <li className="nav-item">
                                <a href="/cam-nang" className="nav-link h5" activeStyle={{ fontWeight: "bold", color: "#00a8ad" }}>Cẩm nang du lịch</a>
                            </li>
                            <li className="nav-item">
                                <a href="/gioi-thieu" className="nav-link h5" activeStyle={{ fontWeight: "bold", color: "#00a8ad" }} >Giới thiệu </a>
                            </li>
                            <li className="nav-item">
                                <a href="/giai-dap" className="nav-link h5" activeStyle={{ fontWeight: "bold", color: "#00a8ad" }} >Giải đáp</a>
                            </li>
                            <li className="nav-item">
                                <a href="/ho-tro" className="nav-link h5" activeStyle={{ fontWeight: "bold", color: "#00a8ad" }} >Hỗ trợ</a>
                            </li>
                            <li className="nav-item">                                
                                <div className="btn text-white btn-login mx-auto" role="button">
                                    <a href="/dang-nhap" className="text-white block" activeStyle={{ fontWeight: "bold", color: "#00a8ad" }} >
                                     <i class="fa fa-user-circle-o text-white fa-16 mr-1" aria-hidden="true"></i>
                                    Đăng nhập</a>
                                </div>
                            </li>
                            {/* <li className="dropdown">
                            <a className="nav-link h5 dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="components-dropdown">Components</a>
                            <div className="dropdown-menu dropdown-menu-wide p-0 o-hidden dropdown-menu-right" aria-labelledby="components-dropdown">
                                <div className="list-group list-group-flush">
                                    <a href="components-insight.html" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <span>Components to help you build sites faster</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navigation;
