import "./header.css";
import {
   
  faCalendarDays,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";

import { useState } from "react";


const Header = () => {
  const[date,setDate]=useState([
    {
        startDate: new Date(),
        endDate:new Date(),
        key:'Selection'
    }
  ]); 

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faPersonChalkboard} />
            <span>Maths</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPersonChalkboard} />
            <span>English</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPersonChalkboard} />
            <span>Hindi</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPersonChalkboard} />
            <span>Science</span>
          </div>
        </div>
        <h1 className="headerTitle">A site for learning from great teachers</h1>
        <p className="headerDesc">Get various Discounts by giving tests..</p>
        <button className="headerBtn">Sign in/Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPersonChalkboard} />
            <input type="text" placeholder="Type the Teacher Name" className="
            headerSearchInput" />
            </div>

            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
            <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} className="date"/>
            </div>

            <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
