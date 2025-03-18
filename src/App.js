import React, { useState } from 'react';
import './App.css';

// Import images (replace with your own image paths)
import brother1Image from './logo.svg';
import brother2Image from './logo.svg';
import wife1Image from './logo.svg';
import wife2Image from './logo.svg';
import wife3Image from './logo.svg';
import wife4Image from './logo.svg';
import child1Image from './logo.svg';
import child2Image from './logo.svg';
import child3Image from './logo.svg';
import child4Image from './logo.svg';
import child5Image from './logo.svg';
import child6Image from './logo.svg';
import child7Image from './logo.svg';
import child8Image from './logo.svg';
import child9Image from './logo.svg';
import child10Image from './logo.svg';
import child11Image from './logo.svg';
import child12Image from './logo.svg';

function App() {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (boxName) => {
    setActiveBox(boxName);
  };
  const people = {
    'Brother 1': { name: 'John Doe', dob: '1973-05-15', dod: 'N/A', address: '123 Main St, Kathmandu' },
    'Brother 2': { name: 'Jane Smith', dob: '1968-12-20', dod: '2023-11-10', address: '456 Oak Ave, Pokhara' },
    'Wife 1': { name: 'Alice Johnson', dob: '1975-08-01', dod: 'N/A', address: '789 Pine Ln, Lalitpur' },
    'Wife 2': { name: 'Emily Brown', dob: '1978-03-25', dod: 'N/A', address: '101 Elm Rd, Bhaktapur' },
    'Wife 3': { name: 'Sophia Davis', dob: '1971-11-12', dod: 'N/A', address: '202 Maple Dr, Chitwan' },
    'Wife 4': { name: 'Olivia Wilson', dob: '1974-06-30', dod: 'N/A', address: '303 Cedar Ct, Butwal' },
    'Child 1': { name: 'Liam Garcia', dob: '2003-09-18', dod: 'N/A', address: '404 Birch St, Kathmandu' },
    'Child 2': { name: 'Noah Rodriguez', dob: '2005-04-05', dod: 'N/A', address: '505 Willow Way, Lalitpur' },
    'Child 3': { name: 'Oliver Martinez', dob: '2001-12-10', dod: 'N/A', address: '606 Redwood Ave, Kathmandu' },
    'Child 4': { name: 'Elijah Anderson', dob: '2004-07-22', dod: 'N/A', address: '707 Spruce Ln, Bhaktapur' },
    'Child 5': { name: 'William Thomas', dob: '2002-02-15', dod: 'N/A', address: '808 Pine Rd, Pokhara' },
    'Child 6': { name: 'James Jackson', dob: '2000-11-03', dod: 'N/A', address: '909 Oak Ct, Pokhara' },
    'Child 7': { name: 'Benjamin White', dob: '1999-08-28', dod: 'N/A', address: '1010 Maple St, Chitwan' },
    'Child 8': { name: 'Lucas Harris', dob: '1998-05-12', dod: 'N/A', address: '1111 Cedar Way, Chitwan' },
    'Child 9': { name: 'Henry Martin', dob: '1997-02-01', dod: 'N/A', address: '1212 Birch Ave, Chitwan' },
    'Child 10': { name: 'Theodore Thompson', dob: '1996-11-20', dod: 'N/A', address: '1313 Willow Ln, Chitwan' },
    'Child 11': { name: 'Jack Garcia', dob: '1995-09-09', dod: 'N/A', address: '1414 Redwood Rd, Butwal' },
    'Child 12': { name: 'Levi Perez', dob: '1994-06-25', dod: 'N/A', address: '1515 Spruce Ct, Butwal' },
  };

  return (
    <div className="container">
      <div className="brothers-container">
        <div className="brother-group">
          <div
            className={`person-box ${activeBox === 'Brother 1' ? 'active' : ''}`}
            onClick={() => handleBoxClick('Brother 1')}
          >
            <img src={brother1Image} alt="Brother 1" className="box-image" />
            <div className="person-info">
              <div>{people['Brother 1'].name}</div>
              <div>DOB: {people['Brother 1'].dob}</div>
              <div>DOD: {people['Brother 1'].dod}</div>
              <div>Address: {people['Brother 1'].address}</div>
            </div>

            Brother 1
          </div>
          <div className="wives-container">
            <div className="wife-group">
              <div
                className={`person-box ${activeBox === 'Wife 1' ? 'active' : ''}`}
                onClick={() => handleBoxClick('Wife 1')}
              >
                <img src={wife1Image} alt="Wife 1" className="box-image" />
                <div className="person-info">
                  <div>{people['Wife 1'].name}</div>
                  <div>DOB: {people['Wife 1'].dob}</div>
                  <div>DOD: {people['Wife 1'].dod}</div>
                  <div>Address: {people['Wife 1'].address}</div>
                </div>
                Wife 1
              </div>
              <div className="children-container">
                <div className="child-box">
                  <img src={child1Image} alt="Child 1" className="child-image" />
                  Child 1
                </div>
                <div className="child-box">
                  <img src={child2Image} alt="Child 2" className="child-image" />
                  Child 2
                </div>
                <div className="child-box">
                  <img src={child3Image} alt="Child 3" className="child-image" />
                  Child 3
                </div>
              </div>
            </div>
            <div className="wife-group">
              <div
                className={`person-box ${activeBox === 'Wife 2' ? 'active' : ''}`}
                onClick={() => handleBoxClick('Wife 2')}
              >
                <img src={wife2Image} alt="Wife 2" className="box-image" />
                Wife 2
              </div>
              <div className="children-container">
                <div className="child-box">
                  <img src={child4Image} alt="Child 4" className="child-image" />
                  Child 4
                </div>
                <div className="child-box">
                  <img src={child5Image} alt="Child 5" className="child-image" />
                  Child 5
                </div>
                <div className="child-box">
                  <img src={child6Image} alt="Child 6" className="child-image" />
                  Child 6
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="brother-group">
          <div
            className={`person-box ${activeBox === 'Brother 2' ? 'active' : ''}`}
            onClick={() => handleBoxClick('Brother 2')}
          >
            <img src={brother2Image} alt="Brother 2" className="box-image" />
            Brother 2
          </div>
          <div className="wives-container">
            <div className="wife-group">
              <div
                className={`person-box ${activeBox === 'Wife 3' ? 'active' : ''}`}
                onClick={() => handleBoxClick('Wife 3')}
              >
                <img src={wife3Image} alt="Wife 3" className="box-image" />
                Wife 3
              </div>
              <div className="children-container">
                <div className="child-box">
                  <img src={child7Image} alt="Child 7" className="child-image" />
                  Child 7
                </div>
                <div className="child-box">
                  <img src={child8Image} alt="Child 8" className="child-image" />
                  Child 8
                </div>
                <div className="child-box">
                  <img src={child9Image} alt="Child 9" className="child-image" />
                  Child 9
                </div>
                <div className="child-box">
                  <img src={child10Image} alt="Child 10" className="child-image" />
                  Child 10
                </div>
              </div>
            </div>
            <div className="wife-group">
              <div
                className={`person-box ${activeBox === 'Wife 4' ? 'active' : ''}`}
                onClick={() => handleBoxClick('Wife 4')}
              >
                <img src={wife4Image} alt="Wife 4" className="box-image" />
                Wife 4
              </div>
              <div className="children-container">
                <div className="child-box">
                  <img src={child11Image} alt="Child 11" className="child-image" />
                  Child 11
                </div>
                <div className="child-box">
                  <img src={child12Image} alt="Child 12" className="child-image" />
                  Child 12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;