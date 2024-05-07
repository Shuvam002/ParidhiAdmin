import React, { useState } from "react";
import axios from "axios";
import "./Crdstyle.css";

const CRDshow = () => {
  const [tid, setTid] = useState(null);
  const [data, setData] = useState(null);
  const [played, setPlayed] = useState(false);

  const fetchData = (tid) => {
    // axios
    //   .get(`/your-backend-endpoint/${tid}`)
    //   .then((response) => {
    //     setData(response.data);
    //     setPlayed(response.data.played);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
    const response = {
      id: 123,
      teamname: "Team A",
      selectedcodingevent: "codequest",
      gid1: "abc123",
      gid2: "def456",
      number1: "9876543210",
      tid: "tid123",
      played: false,
      paid: true,
    };
    setData(response);
    setPlayed(response.played);
  };

  const handlePlayedToggle = () => {
    setPlayed(!played);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tid && data) {
      const updatedData = { ...data, played: played };
      console.log("Updated Data to be sent to the backend:", updatedData);
      // Example: axios.post('/your-backend-endpoint', updatedData).then(...).catch(...)
    }
  };

  const handleButtonClick = () => {
    if (tid) {
      fetchData(tid);
    }
  };

  return (
    <div className="your-played-component">
      <div className="input-section">
        <input
          type="text"
          value={tid === null ? "" : tid}
          onChange={(e) => setTid(e.target.value)}
          placeholder="Enter TID"
        />
        <button onClick={handleButtonClick}>Fetch Data</button>
      </div>
      <form onSubmit={handleSubmit} className="form-section">
        {data && (
          <>
            <p>
              <strong>Team Name:</strong> {data.teamname}
            </p>
            <p>
              <strong>Selected Coding Event:</strong> {data.selectedcodingevent}
            </p>
            <p>
              <strong>GID 1:</strong> {data.gid1}
            </p>
            <p>
              <strong>GID 2:</strong> {data.gid2}
            </p>
            <p>
              <strong>Number 1:</strong> {data.number1}
            </p>
            <p>
              <strong>TID:</strong> {data.tid}
            </p>
            <div className="played-section">
              <label>
                <input
                  type="checkbox"
                  checked={played}
                  onChange={handlePlayedToggle}
                />
                <span>Played</span>
              </label>
            </div>

            <p>
              <strong>Paid:</strong> {data.paid ? "Yes" : "No"}
            </p>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default CRDshow;