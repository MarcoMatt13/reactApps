import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  const history = useNavigate;

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm />
    </section>
  );
}
export default NewMeetupPage;
