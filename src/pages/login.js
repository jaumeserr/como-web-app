import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { login } from '../services/auth';
import PageHeading from '../components/PageHeading';
import Input from '../components/form/Input';
import { FormLayoutStyled } from '../UI';
import { Spacer, Button, StyledLink } from '../components/UI';
import FormLayout from '../components/layouts/FormLayout';

const FormStyled = styled.form`
  /* display: flex;
  flex-direction: column; */

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

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await login(formData.email, formData.password)
    console.log("🚀 ~ file: login.js ~ line 39 ~ handleFormSubmit ~ result", result)
    if(result) {
      history.push('/')
    }
  }
  
  return(
    <FormLayout>
      <FormLayoutStyled>
        <PageHeading title="Log In"/>
        <FormStyled onSubmit={handleFormSubmit}>
          <Input
            label="Email address *"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })} 
          />
          <Spacer />
          <Input
            type="password"
            label="Password *"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })} 
          />
          <Spacer height="10px" />
          <p>Forgot your password?</p>
          <Spacer />
          <Button>LOG IN</Button>
          <div className="form__separator">
            <div></div>
            <span>or</span>
            <div></div>
          </div>
          <StyledLink to="/signup">CREATE AN ACCOUNT</StyledLink>
        </FormStyled>
      </FormLayoutStyled>
    </FormLayout>
  );
}

export default LoginPage;