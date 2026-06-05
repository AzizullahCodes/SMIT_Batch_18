import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router';
import { privateRoutesData, publicRoutesData } from '../../utils/all-routes';

const Login = () => {

  const [formStates, setFormStates] = useState({
    loader: false,
    email: "",
    password: ''
  });
  const navigate = useNavigate();

  const submitForm = () => {
    // Enable loader...!
    setFormStates({
      ...formStates,
      loader: true
    });

    console.log("You have logged in successfully!");

    localStorage.setItem("userAuthStatus", JSON.stringify(true));

    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  useEffect(() => {
const isAuthenticated = JSON.parse(localStorage.getItem('userAuthStatus'));
    // console.log('User auth status: ', isAuthenticated);

    if (isAuthenticated) navigate('/');

    else if (isAuthenticated == null || !isAuthenticated) {
      localStorage.setItem('userAuthStatus', JSON.stringify(false));
    }
  }, []);

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <h1 style={{ textAlign: "center" }}> Login </h1>

      <MDBInput
        wrapperClass='mb-4'
        label='Email address'
        id='form1'
        type='email'
        value={formStates.email}
        onChange={(e) => {
          setFormStates({
            ...formStates,
            email: e.target.value
          });
        }}
      />
      <MDBInput
        wrapperClass='mb-4'
        label='Password'
        id='form2'
        type='password'
        value={formStates.password}
        onChange={(e) => {
          setFormStates({
            ...formStates,
            password: e.target.value
          });
        }}
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn
        className="mb-4"
        onClick={submitForm}
        disabled={formStates.loader}
      >
        Sign in
      </MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm" />
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
  );
}

export default Login;