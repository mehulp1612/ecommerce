// import React, { useState,useEffect } from 'react';
// import {Link} from 'react-router-dom';
// import {useDispatch,useSelector,} from 'react-redux';
// import { register } from '../actions/userActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';


// export default function RegisterScreen(props){
    
//     const [email,setEmail]=useState('');
//     const [password,setPassword]=useState('');
//     const [name,setName]=useState('');
//     const [confirmpassword,setConfirmPassword]=useState('');

//     const redirect=props.location.search
//     ?props.location.search.split('=')[1]
//     :'/';

//     const userRegister=useSelector((state)=>state.userRegister);
//     const {userInfo,loading,error}=userRegister;

//     const dispatch=useDispatch();

//     useEffect(()=>{
//         if(userInfo){
//             props.history.push(redirect);
//         }
//     },[props.history,redirect,userInfo])

//     const submitHandler=(e)=>{
//         e.preventDefault();
//         if(password!==confirmpassword)
//             {alert("invalid");}
        
//         else
//         {dispatch(register(name,email,password));}
//     };

    


//     return(
//         <div>
//             <form className='form' onSubmit={submitHandler}> 
//                 <div>
//                     <h1>Register</h1>
//                 </div>
//                 {loading&&<LoadingBox></LoadingBox>}
//                 {error && <MessageBox variant='danger'>{error}</MessageBox>}
//                 <div>
//                 <label htmlFor="name">Name</label>
//                     <input
//                     type="name"
//                     required
//                     class="name"
//                     placeholder="Enter name"
//                     onChange={(e)=>setName(e.target.value)}></input>
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email Address</label>
//                     <input
//                     type="email"
//                     required
//                     class="email"
//                     placeholder="Enter email"
//                     onChange={(e)=>setEmail(e.target.value)}></input>
//                 </div>
//                 <div>
//                 <label htmlFor="password">Password</label>
//                     <input
//                     type="password"
//                     required
//                     class="password"
//                     placeholder="Enter password"
//                     onChange={(e)=>setPassword(e.target.value)}></input>

//                 </div>
//                 <div>
//                 <label htmlFor="confirmpassword">Confirm Password</label>
//                     <input
//                     type="password"
//                     required
//                     class="confirmpassword"
//                     placeholder="Confirm password"
//                     onChange={(e)=>setConfirmPassword(e.target.value)}></input>

//                 </div>
//                 <div>
//                     <label />
//                     <button className="primary" type="submit">
//                         Register
//                     </button>
//                 </div>
//                 <div>
//                     <label />
//                     <div>
//                         New Here?
//                         <Link to="/register">Register</Link>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }





import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
//import ErrorBox from '../components/ErrorBox';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const userRegister = useSelector((state)=> state.userRegister);
    const {userInfo, loading, error} = userRegister;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmpassword){
            alert("Password and ConfirmPassword doesn't match!");
        }else{
            dispatch(register(name, email, password));
        }
    }

    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Register</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant='danger'>{error}</MessageBox>}
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='name'
                        required
                        id='name'
                        placeholder='Enter Your Name'
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='email'
                        required
                        id='email'
                        placeholder='Enter Email'
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        required
                        id='password'
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor='confirmpassword'>Confirm Password</label>
                    <input
                        type='password'
                        required
                        id='confirmpassword'
                        placeholder='Enter Password Again'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className='primary' type='submit'>
                        Register
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an Account? {' '}
                        <Link to={`/signin?redirect=${redirect}`}>SignIn Here</Link>
                    </div>
                </div>
            </form>
        </div>
    )

}
