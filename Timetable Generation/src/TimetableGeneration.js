import React,{useState} from 'react';
import './TG.css';
import Top from './Top';

const TimetableGeneration = () => {
    const periods = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const days = ['8.30 am-9.20 am', '9.25 am-10.15 am', '10.30 am-11.20 am', '11.25 am-12.15 pm', '1.10 pm-2.00 pm','2.05 pm -2.55 pm','3.00 pm -3.50 pm','3.55 pm -4.45 pm'];
  
  const [selectedCourseCodes, setSelectedCourseCodes] = useState({});

  const handleCourseCodeChange = (period, day, value) => {
    setSelectedCourseCodes(prevState => ({...prevState,[`${period}-${day}`]: value}));
  }

  return (
    <div className='TimetableGeneration'>
     <Top />
    <div className="class-timetable">
      <h2>Class Timetable</h2>
      <table className="timetable">
        <thead>
          <tr>
            <th>DAYS/PERIODS</th>
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {periods.map(period => (
            <tr key={period}>
              <td>{period}</td>
              {days.map(day => (
                <td key={day}>
                  {selectedCourseCodes[`${period}-${day}`] ? (
                    selectedCourseCodes[`${period}-${day}`]
                  ) : (
                    <select
                      className='dropdowns'
                      onChange={e => handleCourseCodeChange(period, day, e.target.value)}
                    >
                      <option>Select code</option>
                      <option>XC5501</option>
                      <option>XT5501</option>
                      <option>XC5551</option>
                      <option>XT5551</option>
                      <option>XC5552</option>
                      <option>XC5561</option>
                      <option>------</option>
                    </select>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="course-list">
        <h2>Course with Assigned Faculty List</h2>
        <table className="courses">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Faculty Assigned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>XC5501</td>
              <td>CRYPTOGRAPHY AND DATA SECURITY</td>
              <td>Faculty 1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>XT5501</td>
              <td>ADVANCED DATABASE MANAGEMENT SYSTEMS</td>
              <td>Faculty 2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>XC5551</td>
              <td>SOFTWARE ENGINEERING</td>
              <td>Faculty 3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>XT5551</td>
              <td>DATA WAREHOUSING AND MINING</td>
              <td>Faculty 4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>XC5552</td>
              <td>DESIGN AND ANALYSIS OF ALGORITHMS</td>
              <td>Faculty 5</td>
            </tr>
            <tr>
              <td>6</td>
              <td>XC5561</td>
              <td>SOFTWARE DEVELOPMENT LABORATORY</td>
              <td>Faculty 3</td>
            </tr>
          </tbody>
        </table>
      </div>
<div className='generate-pdf'>
<button>Generate PDF</button>
</div>
    </div>
    </div>
  );
};

export default TimetableGeneration;