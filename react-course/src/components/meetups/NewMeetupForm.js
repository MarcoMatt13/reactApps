import { useRef } from "react";
import NewMeetupPage from "../../pages/NewMeetup";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function SubmitHandler(event) {
    event.preventDefault();
    const enteredTtitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTtitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="title" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            rows="5"
            required
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button className={classes.actions}>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
