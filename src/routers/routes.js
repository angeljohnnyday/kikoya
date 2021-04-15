import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Products from '../views/Products'
import Login from '../views/Login'

const NotFound = () => (
    <h1>404 - Not Found!</h1>
)

const RouteWithSubRoutes = route => {
    const user = useSelector(state => state.user);
    if(route.auth && !user.logged) return (<Redirect to="/login" />)

    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} { ...route.props } routes={route.routes} />
            )}
        />
    )
}

export const RouterParent = ({ routes }) => (
    <Switch>
        {routes.map((route, index) => (
            <RouteWithSubRoutes
                key={index}
                {...route}
            />
        ))}
        <Route component={NotFound} />
    </Switch>
)

const routes = [{
    path: '/',
    component: () => <Redirect to="/products" />,
    exact: true
}, {
    path: '/products',
    component: Products,
    auth: true,
}, {
    path: '/login',
    component: Login
}];
  
export default routes;