import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import STAFFASSIGNINGPAGE from './STAFFASSIGNINGPAGE';
import TimetableGeneration from './TimetableGeneration';

function App() {
  return (
    <Router>
       {/*  <div>
         <nav>
          <ul>
            <li>
              <Link to="/staffassign">STAFFASSIGNINGPAGE</Link>
            </li>
            <li>
              <Link to="/timetable">Timetablegeneration</Link>
            </li>
          </ul>
         </nav> */}
     <Routes>
        <Route path="/" element={<STAFFASSIGNINGPAGE />} />
        {/* <Route path="/staffassign" element={<STAFFASSIGNINGPAGE />} /> */}
        <Route path="/timetable" element={<TimetableGeneration />} />
     </Routes>
       {/* </div> */}
    </Router>
  );
}

export default App;




    
