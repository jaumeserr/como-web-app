import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Heading from '../components/Heading';
import Breadcrum from '../components/Breadcrum';
import {
  InputStyled,
  ButtonStyled, 
  FormLayoutStyled
} from '../styledComponents';

const LoginStyled = styled.section`
  width: 500px;
  margin: 0 auto;

  @media (min-width: 768px) {
    background-color: red;
  }
`

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
      border-bottom: 1px solid var(--lightgray);
      height: 13px;
    }
    span {
      padding: 0 15px
    }
  }
`

const Login = () => {
  return(
    <FormLayoutStyled>
      <Breadcrum
        opt1="Home"
        opt2="Account"
        link1="/"
        link2="/login"
      />
      <Heading title="Log In"/>
      <FormStyled>
        <label htmlFor="">Email address *</label>
        <InputStyled />
        <label>Password *</label>
        <InputStyled />
        <p>Forgot your password?</p>
        <ButtonStyled
          type="submit"    
        >
          LOG IN
        </ButtonStyled>
        <div className="form__separator">
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <ButtonStyled
          primary
          type="submit"
        >
          <Link to="/register">
            CREATE AN ACCOUNT
          </Link>
        </ButtonStyled>
      </FormStyled>
    </FormLayoutStyled>
  );
}

export default Login;