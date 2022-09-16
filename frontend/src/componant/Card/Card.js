import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";

import classes from "./Card.module.css";
import FormModel from "../FormModel/FormModel";

function GroupExample({
  _id,
  name,
  description,
  updatedat,
  overallRating,
  image,
  listOfReviews,
}) {
  return (
    <>
      <Card className={classes.card}>
        <Card.Img
          alt={name}
          variant="top"
          src={image}
          onError={(e) =>
            (e.target.src = "https://www.w3schools.com/html/pic_trulli.jpg")
          }
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{`Last updated ${updatedat.day_s} day(s) and ${updatedat.hour_s} hour(s) ago`}</small>
          <div className={classes.rating_reviews}>
            <ReactStars
              count={5}
              value={overallRating}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              edit={false}
              activeColor="#ffd700"
            />
            <span className={classes.list_of_reviews}>
              ({listOfReviews.length})
            </span>
          </div>
          <FormModel
            _id={_id}
            image={image}
            name={name}
            description={description}
          />
        </Card.Footer>
      </Card>
    </>
  );
}

export default GroupExample;
