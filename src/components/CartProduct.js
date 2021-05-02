import styled from 'styled-components';

const CartProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  border: 1px solid ${props => props.theme.color.border};
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
  padding-right: 20px;

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    text-align: center;

    p {
      margin-bottom: 20px;
      font-size: 20px;
    }
  }

  img {
    width: 100px;
    margin-right: 20px;
  }
`

const CartProduct = ({ image, name, shortDescription, price }) => {
  return(
    <CartProductStyled>
      <div className="left">
        <img src={image} alt={name}/>
        <div>
          <p>{name}</p>
          <p>{shortDescription}</p>
        </div>
      </div>
      <div className="right">
        <p>{price}</p>
        <button>Remove Product</button>
      </div>
    </CartProductStyled>
  )
}

export default CartProduct;