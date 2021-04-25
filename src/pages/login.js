import styled from 'styled-components';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { login } from '../services/auth';
import Heading from '../components/Heading';
import Breadcrum from '../components/Breadcrum';
import { InputStyled, ButtonStyled, FormLayoutStyled } from '../UI';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
  }
  p{
    margin-bottom: 20px;
  }
  .form__separator {
    display: flex;
    margin: 20px 0;
    div:first-child, div:last-child {
      width: 100%;
      border-bottom: 1px solid var(--principal);
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
    // <FormLayoutStyled>
    //   <Breadcrum opt1="Home" opt2="Account" link1="/" link2="/login" />
    //   <Heading title="Log In"/>
    //   <FormStyled>
    //     <label htmlFor="">Email address *</label>
    //     <InputStyled />
    //     <label>Password *</label>
    //     <InputStyled />
    //     <p>Forgot your password?</p>
    //     <ButtonStyled type="submit">
    //       LOG IN
    //     </ButtonStyled>
    //     <div className="form__separator">
    //       <div></div>
    //       <span>or</span>
    //       <div></div>
    //     </div>
    //     <ButtonStyled
    //       primary
    //       type="submit"
    //     >
    //       <Link to="/register">
    //         CREATE AN ACCOUNT
    //       </Link>
    //     </ButtonStyled>
    //   </FormStyled>
    // </FormLayoutStyled>
    <>
      <form onSubmit={handleFormSubmit}>
        <input 
          label="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input 
          label="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button>Enviar</button>
      </form>
    </>
  );
}

export default LoginPage;