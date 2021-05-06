import React from 'react';
import Room from './../Room/Room';

const Home = () => {
    const rooms =[
        {
          title:"Standard single room",
          description:"Standard single rooms are designed in open",
          imgUrl: "https://i.pinimg.com/736x/8c/39/71/8c3971374e791a46e70b1813af4eddd9.jpg",
          bed:1,
          capacity: 1,
          bedType: "Single",
          avatar: "S",
          price: 119,
    
        },
        {
          title:"Couple power room",
          description:"Standard single rooms are designed in open",
          imgUrl: "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/deluxe-one-bedroom-suite/burj-al-arab-1-bedroom-suite_6-4_landscape/burj-al-arab-1-bedroom-suite_6-4_landscape__square.jpg",
          bed:1,
          capacity: 2,
          bedType: "Double",
          avatar: "D",
          price: 119,
    
        },
        {
          title:"Standard family room",
          description:"Standard single rooms are designed in open",
          imgUrl: "https://cdn1.goibibo.com/voy_ing/t_g/c1ecfc84976311e7ae5d0a4cef95d023.jpg",
          bed:2,
          capacity: 4,
          bedType: "Family",
          avatar: "F",
          price: 119,
    
        },
      ]
    return (
         <div style={{display:"flex",margin: "0 auto",width:"80%" ,padding: "10px"}}>
            {
                rooms.map(room => <Room  key ={room.badType} room = {room}></Room>)
            }
        </div>
    );
};

export default Home;