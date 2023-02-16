import { React, useState, useContext } from "react";
import { UserAuthContext } from "../contexts/user.auth.context";
import { Slider } from "@mantine/core";

function LogEmotionsModal(props) {
  const [sadness, setSadness] = useState(5);
  const [anxiety, setAnxiety] = useState(5);
  const [anger, setAnger] = useState(5);
  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useContext(UserAuthContext);

  if (!props.showModal) {
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5005/emotions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sadness, anxiety, anger, user: user.payload }),
      });

      const parsed = await response.json();
      if (response.status === 201) {
        props.setShowModal(false);
        setAnger(5)
        setAnxiety(5)
        setSadness(5)
      } else {
        setErrorMessage(parsed.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleClose = () => {
    props.setShowModal(false);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px]">
        <div className="bg-white p-2 rounded">
          <h2>Log your emotions</h2>
          <div className="log-emotions-body">
            <form onSubmit={handleSubmit}>
              <div className="mx-0 w-100">
                <div className="text-center">
                  <p>
                    <strong>Sadness</strong>
                  </p>
                </div>
                <label for="customRange3" className="form-label float-start">
                  Emoji
                </label>
                <label for="customRange3" className="form-label float-end">
                  Emoji
                </label>
                
                <div class="range">
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="10"
                    step="1"
                    id="customRange3"
                    value={sadness}
                    onChange={(event) => setSadness(event.target.value)}
                  />
                </div>
                <div class="text-center">
                  <p>
                    <strong>Anxiety</strong>
                  </p>
                </div>
                <label for="customRange3" class="form-label float-start">
                  Emoji
                </label>
                <label for="customRange3" class="form-label float-end">
                  Emoji
                </label>
                <div class="range">
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="10"
                    step="1"
                    id="customRange3"
                    value={anxiety}
                    onChange={(event) => setAnxiety(event.target.value)}
                  />
                </div>
                <div class="text-center">
                  <p>
                    <strong>Anger</strong>
                  </p>
                </div>
                <label for="customRange3" class="form-label float-start">
                  Emoji
                </label>
                <label for="customRange3" class="form-label float-end">
                  Emoji
                </label>
                <div class="range">
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="10"
                    step="1"
                    id="customRange3"
                    value={anger}
                    onChange={(event) => setAnger(event.target.value)}
                  />
                </div>
                <div class="text-end">
                    <button type="button" onClick={handleClose} class="btn btn-secondary mt-3">
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary mt-3">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogEmotionsModal;
