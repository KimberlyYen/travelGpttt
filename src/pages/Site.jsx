import React from "react";
import SiteImg from "../img/site.png";
import { Link } from "react-router-dom";
import Team from "../components/Team";

function Site() {
  return (
    <div className="site">
      <div className="place">
        <h2>SPAIN</h2>
        <h3>MIGHT BE A GOOD IDEA</h3>
        <ul>
          <ol> 1. La Sagrada Familia, Barcelona. </ol>
          <ol> 2. Royal Palace (Palacio Real), Madrid. </ol>
          <ol> 3. Santiago de Compostela Cathedral. </ol>
          <ol> 4. Ciudad de las Artes y las Ciencias. </ol>
          <ol> 5. Guggenheim Museum, Bilbao. </ol>
          <ol> 6. Plaza de España, Seville. </ol>
          <ol> 7. Plaza Mayor, Salamanca. </ol>
          <ol> 8. La Alhambra Granada. </ol>
        </ul>
      </div>

      <div className="text">
        <div className="question">
          Follow us now for our next product launch
        </div>
        <div className="yes_or_no">
          <Link to="/tellus" relative="path">
            <p>Team → </p>
          </Link>

          <p className="yes"> Follow →</p>
        </div>
      </div>

      <div className="picture">
        <img src={SiteImg} alt="Site_PNG" />
      </div>
      <Team className="team" />
    </div>
  );
}

export default Site;

// <div className="result">
//   <div className="text">
//     <div className="question">Do you like this result?</div>
//     <div className="yes_or_no">
//       <Link to="/tellus" relative="path">
//         <p>Try it again → </p>
//       </Link>

//       <p className="yes"> Yes →</p>
//     </div>
//   </div>

//   <div className="picture">
//     <img src={ResultImg} alt="Result_PNG" />
//   </div>
// </div>
