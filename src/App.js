import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"
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

  return (
    <div className="container">
      <div className="brothers-container">
        <div className="brother-group">
          <div
            className={`person-box ${activeBox === 'Brother 1' ? 'active' : ''}`}
            onClick={() => handleBoxClick('Brother 1')}
          >
            <img src={brother1Image} alt="Brother 1" className="box-image" />
            Top Bahadur Khadka
            <div className="person-info">
              <div>Date of Birth: 01-01-1980</div>
              <div>Date of Death: N/A</div>
              <div>Address: Pyuthan,Punyakhola</div>
            </div>
          </div>
          <div className="wives-container">
            <div className="wife-group">
              <div
                className={`person-box ${activeBox === 'Wife 1' ? 'active' : ''}`}
                onClick={() => handleBoxClick('Wife 1')}
              >
                <img src={wife1Image} alt="Wife 1" className="box-image" />
                Bela Kumari Khadka
                <div className="person-info">
                  <div>Date of Birth: 01-01-1985</div>
                  <div>Date of Death: N/A</div>
                  <div>Address: Pyuthan,Punyakhola</div>
                </div>
              </div>
              <div className="children-container">
                <div className="child-box">
                  <img src={child1Image} alt="Child 1" className="child-image" />
                  Prem Dhoj Khadka
                </div>
                <div className="child-box">
                  <img src={child2Image} alt="Child 2" className="child-image" />
                  Pitambar Khadka
                </div>
                <div className="child-box">
                  <img src={child3Image} alt="Child 3" className="child-image" />
                  Resham
                </div>
              </div>
            </div>
            <div className="wife-group">
              <div
                className={`person-box ${activeBox === 'Wife 2' ? 'active' : ''}`}
                onClick={() => handleBoxClick('Wife 2')}
              >
                <img src={wife2Image} alt="Wife 2" className="box-image" />
                Hajurama 2
                <div className="person-info">
                  <div>Date of Birth: 01-01-1990</div>
                  <div>Date of Death: N/A</div>
                  <div>Address: Pyuthan,Punyakhola</div>
                </div>
              </div>
              <div className="children-container">
                <div className="child-box">
                  <img src={child4Image} alt="Child 4" className="child-image" />
                  Krishna Dhoj Khadka
                </div>
                <div className="child-box">
                  <img src={child5Image} alt="Child 5" className="child-image" />
                  Hari Khadka
                </div>
                <div className="child-box">
                  <img src={child6Image} alt="Child 6" className="child-image" />
                  Ghaman Singh Khadka
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
            Khem Bahadur Khadka
            <div className="person-info">
              <div>Date of Birth: 01-01-1982</div>
              <div>Date of Death: N/A</div>
              <div>Address: Pyuthan,Punyakhola</div>
            </div>
          </div>
          <div className="wives-container">
            <div className="wife-group">
              <div
                className={`person-box ${activeBox === 'Wife 3' ? 'active' : ''}`}
                onClick={() => handleBoxClick('Wife 3')}
              >
                <img src={wife3Image} alt="Wife 3" className="box-image" />
                Sita Devi Khadka
                <div className="person-info">
                  <div>Date of Birth: 01-01-1992</div>
                  <div>Date of Death: N/A</div>
                  <div>Address: Pyuthan,Punyakhola</div>
                </div>
              </div>
              <div className="children-container">
                <div className="child-box">
                  <img src={child7Image} alt="Child 7" className="child-image" />
                  Yagya Rath Khadka
                </div>
                <div className="child-box">
                  <img src={child8Image} alt="Child 8" className="child-image" />
                  Deepak Khadka
                </div>
                <div className="child-box">
                  <img src={child9Image} alt="Child 9" className="child-image" />
                  Yadav Khadka
                </div>
                <div className="child-box">
                  <img src={child10Image} alt="Child 10" className="child-image" />
                  Tejendra Khadka
                </div>
              </div>
            </div>
            <div className="wife-group">
              <div
                className={`person-box ${activeBox === 'Wife 4' ? 'active' : ''}`}
                onClick={() => handleBoxClick('Wife 4')}
              >
                <img src={wife4Image} alt="Wife 4" className="box-image" />
                Hajurama 2
                <div className="person-info">
                  <div>Date of Birth: 01-01-1995</div>
                  <div>Date of Death: N/A</div>
                  <div>Address: 456 Elm St.</div>
                </div>
              </div>
              <div className="children-container">
                <div className="child-box">
                  <img src={child11Image} alt="Child 11" className="child-image" />
                  Madhusudan Khadka
                </div>
                <div className="child-box">
                  <img src={child12Image} alt="Child 12" className="child-image" />
                  Basanta Khakda
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
