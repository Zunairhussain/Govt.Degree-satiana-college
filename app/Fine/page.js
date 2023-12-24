import React from 'react'
import React from 'react';
import Section from '../components/Section';

const Section = ({ title, content }) => (
  <div style={{ textAlign: 'center', backgroundColor: 'rgb(23,55,76)', color: 'white', fontSize: 'large', margin: '30px', padding: '5px' }}>
    <h1>{title}</h1>
    {content}
  </div>
);


export default function Fine() {
  return (
    <>

  <div>
    <Section title="Fees & Fines Sructure" content={<h1>Fees & Fines Sructure Content</h1>} />

    <Section title="Fee Payment / Fine" content={<ul>
      <li>The fee/other payments/ dues are to be paid as scheduled by the college authorities from time to time.</li>
      <li>Payment after the due date will be redived with fine.</li>
      {/* Add other list items here */}
    </ul>} />

    {/* Repeat the process for other sections */}

    {/* College Card Section */}
    <Section title="College Card" content={<ul>
      <li>The college identity card is issued to every student. In case of the loss of identity card the student is issued a duplicate one for Rs. 100. Every student is required to keep it with himself during the college hours; otherwise disciplinary action may be taken against him.</li>
    </ul>} />
  </div>
    
    
    </>
  )
}
