import React from 'react'
import { OrderContainer, OrderTitle, OrderList } from './MainContainerStyles';
import OrderData from '../MainContainer/data.json';
import Order from './Order/Order';
const Orders = () => {
  return (
    <OrderContainer>
      <OrderTitle>New Orders</OrderTitle>
      <OrderList>
        {OrderData.map((order, index) => {
          return (
            <Order data={order} key={index}/>
          );
        }) }
      </OrderList>
    </OrderContainer>
  )
}

export default Orders
