import { React, useState, useContext } from "react";
import { UserAuthContext } from "../contexts/user.auth.context";

function LogEmotionsModal(props) {
  const [sadness, setSadness] = useState(undefined);
  const [anxiety, setAnxiety] = useState(undefined);
  const [anger, setAnger] = useState(undefined);
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
      } else {
        setErrorMessage(parsed.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div>
      <h2>Log your emotions</h2>
      <div className="log-emotions-body">
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Sadness
          </label>
          <input
            id="minmax-range"
            type="range"
            min="0"
            max="10"
            value={sadness}
            onChange={(event) => setSadness(event.target.value)}
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Anxiety
          </label>
          <input
            id="minmax-range"
            type="range"
            min="0"
            max="10"
            value={anxiety}
            onChange={(event) => setAnxiety(event.target.value)}
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <label
            for="minmax-range"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Anger
          </label>
          <input
            id="minmax-range"
            type="range"
            min="0"
            max="10"
            value={anger}
            onChange={(event) => setAnger(event.target.value)}
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <button type="submit">Submit</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default LogEmotionsModal;
