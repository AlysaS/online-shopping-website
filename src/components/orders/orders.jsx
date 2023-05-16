import * as React from "react";
import { Typography, Box } from "@mui/material";
import { useContext } from "react";
import { OrdersContext } from "../../state/orders/orders-context";
import { OrderItem } from "./orderItem";


export function Orders() {


    const {ordersState, ordersDipatch} = useContext(OrdersContext);

    const reversedOrders = [...ordersState.orders].reverse();


  return (
    <Box>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ fontWeight: "bold", textAlign: "center", marginBlock: 5 }}
      >
        Orders
      </Typography>


    {reversedOrders.map((order) => 
        <Box sx={{border:1,width:"65%", my:2, mx:"auto"}}>
          <Box sx={{backgroundColor:"lightgrey", fontWeight:"bold", padding:2}}>
            Order Placed: {order.date.getMonth()}/{order.date.getDate()}/{order.date.getFullYear()}  
          </Box>
            {order.orderItems.map( (item) => 
            
            <OrderItem item ={item} />
            
            )}
        </Box> 
    )}

    </Box>
  );
}
