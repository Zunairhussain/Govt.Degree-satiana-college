import React from 'react'
import Header from '../(components)/header/Header'
import { Container, Row, Col } from 'react-bootstrap';

export default function Rules() {
  return (
    <>
    <Header />
    <>
  <div
    style={{
      backgroundColor: "rgb(23, 55, 76)",
      color: "white",
      textAlign: "center",
      fontSize: "larger"
    }}
  >
    <h1>Rules and Regulation</h1>
  </div>
  <div
    style={{
      backgroundColor: "rgb(23, 55, 76)",
      color: "white",
      textAlign: "center",
      marginLeft: 50,
      marginTop: 20,
      padding: 5,
      fontSize: "larger",
      marginRight: 50
    }}
  >
    <h2>Admission Process</h2>
  </div>
  <div style={{ marginLeft: 60, marginTop: 10 }}>
    <p>
      <b>
        The candidate must come up to the required merit determined from time to
        time.{" "}
      </b>{" "}
    </p>
    <p>
      The candidate has to appear in person for interview before the Admission
      Committee appointed by the Principal.
    </p>
    <h4>
      The candidate has to present the following documents in original at the
      time of interview:
    </h4>
  </div>
  <div style={{ marginLeft: 100, marginTop: 6 }}>
    <ul>
      <li>
        Written permission from father / Guardian to seek admission to the
        college Affidavit declaring that the student will not participate in any
        political activities during college hours.
      </li>
      <li>
        Testimonials / Certificates of Boards / Universities showing marks /
        results / grade / percentage / CGPA of the last Examination(s).
      </li>
      <li>Passports size photos (3 for 1st Year), (4 for 3rd Year)</li>
      <li>
        Character Certificate / Provisional Certificate of School / Collegelast
        attended.
      </li>
      <li style={{ marginBottom: 25 }}>C.N.I.C. of Father.</li>
    </ul>
  </div>
  <div style={{ marginLeft: 60, marginTop: 10, fontSize: "larger" }}>
    <h2>Note:</h2>
    <p>
      All the testimonials should be enclosed with the prescribed/printed
      admission form available in the prospectus. The class / qyota / category
      in which admission is sought must be clearly marked.
    </p>
  </div>
  <div
    style={{
      backgroundColor: "rgb(23, 55, 76)",
      color: "white",
      textAlign: "center",
      marginLeft: 50,
      marginTop: 20,
      padding: 5,
      fontSize: "larger",
      marginRight: 50
    }}
  >
    <h2>College Unifornm</h2>
  </div>
  <Container style={{ padding: 50, marginLeft: 30 }}>
    <Row>
      <Col>
        <p>
          <b>
            The following uniform is prescribed for the students of the college:
          </b>
        </p>
        <br />
        <h2>Intermediate Students:</h2>
        <br />
        <p>
          <b> Summer:</b> Sliver grey trousers, white shirt,Blue Tie, black
          shoes.
        </p>
        <br />{" "}
        <p>
          <b> Winter:</b> Sliver grey trousers, white shirt, Navy blue Blazer /
          jersey, black shoes.
        </p>
        <br />
        <h2>NOTE</h2>
        <p>
          Fine at the rate of Rs. 25 per day is levied on violation of the
          uniform.
        </p>
      </Col>
      <Col style={{ paddingLeft: 70 }}>
        <img src="./pics/interuniform.jpg" alt="Images not found" />
      </Col>
    </Row>
  </Container>
  <div className="container" style={{ marginLeft: 30, padding: 50 }}>
    <div className="row">
      <div className="col-6">
        <p>
          <b>
            The following uniform is prescribed for the students of the college:
          </b>
        </p>
        <br />
        <h2>BS (Hons) Students:</h2>
        <br />
        <p>
          <b> Summer:</b> Sliver grey trousers, white shirt,Maroon Tie, black
          shoes.
        </p>
        <br />
        <p>
          <b>Winter:</b> Sliver grey trousers, white shirt, Maroon Blazer /
          jersey, black shoes.
        </p>
        <br />
        <h2>NOTE</h2>
        <p>
          Fine at the rate of Rs. 25 per day is levied on violation of the
          uniform.
        </p>
      </div>
      <div className="col-6">
        <img src="./pics/bsuniform.jpg" alt="Images not found" />
      </div>
    </div>
  </div>
</>

    </>
  )
}
