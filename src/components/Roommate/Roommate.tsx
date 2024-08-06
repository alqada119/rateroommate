import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoommates } from "../../store/actions/actions";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Define the structure of a Roommate item
interface Roommate {
  Name: string;
  CleanRating: number;
  QuietRating: number;
  SmellRating: number;
  RoomName: string;
  Description: string;
}

// Define the structure of the state
interface RootState {
  allRoommates: {
    Roommates: Roommate[];
  };
}

function RoommateComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_URL+"/roommate/")
      .then((res) => {
        dispatch(setRoommates(res.data));
      })
      .catch((err) => {
        console.error("Error fetching roommates:", err);
      });
  }, [dispatch]);

  // Correctly typed state selector
  const roommateState = useSelector((state: RootState) => state.allRoommates);

  // Ensure `Roommates` is present before mapping
  const roommateItems = roommateState.Roommates?.map((roommate, index) => (
    <div key={index} className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{roommate.Name}</h5>
        <p className="card-text">Clean Rating: {roommate.CleanRating} / 5</p>
        <p className="card-text">Quiet Rating: {roommate.QuietRating} / 5</p>
        <p className="card-text">Smell Rating: {roommate.SmellRating} / 5</p>
        <p className="card-text">Room Name: {roommate.RoomName}</p>
        <p className="card-text"><strong>Description:</strong> {roommate.Description}</p>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Roommates</h2>
      {roommateItems.length > 0 ? (
        roommateItems
      ) : (
        <p>No roommates found.</p>
      )}
    </div>
  );
}

export default RoommateComponent;
