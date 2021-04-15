import React from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import ShoppingCar from '../components/ShoppingCar'
import { allProduct } from '../ducks/products'
import data from '../data/products'

const Products = ({ products, allProduct }) => {
    React.useEffect(() => {
        allProduct(data);
    }, [allProduct])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Shop</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ProductList products={products} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ShoppingCar />
                </div>
            </div>

            <footer>
                <small>
                    powered by <a href="http://www.kikoya.mx/">Kikoya</a>
                </small>
            </footer>
        </div>
    )
}

const mapStateToProps = state => {
    return { products: state.products.items }
}

const mapDispatchToProps = dispatch => {
    return {
        allProduct: data => dispatch(allProduct(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
