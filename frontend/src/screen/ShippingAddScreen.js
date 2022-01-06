// import { PromiseProvider } from "mongoose";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { saveShippingAddress } from "../actions/cartActions";
// import CheckoutSteps from "../components/CheckoutSteps";

// export default function ShippingAddScreen(props){
//      const userSignin=useSelector((state)=>state.userSignin);
//      const {userInfo}=userSignin;

//      const cart=useSelector((state)=>state.cart);
//      const {shippingAddress}=cart;

//      if(!userInfo){
//          props.history.push('/signin');

//      }
//     const [fullName, setFullName] = useState(shippingAddress.fullName);
//     const [address, setAddress] = useState(shippingAddress.address);
//     const [city, setCity] = useState(shippingAddress.city);
//     const [zipCode, setZipCode] = useState(shippingAddress.zipCode);
//     const [country, setCountry] = useState(shippingAddress.country);
    
//     const dispatch = useDispatch();

//     const submitHandler = (e) => {
//         e.preventDefault();
//         dispatch(saveShippingAddress({fullName, address, city, zipCode, country}));
//         props.history.push('/payment')        
//     }
//     return(
//         <div>
//             <CheckoutSteps step1 step2></CheckoutSteps>
//             <form className='form' onSubmit={submitHandler}>
//                 <div>
//                     <h1>Shipping Address</h1>
//                 </div>
//                 <div>
//                     <label htmlFor='fullName'>Full Name</label>
//                     <input
//                         type='text'
//                         id='fullName'
//                         placeholder='Enter Full Name'
//                         value={fullName}
//                         onChange={(e)=>setFullName(e.target.value)}
//                         required
//                     ></input>
//                 </div>
//                 <div>
//                     <label htmlFor='address'>Address</label>
//                     <input
//                         type='text'
//                         id='address'
//                         placeholder='Enter Address'
//                         value={address}
//                         onChange={(e)=>setAddress(e.target.value)}
//                         required
//                     ></input>
//                 </div>
//                 <div>
//                     <label htmlFor='city'>City</label>
//                     <input
//                         type='text'
//                         id='city'
//                         placeholder='Enter City'
//                         value={city}
//                         onChange={(e)=>setCity(e.target.value)}
//                         required
//                     ></input>
//                 </div>
//                 <div>
//                     <label htmlFor='zipCode'>Zip Code</label>
//                     <input
//                         type='text'
//                         id='zipCode'
//                         placeholder='Enter Zip Code'
//                         value={zipCode}
//                         onChange={(e)=>setZipCode(e.target.value)}
//                         required
//                     ></input>
//                 </div>
//                 <div>
//                     <label htmlFor='country'>Country</label>
//                     <input
//                         type='text'
//                         id='country'
//                         placeholder='Enter Country'
//                         value={country}
//                         onChange={(e)=>setCountry(e.target.value)}
//                         required
//                     ></input>
//                 </div>
//                 <div>
//                     <label />
//                     <button className='primary' type='submit'>Confirm Address</button>
//                 </div>
//             </form>
//         </div>
//     )
// }


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressScreen(props){
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
 
    if( !userInfo ){
        props.history.push('/signin')
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [zipCode, setZipCode] = useState(shippingAddress.zipCode);
    const [country, setCountry] = useState(shippingAddress.country);
    
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, address, city, zipCode, country}));
        props.history.push('/payment')        
    }
    return(
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor='fullName'>Full Name</label>
                    <input
                        type='text'
                        id='fullName'
                        placeholder='Enter Full Name'
                        value={fullName}
                        onChange={(e)=>setFullName(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        id='address'
                        placeholder='Enter Address'
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        id='city'
                        placeholder='Enter City'
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor='zipCode'>Zip Code</label>
                    <input
                        type='text'
                        id='zipCode'
                        placeholder='Enter Zip Code'
                        value={zipCode}
                        onChange={(e)=>setZipCode(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor='country'>Country</label>
                    <input
                        type='text'
                        id='country'
                        placeholder='Enter Country'
                        value={country}
                        onChange={(e)=>setCountry(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label />
                    <button className='primary' type='submit'>Confirm Address</button>
                </div>
            </form>
        </div>
    )
}