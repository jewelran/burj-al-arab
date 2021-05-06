import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
export default function Room({ room }) {
  const { imgUrl, title, avatar, price, bedType, capacity, bed } = room;
  const classes = useStyles();
  return (
    <div style={{ margin: "10px" }} className="">
      <Card style={{ flat: "left" }} className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={room.imgUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {room.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              description: {room.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to = {`/book/${bedType}`}>
            <Button variant="contained" color="primary">
              Booking now...
            </Button>
          </Link>
          <Typography>
            <LocalHotelIcon fontSize="small" /> {bed} <small>{bedType}</small>{" "}
            <small>Price:{price}</small>
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}
