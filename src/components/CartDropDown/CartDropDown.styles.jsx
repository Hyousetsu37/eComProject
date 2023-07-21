import styled from "styled-components";
import { Button } from "../Button/Button.component";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 100px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartButton = styled(Button)`
  margin-top: auto;
`;
