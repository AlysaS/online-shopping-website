import * as React from "react";
import { Typography, Box , Card, Stack, Grid} from "@mui/material";
import { useContext } from "react";
import { OrdersContext } from "../../state/orders/orders-context";
import { OrderItem } from "./orderItem";
import noOrdersImage from "../../pictures/noOrdersImage.png";


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

    {ordersState.orders.length !=0 ? (
    <Box>
    {reversedOrders.map((order) => 
        <Card sx={{border:1,width:"55%", my:2, mx:"auto"}}>
          <Box sx={{backgroundColor:"lightgrey", fontWeight:"bold", fontSize:20,padding:2}}>
            Order Placed: {order.date.getMonth()}/{order.date.getDate()}/{order.date.getFullYear()}  
          </Box>
          <Box sx={{overflowX: 'auto',
        padding: '10px', height:400}}>
          <Grid container spacing={2} justifyContent="space-evenly" wra="nowrap" >
            {order.orderItems.map( (item) => 
            
            <Grid item key={item.id}>
                <OrderItem item ={item} />
            </Grid>
            
            
            )}
            </Grid></Box>
        </Card> 
    )}</Box>
): (
  <Card sx={{border:1, width:"50%", mx:"auto", py:5}}>
            <Stack direction = "row" spacing={6} sx={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <Box component="img" src={noOrdersImage} alt="noOrdersImage" sx={{width:170}}/>
                <Typography sx={{textAlign: "center", fontSize:30, fontWeight:"bold"}}>You do not have any past orders</Typography>
            </Stack>
            </Card>
)}
    </Box>
  );
}
