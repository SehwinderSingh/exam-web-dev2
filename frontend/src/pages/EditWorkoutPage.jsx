import { useParams, useNavigate } from "react-router-dom";

const EditWorkoutPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workout, setWorkout] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [workoutTitle, setWorkoutTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [sessionPrice, setSessionPrice] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("Beginner");
  const [requiredEquipment, setRequiredEquipment] = useState("");

 useEffect(() => {
     const fetchWorkout = async () => {
       try {
         const response = await fetch(`/api/workouts/${id}`);
         if (!res.ok) {
           throw new Error("Workout not found");
         } 
         const data = await response.json();
        
         setWorkoutTitle(data.workoutTitle);
         setDescription(data.description);
         setCity(data.location.city);
         setState(data.location.state);
         setSessionPrice(data.sessionPrice);
         setFitnessLevel(data.fitnessLevel);
         setRequiredEquipment(data.requiredEqquipment);
       } catch (err) {
         setError (err.message);
       } finally {
         setLoading(false);
       }
     };
     fetchWorkout()
   }, [id]);
  
  const submitForm = async (e) => {
    e.preventDefault();
    const updateWorkout = {
      workoutTitle,
      description,
      location: {
        city,
        state
      },
      sessionPrice,
      fitnessLevel,
      requiredEquipment };
    };

    try {
      const response = await fetch(`/api/workouts/${id}`, {
        method: "Put",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(updateWorkout)
      });
      if (!response.ok) {
        throw new Error("Failed to update workout");
      } 
      navigate(`/workouts/${id}`);
    } catch (err) {
      console.error(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="create">
      <h2>Update Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>Workout Title:</label>
        <input
          type="text"
          value={workoutTitle}
          onChange={(e) => setWorkoutTitle(e.target.value)}
          required
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <label>State:</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <label>Session Price:</label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={sessionPrice}
          onChange={(e) => setSessionPrice(e.target.value)}
          required
        />
        <label>Fitness Level:</label>
        <select
          value={fitnessLevel}
          onChange={(e) => setFitnessLevel(e.target.value)}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <label>Required Equipment:</label>
        <input
          type="text"
          value={requiredEquipment}
          onChange={(e) => setRequiredEquipment(e.target.value)}
          required
        />
        <button type="Update">Update Workout</button>
      </form>
    </div>
  );
};


export default EditWorkoutPage;
