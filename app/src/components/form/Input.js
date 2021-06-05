import styled from 'styled-components';

const Input = styled.input`
  background-color: white;
  border: ${props => {
    if (props.borderError === true) {
      return '1px solid red';
    }
    return `1px solid #e8e8e8`
  }};
  outline: none;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  &::placeholder {
    color: lightgray;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`

const InputComponent = ({ type = 'text', label, name, value, onChange, placeholder, borderError }) => {

  const handleOnChange = (event) => {
    const { value } = event.target;
    onChange(value);
  }

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        borderError={borderError}
      />
    </div>
  )
}

export default InputComponent;