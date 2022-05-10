import React from "react";
import { Link } from "react-router-dom";

function Check() {
  return (
    <div>
      <p>Check holder</p>
      <button>
        <Link to="/Exam">Start Exam</Link>
      </button>
    </div>
  );
}

export default Check;
