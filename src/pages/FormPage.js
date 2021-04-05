import React, { useState } from "react";
import "./FormPage.css";
import AddIcon from "@material-ui/icons/Add";
import { TrendingUpRounded } from "@material-ui/icons";

const FormPage = () => {
  const [startDate, setStartDate] = useState("");
  const [repeatType, setRepeatType] = useState("");
  const [shift, setShift] = useState("");
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [weekDay, setWeekDay] = useState("");
  const [weekDaysOnly, setWeekDaysOnly] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (weekDay === "") {
      alert("Please select a week day");
    }

    console.log("form submitted");
  };

  return (
    <div className="formPage">
      <div className="formPage__container">
        <h1>Add a Shift</h1>
        <form onSubmit={handleSubmit}>
          <div className="formPage__labelField">
            <p>Start Date</p>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className="formPage__labelField">
            <p>Repeat Type</p>
            <select
              value={repeatType}
              onChange={(e) => setRepeatType(e.target.value)}
              required
            >
              <option value="None">None</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>

          <div className="formPage__labelField">
            <p>Shift</p>
            <select
              value={shift}
              onChange={(e) => setShift(e.target.value)}
              required
            >
              <option value="Morning Shift - 5am to 9am">
                Morning Shift - 5am to 9am
              </option>
            </select>
          </div>

          <div className="formPage__labelField">
            <p>Start Time</p>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div className="formPage__labelField">
            <p>End Time</p>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>

          <div
            className="formPage__weekFieldContainer"
            onChange={(e) => setWeekDay(e.target.value)}
            required
          >
            <p>Please select the day of the week</p>
            <div className="formPage__weekFields">
              <div className="formPage__weekField">
                <small>MON</small>
                <input type="radio" name="weekday" value="MON" />
              </div>
              <div className="formPage__weekField">
                <small>TUE</small>
                <input type="radio" name="weekday" value="TUE" />
              </div>
              <div className="formPage__weekField">
                <small>WED</small>
                <input type="radio" name="weekday" value="WED" />
              </div>
              <div className="formPage__weekField">
                <small>THU</small>
                <input type="radio" name="weekday" value="THU" />
              </div>
              <div className="formPage__weekField">
                <small>FRI</small>
                <input type="radio" name="weekday" value="FRI" />
              </div>
              <div className="formPage__weekField">
                <small>SAT</small>
                <input type="radio" name="weekday" value="SAT" />
              </div>
              <div className="formPage__weekField">
                <small>SUN</small>
                <input type="radio" name="weekday" value="SUN" />
              </div>
            </div>
          </div>

          <div
            className="formPage__weekdaysOnly"
            onChange={(e) => setWeekDaysOnly(e.target.value)}
          >
            <input type="radio" name="weekday_only" value={true} />
            <p>Weekdays Only</p>
          </div>

          <button className="formPage__addBtn" type="submit">
            Add
            <AddIcon className="formPage__addBtnIcon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
