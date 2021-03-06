import React, { useEffect, useState } from "react";
import db, { auth } from "../firebase";
import "./Questions.css";
import { login, logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import QuizOver from "./QuizOver";

function Questions() {
  const [num, setNum] = useState(0);
  const user = useSelector(selectUser);

  const [hint1, setHint1] = useState("");
  const [hint2, setHint2] = useState("");
  const [hint3, setHint3] = useState("");
  const [hint4, setHint4] = useState("");
  const [coord, setCoord] = useState("");
  const [answer, setAnswer] = useState("");
  const [id, setId] = useState();
  const [response, setResponse] = useState("");
  const [points, setPoints] = useState(10);
  const [finish, setFinish] = useState(false);

  useEffect(async () => {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((ref) => {
        setNum(ref.data().level);
        if (ref.data().level > 9) {
          setFinish(true);
        } else {
          db.collection("questions").onSnapshot((snapshot) => {
            setCoord(snapshot.docs[num].data().coordinates);
            setHint1(snapshot.docs[num].data().hint1);
            setHint2(snapshot.docs[num].data().hint2);
            setHint3(snapshot.docs[num].data().hint3);
            setHint4(snapshot.docs[num].data().hint4);
            setAnswer(snapshot.docs[num].data().answer);
            setId(snapshot.docs[num].id);
          });
        }
      });
  }, [num]);

  const handleChange = () => {
    document.querySelector(".questions--wrong").hidden = true;
    if (answer === response.toLowerCase()) {
      db.collection("scores")
        .doc(user.uid)
        .update({
          player: user.displayName,
          score: points * num + points,
        });

      setResponse("");
      db.collection("users")
        .doc(user.uid)
        .set({
          level: num + 1,
        });
      setNum(num + 1);
      setPoints(10);
    } else {
      document.querySelector(".questions--wrong").hidden = false;
    }
  };

  return (
    <>
      {finish && <QuizOver />}
      {!finish && (
        <div className="questions">
          <div className="questions__container">
            <h2 className="questions--heading">Guess This Company</h2>

            <div className="questions__first">
              <h1 className="questions--coord">{coord}</h1>
              <h3 className="questions--hints">{hint1}</h3>
            </div>
            <h2 className="questions--heading">About this company</h2>
            <h3 className="questions--hints">{hint2}</h3>
            <h3 className="questions--hints">{hint3}</h3>
            <h3 className="questions--hints">{hint4}</h3>
            <input
              type="text"
              value={response}
              placeholder="Your answer goes here..."
              onChange={(e) => setResponse(e.target.value)}
              className="questions--input"
            />
            <p className="questions--wrong" hidden>
              Sorry, Your Answer is wrong. Try Again!
            </p>
            <button onClick={handleChange} className="questions--btn">
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Questions;
