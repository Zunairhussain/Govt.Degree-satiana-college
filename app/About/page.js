import React from 'react'
import Header from '../(components)/header/Header'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import img1 from "../assets/missionstatement.jpg"
import img2 from "../assets/Qauid.jpg"
import img3 from "../assets/allama.jpg"
import Footer from '../(components)/footer/Footer';

export default function About() {
  return (
  
    <>
    <>
    <Header />
    </>
    <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgb(23, 55, 76)', color: 'white' }}>
        <h1>Mission Statement</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Image src={img1} alt=".........." width={550} height={300} style={{ marginTop: '10px' }} />
          </div>
          <div className="col-6">
            <div style={{ border: '5px solid yellow', marginTop: '10px' }}>
              <h1 style={{ textAlign: 'center', backgroundColor: 'rgb(23, 55, 76)', color: 'white' }}>Our Mission</h1>
              <p style={{ borderLeft: '5px solid rgb(23, 55, 76)', padding: '20px', marginLeft: '10px' }}>
                <b>
                  We aim at providing our students with a highly competitive learning environment where concepts are
                  inculcated and research is encouraged. We are striving to broaden minds and ennoble the intellectual
                  approach of our students enabling them to stand out in the world
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ marginLeft: '50px', marginRight: '50px' }} />

      <div className="container">
        <div className="row">
          <div className="col-6">
            <div style={{ border: '5px solid yellow', marginTop: '10px' }}>
              <h1 style={{ textAlign: 'center', backgroundColor: 'rgb(23, 55, 76)', color: 'white' }}>Quaid-e-Azam</h1>
              <p style={{ textAlign: 'center' }}>
                <b>September 11, 1948</b>
              </p>
              <p style={{ borderLeft: '5px solid rgb(23, 55, 76)', padding: '20px', marginLeft: '10px' }}>
                <b>
                  Education is a matter of life and death for Pakistan. The world is progressing so rapidly that
                  without requisite advance in education, not only shall we be left behind but wiped out altogether.
                </b>
              </p>
            </div>
          </div>
          <div className="col-6">
            <Image src={img2} alt=".........." width={550} height={300} />
          </div>
        </div>
      </div>

      <hr style={{ marginLeft: '50px', marginRight: '50px' }} />

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Image src={img3} alt="......." width={550} height={300} style={{ marginTop: '10px', marginBottom: '10px' }} />
          </div>
          <div className="col-6">
            <div style={{ border: '5px solid yellow', marginTop: '10px' }}>
              <h1 style={{ textAlign: 'center', backgroundColor: 'rgb(23, 55, 76)', color: 'white' }}>Allama Iqbal</h1>
              <p style={{ textAlign: 'center' }}>
                <b>April 21, 1938</b>
              </p>
              <p style={{ borderLeft: '5px solid rgb(23, 55, 76)', padding: '20px', marginLeft: '10px' }}>
                <b>
                  "Khudi ko kar buland itna ke har taqder sa pahla
                  <br />
                  ke Khuda banda sa poocha bata teri raza kya ha "
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
s
    </>
  )
}
