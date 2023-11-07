import React from 'react';
import './SA.css';
import Header from './Header'
import { useNavigate} from 'react-router-dom';

const STAFFASSIGNINGPAGE = () => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/timetable');
  };

  const courses = [
    { S_NO: 1, COURSE_CODE: 'XC5501', COURSE_TITLE: 'CRYPTOGRAPHY AND DATA SECURITY', CATEGORY: 'PCC', L: 4, T: 0, P: 0, TOTAL_CONTACT_PERIODS: 4, CREDITS: 4 },
    { S_NO: 2, COURSE_CODE: 'XT5501', COURSE_TITLE: 'ADVANCED DATABASE MANAGEMENT SYSTEMS', CATEGORY: 'PCC', L: 4, T: 0, P: 0, TOTAL_CONTACT_PERIODS: 4, CREDITS: 4 },
    { S_NO: 3, COURSE_CODE: 'XC5551', COURSE_TITLE: 'SOFTWARE ENGINEERING', CATEGORY: 'PCC', L: 3, T: 0, P: 0, TOTAL_CONTACT_PERIODS: 3, CREDITS: 4 },
    { S_NO: 4, COURSE_CODE: 'XT5551', COURSE_TITLE: 'DATA WAREHOUSING AND MINING', CATEGORY: 'PCC', L: 3, T: 0, P: 2, TOTAL_CONTACT_PERIODS: 5, CREDITS: 4 },
    { S_NO: 5, COURSE_CODE: 'XC5552', COURSE_TITLE: 'DESIGN AND ANALYSIS OF ALGORITHMS', CATEGORY: 'PCC', L: 4, T: 0, P: 0, TOTAL_CONTACT_PERIODS: 4, CREDITS: 4 },
    { S_NO: 6, COURSE_CODE: 'XC5561', COURSE_TITLE: 'SOFTWARE DEVELOPMENT LABORATORY', CATEGORY: 'PCC', L: 0, T: 0, P: 4, TOTAL_CONTACT_PERIODS: 4, CREDITS: 2 },
  ];

  const staffList = ['Select Faculty','Faculty 1', 'Faculty 2', 'Faculty 3','Faculty 4','Faculty 5']; // Add actual staff names

  return (
    <div className='STAFFASSIGNINGPAGE'>
      <Header />
    <div className="container">
      <div className="dropdowns">
        {/* Dropdowns */}
        <select className="dropdown">
          <option>PROGRAMS OFFERED</option>
          <option>M.Sc Maths</option>
          <option>M.sc CS Integrated </option>
          <option>M.sc IT Integrated </option>
        </select>
        <select className="dropdown">
     
        <option>REGULATIONS</option>
        <option>2019</option>
        <option>2023</option>
      
        </select>
        <select className="dropdown">
          <option>SESSION</option>
          <option>JAN-MAY</option>
          <option>AUG-DEC</option>
          
        </select>
        <select className="dropdown">
          <option>SEMESTER</option>
          <option>Semester 1</option>
          <option>Semester 2</option>
         
        </select>
      </div>
      <div className="table-container">
        <table className="course-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>COURSE CODE</th>
              <th>COURSE TITLE</th>
              <th>CATEGORY</th>
              <th>L</th>
              <th>T</th>
              <th>P</th>
              <th>TOTAL CONTACT PERIODS</th>
              <th>CREDITS</th>
              <th>ASSIGNING FACULTY</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td>{index + 1}</td>
                <td>{course.COURSE_CODE}</td>
                <td>{course.COURSE_TITLE}</td>
                <td>{course.CATEGORY}</td>
                <td>{course.L}</td>
                <td>{course.T}</td>
                <td>{course.P}</td>
                <td>{course.TOTAL_CONTACT_PERIODS}</td>
                <td>{course.CREDITS}</td>
                <td>
                  <select className="staff-dropdown">
                    {staffList.map((staff, index) => (
                      <option key={index} value={staff}>
                        {staff}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
<div className='submit'>
<button onClick={handleSubmit}>Submit</button>
</div>
    </div>
    </div>
  );
};

export default STAFFASSIGNINGPAGE;

