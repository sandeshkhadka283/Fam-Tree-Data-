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
              { id: 'subchild1', name: "Nirmal Khadka", image: placeholderImage },
              { id: 'subchild2', name: "Nirajan Khadka", image: placeholderImage },
              { id: 'subchild3', name: "Niraj Khadka", image: placeholderImage },
            ]
          },
          { // Child 2 of Wife 1 (Pitambar)
            id: 'child2',
            name: "Pitambar Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild4', name: "Aayush Khadka", image: placeholderImage },
              { id: 'subchild5', name: "Aashisha Khadka", image: placeholderImage },
            ]
          },
          { // Child 3 of Wife 1 (Resham)
            id: 'child3',
            name: "Resham",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild6', name: "Tripti Khadka", image: placeholderImage }
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
          { id: 'child4', name: "Krishna Dhoj Khadka", image: placeholderImage, subChildren: [{ id: 'subchild7', name: "Aayushma Khadka", image: placeholderImage},{id: 'subchild71', name: "Samriddi Khadka", image: placeholderImage }] },
          { id: 'child5', name: "Hari Khadka", image: placeholderImage, subChildren: [{ id: 'subchild7', name: "Dipesh Khadka", image: placeholderImage},{id: 'subchild71', name: "Sulav Khadka", image: placeholderImage }] },
          { id: 'child6', name: "Ghaman Singh Khadka", image: placeholderImage, subChildren: [{ id: 'subchild711', name: "Prajwal Khadka", image: placeholderImage}] }
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
              { id: 'subchild8', name: "Anurag Khadka", image: placeholderImage },
              { id: 'subchild9', name: "Parool Khadka", image: placeholderImage },
              { id: 'subchild10', name: "Abhas Khadka", image: placeholderImage },
            ]
          },
          { // Child 8 (Deepak)
            id: 'child8',
            name: "Deepak Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild12', name: "Aakriti Khadka", image: placeholderImage },
              { id: 'subchild13', name: "Prakriti Khadka", image: placeholderImage },
              { id: 'subchild11', name: "Prince Khadka", image: placeholderImage },
              
            ]
          },
          { // Child 9 (Yadav)
            id: 'child9',
            name: "Yadav Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild14', name: "Samyam Khadka", image: placeholderImage },
              { id: 'subchild15', name: "Sano Khadka", image: placeholderImage },
            ]
          },
          { // Child 10 (Tejendra)
            id: 'child10',
            name: "Tejendra Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild16', name: "Sandesh Khadka", image: placeholderImage },
              { id: 'subchild17', name: "Sayana Khadka", image: placeholderImage },
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
              { id: 'subchild18', name: "Bikalpa Khadka", image: placeholderImage },
              { id: 'subchild19', name: "BInjan Khadka", image: placeholderImage },
            ]
          },
          { // Child 12 (Basanta)
            id: 'child12',
            name: "Basanta Khadka",
            image: placeholderImage,
            subChildren: [
              { id: 'subchild20', name: "Arju Khadka", image: placeholderImage },
              { id: 'subchild21', name: "Aadarsh Khadka", image: placeholderImage },
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
    <div className="container bg-gradient-primary">
      <Analytics />
      <h1>Family Tree</h1>

      <div className="overall-container border-main">
        <div className="brothers-container">
          {familyData.map((brother) => (
            <div className="brother-group" key={brother.id}>
              <div
                className={`person-box bg-gradient-card ${activeBox === brother.id ? 'active bg-gradient-active' : ''}`}
                onClick={() => handleBoxClick(brother.id)}
              >
                <img src={brother.image} alt={brother.name} className="box-image" />
                {brother.name}
                {renderPersonInfo(brother)}
              </div>

              <div className="wives-container">
                {brother.wives.map((wife) => (
                  <div className="wife-group border-dotted" key={wife.id}>
                    <div
                      className={`person-box bg-gradient-card ${activeBox === wife.id ? 'active bg-gradient-active' : ''}`}
                      onClick={() => handleBoxClick(wife.id)}
                    >
                      <img src={wife.image} alt={wife.name} className="box-image" />
                      {wife.name}
                      {renderPersonInfo(wife)}
                    </div>

                    <div className="children-container border-dashed">
                      {wife.children.map((child) => (
                        <div className="child-unit" key={child.id}>
                          <div className={`child-box bg-gradient-child ${child.subChildren?.length ? 'has-sub-children' : ''}`}>
                            <img src={child.image} alt={child.name} className="child-image" />
                            {child.name}
                          </div>
                          {child.subChildren?.length > 0 && (
                            <div className="subchildren-container border-light">
                              {child.subChildren.map((subChild) => (
                                <div className="subchild-box bg-gradient-subchild" key={subChild.id}>
                                  {subChild.name}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;  