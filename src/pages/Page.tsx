import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./page.css";
function Page() {
  const [quesdata, setquesdata] = useState("");
  const [worngans, setworngans] = useState([]);
  const [writeans, setwriteans] = useState("");
  const [inpans, setinpans] = useState("");
  const [resstate, setresstate] = useState(false);

  const checkAns = (inpans: string) => {
    const writeans1 = writeans.replace(/\s/g, "");

    const inpans1 = inpans.replace(/\s/g, "");
    // console.log(inpans1);
    if (writeans1 === inpans1) {
      setresstate(true);
    } else {
      setresstate(false);
    }
  };
  const calldata = () => {
    setresstate(false);
    setinpans("");

    axios
      .get("https://opentdb.com/api.php?amount=1")
      .then((res) => {
        //console.log(res);
        setquesdata(res.data.results[0].question);
        let arr = res.data.results[0].incorrect_answers;

        arr.push(res.data.results[0].correct_answer);
        //console.log(arr);
        setworngans(arr);
        setwriteans(res.data.results[0].correct_answer);
      })
      .catch((err) => {
        //console.log(err);
      });
  };
  useEffect(() => {
    calldata();
  }, []);
  return (
    <div className="page">
      <div className="up">
        <div className="questions">{quesdata}</div>
        <div className="options">
          {worngans.map((ele, id) => {
            return (
              <div style={{ display: "flex", gap: "1.2rem" }} key={id}>
                <p>{id + 1}</p>
                <p>{ele}</p>
              </div>
            );
          })}
        </div>
        <div className="ansinput">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();

              checkAns(inpans);
            }}
          >
            <div>
              <label>
                <input
                  className="inputtext"
                  type="text"
                  value={inpans}
                  onChange={(e) => {
                    setinpans(e.target.value);
                  }}
                  placeholder={"Enter the text"}
                />
              </label>
            </div>
            <div>
              <button id="subbtn" className="btn" type="submit">
                submit
              </button>
            </div>
          </form>
          {resstate ? (
            <p>
              <span style={{ color: "green" }}>Write ans</span> :{writeans}
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className="down">
        <div className="nextbtn">
          <button onClick={calldata} className="btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
