import styled from 'styled-components';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { userSignup } from '../controllers/user';

import Breadcrum from '../components/Breadcrum';
import PageHeading from '../components/PageHeading';
import { FormLayoutStyled } from '../UI';
import Input from '../components/form/Input';
import { Spacer, Button, StyledLink } from '../components/UI';
import MainLayout from '../components/layouts/MainLayout';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  p {
    font-weight: 300;
    line-height: 1.8;
  }

  .form__separator {
    display: flex;
    margin: 20px 0;
    
    div:first-child, div:last-child {
      width: 100%;
      border-bottom: 1px solid ${props => props.theme.color.primary};
      height: 13px;
    }

    span {
      padding: 0 15px
    }
  }
`

const SignupPage = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({ name: '', lastname: '', email: '', password: '' });
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await userSignup(formData);
    console.log("🚀 ~ file: signup.js ~ line 42 ~ handleFormSubmit ~ result", result)
    if (result) {
      history.push('/');
    }
  }
  return(
    <MainLayout>
      <FormLayoutStyled>
        <Breadcrum opt1="Home" opt2="Create Account" link1="/" link2="/register" />
        <PageHeading title="Register" />
        <FormStyled onSubmit={handleFormSubmit} >
          <Input
            label="First name"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={(value) => setFormData({ ...formData, name: value })} 
          />
          <Spacer />
          <Input
            label="Last name"
            name="lastname"
            placeholder="Enter last name"
            value={formData.lastname}
            onChange={(value) => setFormData({ ...formData, lastname: value })} 
          />
          <Spacer />
          <Input
            label="Email Address"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })} 
          />
          <Spacer />
          <Input
            type="password"
            label="Password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })} 
          />
          <Spacer height="10px"/>
          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.</p>
          <Spacer />
          <Button>
            REGISTER
          </Button>
          <div className="form__separator">
            <div></div>
            <span>or</span>
            <div></div>
          </div>
          <StyledLink to="/login">LOG IN</StyledLink>
        </FormStyled>
      </FormLayoutStyled>    
    </MainLayout>
  );
}

export default SignupPage;