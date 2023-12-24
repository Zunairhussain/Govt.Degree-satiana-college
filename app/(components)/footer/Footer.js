import Link from 'next/link'
import React from 'react'
import img1 from "../../assets/Logo.png"
import img2 from "../../assets/Facebook.jpg"
import img3 from "../../assets/youtube.jpg"
import img4 from "../../assets/twitter.jpg"
import img5 from "../../assets/instagram.png"
import img6 from "../../assets/email.jpg"
import img7 from "../../assets/call logo.jpg"
import Image from 'next/image'


export default function Footer() {
  return (
   <>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
    <>

<div className="container" style={{ backgroundColor: 'white', color: 'black', padding: '43px' }}>
        <div className="row">
          <div className="col-1">
            <Image src={img1} alt="images not found" width={90} height={90} style={{ smarginTop: '7px' }} />
          </div>
          <div className="col-3">
            <h3 style={{ borderLeft: '5px solid brown', padding: '10px' }}>Government Graduate Degree College</h3>
          </div>
          <div className="col-2">
            <h3 style={{ marginTop: '10px' }}>Many More</h3>
            <p style={{ borderLeft: '5px solid brown', padding: '10px' }}>
              <Link href="./Fees">Fee & Fine</Link>
            </p>
            <p style={{ borderLeft: '5px solid brown', padding: '10px' }}>
              <Link href="./Exams">Exam Schedules</Link>
            </p>
          </div>
          <div className="col-2">
            <h3 style={{ marginTop: '10px' }}>Quick Access</h3>
            <p style={{ borderLeft: '5px solid brown', padding: '10px' }}>
              <Link href="./Time">Time Table</Link>
            </p>
            <p style={{ borderLeft: '5px solid brown', padding: '10px' }}>
              <Link href="./Merit">Merit Lists</Link>
            </p>
          </div>
          <div className="col-3">
            <h3 style={{ marginTop: '10px' }}>Social links</h3>
            <p style={{ borderLeft: '5px solid brown', padding: '10px' }}>
              <Link href="https://www.facebook.com/p/Government-Graduate-College-Satiana-Road-Faisalabad-100043665703766/">
                <Image src={img2} alt="images not found" width={40} height={40} style={{ borderRadius: '45%' }} />
              </Link>
              <Link href="https://www.youtube.com/">
                <Image src={img3} alt="images not found" width={40} />
              </Link>
              <Link href="https://twitter.com/">
                <Image src={img4} alt="images not found" width={37} />
              </Link>
              <Link href="https://www.instagram.com/">
                <Image src={img5} alt="images not found" width={40} />
              </Link>
            </p>
            <p>
              <Image src={img6} alt="images not found" width={15} style={{ borderRadius: '45%' }} />
              info@GGDC.gmail.edu.pk
            </p>
            <p>
              <Image src={img7} alt="images not found" width={15} style={{ borderRadius: '45%' }} />
              (041)9220283
            </p>
            <p style={{ borderLeft: '5px solid brown', padding: '10px' }}>Govt. Municipal Degree College Faisalabad Jaranwala Road, Faisalabad</p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'black', color: 'whitesmoke', textAlign: 'center' }}>
        Copyright © 2022 || All rights reserved.<Link href="./Home1"> GGDC.edu.pk</Link>
      </div>


</>
   </>
  )
}
