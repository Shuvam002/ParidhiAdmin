import { useState, useEffect } from "react";
import axios from "axios";
import "./Crdstyle.css";
import { useParams, useNavigate } from "react-router-dom";

const CRDshow = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const { eventName } = useParams();
  const apiUrl = String(import.meta.env.VITE_API_ADMIN);
  const eventInfo = {
    web_minds: {
      name: "Web Minds",
      apiToGetList: `${apiUrl}/crd/coding/web-minds`,
      apiToSendPlayed: `${apiUrl}/crd/coding/web-minds/`,
    },
    code_quest: {
      name: "Code Quest",
      apiToGetList: `${apiUrl}/crd/coding/code-quest`,
      apiToSendPlayed: `${apiUrl}/crd/coding/code-quest/`,
    },
    codezen: {
      name: "CodeZen",
      apiToGetList: `${apiUrl}/crd/coding/codezen`,
      apiToSendPlayed: `${apiUrl}/crd/coding/codezen/`,
      api: ``,
    },

    roboKlassiker: {
      name: "Robo Klassiker",
      apiToGetList: `${apiUrl}/crd/robotics/robo-klassiker`,
      apiToSendPlayed: `${apiUrl}/crd/robotics/robo-klassiker/`,
    },
    triathlon: {
      name: "Triathlon",
      apiToGetList: `${apiUrl}/crd/robotics/triathlon`,
      apiToSendPlayed: `${apiUrl}/crd/robotics/triathlon/`,
    },

    line_trekker: {
      name: "Line Trekker",
      apiToGetList: `${apiUrl}/crd/robotics/line-trekker`,
      apiToSendPlayed: `${apiUrl}/crd/robotics/line-trekker/`,
    },

    setu_bandhan: {
      name: "Setu Bandhan",
      apiToGetList: `${apiUrl}/crd/robotics/setu-bandhan`,
      apiToSendPlayed: `${apiUrl}/crd/civil/setu-bandhan/`,
    },
    track_o_treasure: {
      name: "Track o Treasure",
      apiToGetList: `${apiUrl}/crd/civil/tot`,
      apiToSendPlayed: `${apiUrl}/crd/civil/tot/`,
    },
    mega_arch: {
      name: "Mega Arch",
      apiToGetList: `${apiUrl}/crd/civil/mega-arch`,
      apiToSendPlayed: `${apiUrl}/crd/civil/mega-arch/`,
    },

    electriquest: {
      name: "Electriquest",
      apiToGetList: `${apiUrl}/crd/civil/electri-quest`,
      apiToSendPlayed: `${apiUrl}/crd/robotics/electri-quest/`,
    },

    throne_of_bots_8kg: {
      name: "TOB 8kg",
      apiToGetList: `${apiUrl}/crd/robotics/war-8kg`,
      apiToSendPlayed: `${apiUrl}/crd/robotics/war-8kg/`,
    },
    throne_of_bots_15kg: {
      name: "TOB 15kg",
      apiToGetList: `${apiUrl}/crd/robotics/war-15kg`,
      apiToSendPlayed: `${apiUrl}/crd/robotics/war-15kg/`,
    },

    table_tennis: {
      name: "Table Tennis",
      apiToGetList: `${apiUrl}/crd/general/table-tennis`,
      apiToSendPlayed: `${apiUrl}/crd/general/table-tennis/`,
    },
    binge_quiz: {
      name: "Binge Quiz",
      apiToGetList: `${apiUrl}/crd/general/binge-quiz`,
      apiToSendPlayed: `${apiUrl}/crd/general/binge-quiz/`,
    },
    carrom: {
      name: "Carrom",
      apiToGetList: `${apiUrl}/crd/general/carrom`,
      apiToSendPlayed: `${apiUrl}/crd/general/carrom/`,
    },
  };
  const event = eventInfo[eventName];

  const listOfParticipants = async () => {
    try {
    
      console.log(event.apiToGetList);

      const response = await axios.get(event.apiToGetList);

      console.log("Response", response);

      if (response.status === 200) {
        setPlayers(response.data);
      } else if (response.status === 404) {
        alert("No data found");
      }
    } catch (error) {
      console.error("Error fetching participant list:", error);
      alert("Something went wrong");
    }
  };

  const handleAction = async (player) => {
    try {
      const updatedPlayer = { ...player, played: true };
      console.log(updatedPlayer);
      console.log("Player Data with Played true:", updatedPlayer);
      console.log("tid >>", updatedPlayer.tid);
      console.log(
        `${event.apiToSendPlayed}${updatedPlayer.tid}/${updatedPlayer.played}`
      );
      const response = await axios.put(
        `${event.apiToSendPlayed}${updatedPlayer.tid}/${updatedPlayer.played}`
      );

      // const response = { status: 200 };

      if (response.status === 200) {
        listOfParticipants();
      } else if (response.status === 400) {
        alert("some error occured");
      }
    } catch (error) {
      console.error("Error performing action:", error);
    }
  };

  const twoStepCheck = (player) => {
    const confirmed = window.confirm(
      "Are you sure you want to perform this action?"
    );
    if (confirmed) {
      handleAction(player);
    } else {
      console.log("action was cancelled");
    }
  };
  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      navigate("/login");
    } else {
      listOfParticipants();
    }
  }, []);
  return (
    <div className="main">
      <div className="heading">
        <h1 style={{ textAlign: "center" }}>
          {event ? event.name : "Event Not Found"}
        </h1>
      </div>
      <div className="table">
        <table style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Number</th>
              <th>Team Name</th>
              <th>TID</th>
              <th>GID1</th>
              <th>GID2</th>
              <th>GID3</th>
              <th>GID4</th>
              <th>GID5</th>
              <th>Played</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players?.map((player) => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.number1}</td>
                <td>{player.teamname}</td>
                <td>{player.tid}</td>
                <td>{player.gid1}</td>
                <td>{player.gid2}</td>
                <td>{player.gid3}</td>
                <td>{player.gid4}</td>
                <td>{player.gid5}</td>
                <td>{player.played ? "Played" : "Not Played"}</td>
                <td>
                  {!player.played && (
                    <button onClick={() => twoStepCheck(player)}>Action</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CRDshow;
