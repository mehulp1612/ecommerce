import React, { useEffect,useState } from 'react';
//import data from '../Data'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const [qty,setQty] = useState(1);
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }

    return (
        <div>
            {
                loading ? (
                    <LoadingBox></LoadingBox>
                ) : (error ? (
                    <MessageBox variant='danger'>{error}</MessageBox>
                ) : (
                    <div>
                        <Link to='/'>Back To Results</Link>
                        <div className='row top'>
                            <div className='col-2'>
                                <img class='large' src={product.image} alt='{product.name}'></img>
                            </div>
                            <div className='col-1'>
                                <ul>
                                    <li><h1>{product.name}</h1></li>
                                    <li>
                                        <Rating rating={product.rating} numreviews={product.numreviews}></Rating>
                                    </li>
                                    <li>Price: Rs. {product.price}</li>
                                    <li>Description: {product.description}</li>
                                    <li>
                                        <div className="row">
                                            <div>Status:</div>
                                            <div>
                                                {product.countInStock>0?(
                                                    <span className="success">In Stock</span>
                                                )
                                                :(
                                                    <span className="error">Unavailable</span>)}
                                                )
                                            </div>


                                    </div>
                                    </li>

                                    

                                </ul>
                            </div>
                            <div className='col-1'>
                                <div className='card card-body'>
                                    <ul>
                                        <li>
                                            <div className='row'>
                                                <div>Price</div>
                                                <div className='price'>Rs. {product.price}</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='row'>
                                                <div>Status: </div>
                                                <div>{product.countInStock > 0 ? (<span className='success'> In Stock</span>) : (<span className='error'> Unavailable</span>)}</div>
                                            </div>
                                        </li>
                                        <li>
                                            {/* {<button className='primary block'>Add To Cart</button>} */}

                                            {
                                            product.countInStock > 0 && (

                                                <>
                                                <li>
                                                    <div className='row'>
                                                        <div>Qty(in kg)</div>
                                                        <div>
                                                            <select value={qty} onChange={e=> setQty(e.target.value)}>
                                                                {
                                                                    [...Array(product.countInStock).keys()].map((x)=>(
                                                                        <option key={x+1} value={x+1}>{x+1}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    
                                                </li>
                                                <li>
                                                <button onClick={addToCartHandler}  className='primary block'>Add To Cart</button>
                                                </li>
                                                </>
                                                
                                            )
                                        }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}