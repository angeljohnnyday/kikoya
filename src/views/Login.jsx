import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../ducks/user'
import users from '../data/users'
import role_group from '../data/roles'

const Login = ({ user, login }) => {
    const [data, setData] = React.useState({
        user: 'ADMIN',
        password: '123456',
    });

    const findUser = () => {
        const user = users.find(u => u.username === data.user && u.password === data.password);
        if(user){
            return {
                ...user,
                modulos: role_group.find(r => r.role === user.role).modules,
                logged: true
            }
        }

        return null;
    }

    const handleChange = e => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const user = findUser();
        if(user) login(user);
    }

    return user.logged ? (
        <Redirect to="/products" />
    ) : (
        <>
          <div className="container container-login pt-5">
                <div  className="card card-login d-flex justify-content-center border-0">
                    <div className="card-body card-body-login">
                        <h2 className="title-login text-center">Welcome</h2>
                        <div className="row">
                            <form
                                className="container"
                                autoComplete="off"
                                onSubmit={handleSubmit}
                            >
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>User</label>
                                        <input 
                                            className="form-control form-control-sm" 
                                            id="user" 
                                            value={data.user}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input 
                                            className="form-control form-control-sm"
                                            id="password"
                                            type="password"
                                            value={data.password}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-info btn-sm btn-block"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}


const mapStateToProps = state => {
    return { user: state.user }
}

const mapDispatchToProps = dispatch => {
    return {
        login: data => dispatch(login(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
