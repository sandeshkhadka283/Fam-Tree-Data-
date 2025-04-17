// Keep imports and familyData structure the same as the previous example...
import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react";
import './App.css';
import placeholderImage from './logo.svg'; // Use a general placeholder

// --- Family Data Structure (Updated with new children) ---
const familyData = [
  { // Brother 1
    id: 'brother1',
    name: "Top Bahadur Khadka",
    dob: "01-01-1980",
    dod: "N/A",
    address: "Pyuthan, Punyakhola",
    image: placeholderImage,
    wives: [
      { // Wife 1 of Brother 1
        id: 'wife1',
        name: "Bela Kumari Khadka",
        dob: "01-01-1985",
        dod: "N/A",
        address: "Pyuthan, Punyakhola",
        image: placeholderImage,
        children: [
          { // Child 1 of Wife 1 (Prem Dhoj)
            id: 'child1',
            name: "Prem Dhoj Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild1', name: "Son 1", image: placeholderImage },
              { id: 'subchild2', name: "Son 2", image: placeholderImage },
              { id: 'subchild3', name: "Son 3", image: placeholderImage },
            ]
          },
          { // Child 2 of Wife 1 (Pitambar)
            id: 'child2',
            name: "Pitambar Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild4', name: "Son", image: placeholderImage },
              { id: 'subchild5', name: "Daughter", image: placeholderImage },
            ]
          },
          { // Child 3 of Wife 1 (Resham)
            id: 'child3',
            name: "Resham",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild6', name: "Daughter", image: placeholderImage }
            ]
          }
        ]
      },
      { // Wife 2 of Brother 1
        id: 'wife2',
        name: "Kalika Khadka",
        dob: "01-01-1990",
        dod: "N/A",
        address: "Pyuthan, Punyakhola",
        image: placeholderImage,
        children: [
          { id: 'child4', name: "Krishna Dhoj Khadka", image: placeholderImage, subChildren: [] },
          { id: 'child5', name: "Hari Khadka", image: placeholderImage, subChildren: [{ id: 'subchild7', name: "Sub Child D", image: placeholderImage }] },
          { id: 'child6', name: "Ghaman Singh Khadka", image: placeholderImage, subChildren: [] }
        ]
      }
    ]
  },
  { // Brother 2
    id: 'brother2',
    name: "Khem Bahadur Khadka",
    dob: "01-01-1982",
    dod: "N/A",
    address: "Pyuthan, Punyakhola",
    image: placeholderImage,
    wives: [
      { // Wife 1 of Brother 2
        id: 'wife3',
        name: "Sita Devi Khadka",
        dob: "01-01-1992",
        dod: "N/A",
        address: "Pyuthan, Punyakhola",
        image: placeholderImage,
        children: [
          { // Child 7 (Yagya)
            id: 'child7',
            name: "Yagya Rath Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild8', name: "Son 1", image: placeholderImage },
              { id: 'subchild9', name: "Son 2", image: placeholderImage },
              { id: 'subchild10', name: "Daughter", image: placeholderImage },
            ]
          },
          { // Child 8 (Deepak)
            id: 'child8',
            name: "Deepak Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild11', name: "Son", image: placeholderImage },
              { id: 'subchild12', name: "Daughter 1", image: placeholderImage },
              { id: 'subchild13', name: "Daughter 2", image: placeholderImage },
            ]
          },
          { // Child 9 (Yadav)
            id: 'child9',
            name: "Yadav Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild14', name: "Son 1", image: placeholderImage },
              { id: 'subchild15', name: "Son 2", image: placeholderImage },
            ]
          },
          { // Child 10 (Tejendra)
            id: 'child10',
            name: "Tejendra Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild16', name: "Son", image: placeholderImage },
              { id: 'subchild17', name: "Daughter", image: placeholderImage },
            ]
          }
        ]
      },
      { // Wife 2 of Brother 2
        id: 'wife4',
        name: "Yam Kumari Khadka",
        dob: "01-01-1995",
        dod: "N/A",
        // Note: Original address was different, kept it for example variance
        address: "456 Elm St.",
        image: placeholderImage,
        children: [
          { // Child 11 (Madhusudan)
            id: 'child11',
            name: "Madhusudan Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild18', name: "Daughter", image: placeholderImage },
              { id: 'subchild19', name: "Son", image: placeholderImage },
            ]
          },
          { // Child 12 (Basanta)
            id: 'child12',
            name: "Basanta Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild20', name: "Son", image: placeholderImage },
              { id: 'subchild21', name: "Daughter", image: placeholderImage },
            ]
          }
        ]
      }
    ]
  }
];


function App() {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (boxId) => {
    setActiveBox(prev => prev === boxId ? null : boxId);
  };

  const renderPersonInfo = (person) => (
    <div className="person-info">
      {person.dob && <div>Date of Birth: {person.dob}</div>}
      {person.dod && <div>Date of Death: {person.dod}</div>}
      {person.address && <div>Address: {person.address}</div>}
    </div>
  );

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
                Kalika Khadka
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
                Yam Kumari Khadka
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;