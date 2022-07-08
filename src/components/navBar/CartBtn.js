import React, { useState } from "react";
import { ReactComponent as CartBtnSvg } from "../../assets/images/cart.svg";
import styled from "styled-components";

const CartBtnStyled = styled.div`
  position: relative;

  button {
    background: none;
    border: none;
  }
  .cartQtyIndicator {
    content: ${({ cartQty }) => JSON.stringify(cartQty)};
    position: absolute;
    background-color: #3d69e1;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
    color: white;
  }
`;

export default function CartBtn() {
  const [cartQty, setCartQty] = useState(5);
  return (
    <CartBtnStyled cartQty={cartQty}>
      {cartQty > 0 && <div className='cartQtyIndicator'>{cartQty}</div>}
      <button>
        <CartBtnSvg />
      </button>
    </CartBtnStyled>
  );
}
