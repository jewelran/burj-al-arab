import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [singInUse, setSignInUser] = useContext(UserContext)
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookings?email='+singInUse.email, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization:`bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    return (
        <div>
            <h3>total {bookings.length} bookings</h3>
            {
                bookings.map(book => <div style = {{ margin: " 1%",borderRadius: "10px",  backgroundColor:"orange",width:"30%", height:"200px" , float:"left"}}>
                    <h3>name: {book.name}</h3>
                    <p>form : {new Date(book.checkIn).toDateString('dd/MM/yyyy')}</p>
                    <p>to: {new Date(book.checkOut).toDateString('dd/MM/yyyy')}</p>

                </div>)
            }
        </div>
    );
};

export default Bookings;