import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBIcon,
    MDBFormInline
} from 'mdbreact';


class NavBarPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const bgPink = {backgroundColor: '#e91e63'};
        return(
            <div>
                    <header>
                        <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="bottom">
                            <MDBNavbarToggler onClick={ this.onClick } />
                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem active>
                                        <MDBNavLink to="/">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/create">Add Note</MDBNavLink>
                                        {/*<h4><Link to="/create">Add Note</Link></h4>*/}
                                    </MDBNavItem>

                                </MDBNavbarNav>
                                <MDBNavbarNav right>

                                    <MDBNavItem>

                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </header>
            </div>
        );
    }
}

export default NavBarPage;