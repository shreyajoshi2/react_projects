import { Link } from "react-router-dom";
export default function ReactIndex() {
  return (
    <div className="container pt-5">
      <div className="row justify-content-center pt-5">
        <div className="col-lg-6 main_index">
          <h2 className="text-center">INDEX</h2>
          <hr></hr>
          <div className="row">
            <div className="col-lg-6">
              <Link to="/trafficlight">1. Traffic Light</Link>
              <br></br>
              <Link to="/windowconfirm">2. Window Confirm</Link>
            </div>
            <div className="col-lg-6 text-end"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
