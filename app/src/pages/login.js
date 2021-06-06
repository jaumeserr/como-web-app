import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { login } from '../services/auth';
import PageHeading from '../components/PageHeading';
import Input from '../components/form/Input';
import { FormLayoutStyled } from '../UI';
import { Spacer, Button, StyledLink } from '../components/UI';
import MainLayout from '../components/layouts/MainLayout';

const FormStyled = styled.form`
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
  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: ''
  })
  const [borderError, setBorderError] = useState({
    emailBorder: false,
    passwordBorder: false
  })

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await login(formData.email, formData.password)
    const { success, error } = result
    if(success) {
      history.push('/')
    } else {
      const { code, message } = error;
      if(code === 'auth/invalid-email') {
        setErrors({emailError: message})
        setBorderError({emailBorder: true})
        setTimeout(() => {
          setBorderError({emailBorder: false})
          setErrors({emailError: ''})
        }, 3000);
      } else if (code === 'auth/wrong-password') {
        setErrors({passwordError: message})
        setBorderError({passwordBorder: true})
        setTimeout(() => {
          setBorderError({passwordBorder: false})
          setErrors({passwordError: ''})
        }, 3000);
      }
    }
  }
  
  return(
    <MainLayout>
      <FormLayoutStyled>
        <PageHeading title="Log In"/>
        <FormStyled onSubmit={handleFormSubmit}>
          <Input
            borderError={borderError.emailBorder}
            label="Email address *"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })} 
          />
          <div>
            &nbsp;
            {
              errors && <span style={{ color: 'red', fontSize: '13px' }}>{errors.emailError}</span>
            }
          </div>
          <Spacer height='15px' />
          <Input
            borderError={borderError.passwordBorder}
            type="password"
            label="Password *"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(value) => setFormData({ ...formData, password: value })} 
          />
          <div>
            &nbsp;
            {
              errors && <span style={{ color: 'red', fontSize: '13px' }}>{errors.passwordError}</span>
            }
          </div>
          <Spacer height="20px" />
          <p>Forgot your password?</p>
          <Spacer />
          <Button style={{ width: '100%'}}>LOG IN</Button>
          <div className="form__separator">
            <div></div>
            <span>or</span>
            <div></div>
          </div>
          <StyledLink style={{ display: 'block' }} to="/signup">CREATE AN ACCOUNT</StyledLink>
        </FormStyled>
      </FormLayoutStyled>
    </MainLayout>
  );
}

export default LoginPage;