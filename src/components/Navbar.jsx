import React from 'react'
import { connect } from 'react-redux'
import modulos from '../data/modulos'
import { logout } from '../ducks/user'

const Navbar = ({ user, logout }) => {
    return user.logged  && (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav mr-auto">
                { modulos.map(m =>  user.modulos.find(u_m => u_m.id === m.id) && (
                    <li className="nav-item" key={m.id}>
                        <a className="nav-link" href="/#">{ m.nombre }</a>
                    </li>
                )) }
            </ul>
            <button className="btn btn-danger btn-sm" onClick={() =>  logout()}>Logout</button>
        </nav>
    )
}

const mapStateToProps = state => {
    return { user: state.user }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
