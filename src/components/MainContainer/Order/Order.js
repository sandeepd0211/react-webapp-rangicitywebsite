import React from 'react'
import Grid from '@material-ui/core/Grid';
import { OrderWrap, DataBox, Title, Data } from './OrderStyles';

const Order = ({ data }) => {
  return (
    <OrderWrap>
      <Grid container spacing={1}>
        <Grid item lg={2}>
          <Grid item>
            <DataBox>
              <Title>Order Date:</Title>
              <Data>{data.orderDate}</Data>
            </DataBox>
          </Grid>
          <Grid item>
            <DataBox>
              <Title>Order Number:</Title>
              <Data>{data.orderNo}</Data>
            </DataBox>
          </Grid>
        </Grid>
        <Grid item lg={2}>
          <DataBox>
            <Title>Client's Measurements</Title>
            <Data>Room{data.clientMeasurements.room}:</Data>
            {Object.keys(data.clientMeasurements.walls).map((key) => {
              return (<Data>{`Wall${parseInt(key) + 1}: ${data.clientMeasurements.walls[key]}`}</Data>)
            })}
          </DataBox>
        </Grid>
        <Grid item lg={3}>
          <DataBox>
            <Title>Client Details</Title>
            {Object.keys(data.clientDetails).map(key => {
              return (<Data>{data.clientDetails[key]}</Data>)
            })}
          </DataBox>
        </Grid>
        <Grid item lg={2}>
          <DataBox>
            <Title>Assign Team Leader</Title>
            <Data>{data.assignedTo}</Data>
          </DataBox>
        </Grid>
        <Grid item lg={1.5}>
          <DataBox>
            <Title>Client Called:</Title>
            {(data.clientCalled
              ? <Data>Yes</Data>
              : <Data>No</Data>
            )}
          </DataBox>
        </Grid>
        <Grid item lg={1.5}>
          <DataBox>
            <Title>Appointment Date</Title>
            <Data>{data.appointmentDate}</Data>
          </DataBox>
        </Grid>
      </Grid>
    </OrderWrap>
  )
}

export default Order
