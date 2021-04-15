import React from 'react'
import { connect } from 'react-redux'
import { productShoppingAdd, productShoppingRemove } from '../ducks/products'

const ProductList = ({ shopping, products, productShoppingAdd, productShoppingRemove }) => {


    const shoppingGet = id => {
        const product = shopping.find(s =>  s.id === id);
        return product ? true : false;
    }

    return (
        <>
            {products.map(product => (
                <div className="card my-3 p-3" key={product.id}>
                    <img src={product.image} alt={product.name} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{ product.name }</h5>
                        <p className="card-text">{product.price} {product.currency}</p>
                    </div>
                    <div className="-card-footer text-right">
                        <button
                            className={`btn btn-sm ${ shoppingGet(product.id) ? 'btn-danger' : 'btn-primary'}`}
                            onClick={ () => shoppingGet(product.id) ? productShoppingRemove(product.id) : productShoppingAdd(product) }
                        >
                            { shoppingGet(product.id) ? 'Remove' : 'Add' }
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

ProductList.defaultProps = {
    products: []
}

const mapStateToProps = state => {
    return { shopping: state.products.shopping }
}

const mapDispatchToProps = dispatch => {
    return {
        productShoppingAdd: data => dispatch(productShoppingAdd(data)),
        productShoppingRemove: id => dispatch(productShoppingRemove(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
