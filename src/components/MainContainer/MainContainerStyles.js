import styled from "styled-components";

export const OrderContainer = styled.div`
  width: 100%;
`;
export const OrderTitle = styled.div`
  width: 100%;
  font-weight: bolder;
  font-size: 1.3rem;
  color: #61c8a6;
  padding: 80px 0px 5px 20px;
  border-bottom: 2px solid lightgrey;
`;
export const OrderList = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  overflow-y: scroll;
  min-height: 100%;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #61C8A6;
    border-radius: 10px;
  }
`;
export const OrderBox = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid grey;
`;
