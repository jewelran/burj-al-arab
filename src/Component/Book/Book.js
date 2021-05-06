import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { UserContext } from './../../App';
import Button from "@material-ui/core/Button";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Bookings from "../Bookings/Bookings";
const Book = () => {
  const [singInUse, setSignInUser] = useContext(UserContext)
  console.log(singInUse);
  const { bedType } = useParams();
  const [selectedDate, setSelectedDate] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });

  const handleCheckInDate = (date) => {
    const newDates = {...selectedDate}
    newDates.checkIn = date
    setSelectedDate(newDates);
  };
 const handleCheckOutDate = (date) => {
      const newDates = {...selectedDate}
      newDates.checkOut = date
      setSelectedDate(newDates)
 }


const handleBook =  () => {
  const newBooking= {...selectedDate, ...singInUse}
  fetch('http://localhost:5000/addBooking',{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(newBooking)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  console.log("booking", newBooking);
}


  const rooms = [
    {
      title: "Standard single room",
      description: "Standard single rooms are designed in open",
      imgUrl:
        "https://i.pinimg.com/736x/8c/39/71/8c3971374e791a46e70b1813af4eddd9.jpg",
      bed: 1,
      capacity: 1,
      bedType: "Single",
      avatar: "S",
      price: 119,
    },
    {
      title: "Couple power room",
      description: "Standard single rooms are designed in open",
      imgUrl:
        "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/deluxe-one-bedroom-suite/burj-al-arab-1-bedroom-suite_6-4_landscape/burj-al-arab-1-bedroom-suite_6-4_landscape__square.jpg",
      bed: 1,
      capacity: 2,
      bedType: "Double",
      avatar: "D",
      price: 119,
    },
    {
      title: "Standard family room",
      description: "Standard single rooms are designed in open",
      imgUrl:
        "https://cdn1.goibibo.com/voy_ing/t_g/c1ecfc84976311e7ae5d0a4cef95d023.jpg",
      bed: 2,
      capacity: 4,
      bedType: "Family",
      avatar: "F",
      price: 119,
    },
  ];
  const find = rooms.find((pd) => pd.bedType === bedType);
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "gray", color: "white" }}
    >
      <div className="">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Check in date"
              value={selectedDate.checkIn}
              onChange={handleCheckInDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="dd/MM/yyyy"
              value={selectedDate.checkOut}
              onChange={handleCheckOutDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Button onClick = {handleBook} variant="contained" color="primary">
            Book now!
          </Button>
        </MuiPickersUtilsProvider>
      </div>
      <div className="">
        <h2>{find.title}</h2>
        <h3>{find.description}</h3>
        <img style={{ width: "30%" }} src={find.imgUrl} alt="" />
        <h3>price:{find.price}</h3>
        <h3>
          Bad type: {find.badType} <span>total bad: {find.bed}</span>
        </h3>
      </div>

      <Bookings> </Bookings>
    </div>
  );
};

export default Book;
