import styled from 'styled-components';

const Input = styled.input`
  background-color: white;
  border: 1px solid ${props => props.theme.color.primary};
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

const InputComponent = ({ type = 'text', label, name, value, onChange, placeholder }) => {

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
      />
    </div>
  )
}

export default InputComponent;