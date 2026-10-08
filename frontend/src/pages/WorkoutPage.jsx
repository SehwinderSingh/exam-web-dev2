import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect} from "react";

const WorkoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch(`/api/workouts/${id}`);
        if (!res.ok) {
          throw new Error("Workout not found");
        } 
        const data = await response.json();
        setWorkout(data);
      }catch (err) {
        setError (err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkout()
  }, [id]);

  const deleteWorkout = async () => {
    try {
      const response = await fetch(`/api/workouts/${id}`, {
      method: "Delete"
      });
      if (!response.ok) {
        throw new Error ("Failed to delete workout");
      }
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="rental-preview">
      <h2>Workout Details</h2>
      <p>{workout.workoutTitle}</p>
      <p>Description: {workout.description}</p>
      <p>City: {workout.location.city}</p>
      <p>State:{workout.location.state}</p>
      <p>Session Price: {workout.sessionPrice}</p>
      <p>Fitness Level: {workout.fitnessLevel}</p>
      <p>Status: {workout.status}</p>
      <p>Required Equipment: {workout.requiredEquipment}</p>

      <button onClick={deleteWorkout}>Delete Workout</button>
      <Link to= {`/edit-workout/${id}`}>Edit Workout</Link>
    </div>
  );
};

export default WorkoutPage;
