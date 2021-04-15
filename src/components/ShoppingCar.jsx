import React from 'react'
import { connect } from 'react-redux'
import { productShoppingRemove } from '../ducks/products'

const ShoppingCar = ({ shopping, productShoppingRemove }) => {
    const total = React.useMemo(() => {
        const total = shopping.map(s => s.price).reduce((a, b) => a + b, 0);

        return total;
    }, [shopping])


    const removeProduct = id => {
        productShoppingRemove(id);
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Producto Selected</h5>
                    {shopping.map(s => (
                        <React.Fragment key={s.id}>
                            <p className="card-text text-right">
                                {s.price} {s.currency}
                                <button 
                                    className="mx-2 btn btn-danger btn-sm" 
                                    onClick={() => removeProduct(s.id)}
                                >
                                    Remove
                                </button>
                            </p>
                        </React.Fragment>
                    ))}
                    <h5 className="card-title text-right">Total: {total}</h5>
                </div>
            </div>  
        </>
    )
}

const mapStateToProps = state => {
    return { shopping: state.products.shopping }
}

const mapDispatchToProps = dispatch => {
    return {
        productShoppingRemove: id => dispatch(productShoppingRemove(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCar)
