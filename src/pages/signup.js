import styled from 'styled-components';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { signup } from '../services/auth';

import Breadcrum from '../components/Breadcrum';
import Heading from '../components/Heading';
import { InputStyled, ButtonStyled, FormLayoutStyled } from '../UI';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
  }
  p{
    margin-bottom: 20px;
    font-weight: 300;
    line-height: 1.8;
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

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: '', lastname: '', email: '', password: '' })
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await signup(formData.email, formData.password)
    console.log(result)
    if(result) {
      history.push('/')
    }
  }
  return(
    // <FormLayoutStyled>
    //   <Breadcrum
    //     opt1="Home"
    //     opt2="Create Account"
    //     link1="/"
    //     link2="/register"
    //   />
    //   <Heading title="Register" />
    //   <FormStyled>
    //     <label htmlFor="">First Name</label>
    //     <InputStyled />
    //     <label htmlFor="">Last Name</label>
    //     <InputStyled />
    //     <label htmlFor="">Email address *</label>
    //     <InputStyled />
    //     <label>Password *</label>
    //     <InputStyled />
    //     <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.</p>
    //     <ButtonStyled
    //       type="submit"    
    //     >
    //       REGISTER
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
    //       <Link to="/login">
    //         LOG IN
    //       </Link>
    //     </ButtonStyled>
    //   </FormStyled>
    // </FormLayoutStyled>
    <form onSubmit={handleFormSubmit}>
      <input
        label="name"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value})}
      />
      <input
        label="lastname"
        name="lastname"
        placeholder="Lastname"
        value={formData.lastname}
        onChange={(e) => setFormData({ ...formData, lastname: e.target.value})}
      />
      <input
        label="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value})}
      />
      <input
        label="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value})}
      />
      <button>Enviar</button>
    </form>
  );
}

export default SignupPage;