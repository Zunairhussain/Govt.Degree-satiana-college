import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1 from "../../assets/Logo.png"
export default function Header() {
  return (
    <>
  <div className="menu-bar">
    <div>
      <Image src={img1} alt="images not found ...." style={{width :"120px" , height :"120px"}}  />
      </div>
      <h1 style={{ borderLeft: '5px solid red' }}>Government Graduate Degree College </h1>
      <ul>
        <li>
          <Link href="/Home" style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'white' }}>Home</h3>
          </Link>
        </li>
        <li>
          <Link href="/Gallery" style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'white' }}>Gallery</h3>
          </Link>
        </li>
        <li>
          <Link href="/Department" style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'white' }}>Department</h3>           
          </Link>
          <div className="sub-menu-1">
            <ul>
              <li>
                <Link href="/Department" style={{ textDecoration: 'none' }}>
                  <h5 style={{ color: 'white' }} >Department</h5>
                </Link>
              </li>
              <li>
                <Link href="/Programe" style={{ textDecoration: 'none' }}>
                  <h5 style={{ color: 'white' }} >Programme</h5>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/About"  style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'white' }}>About us</h3>
          </Link>
          <div className="sub-menu-1">
            <ul>
              <li>
                <Link href="/About" style={{ textDecoration: 'none' }}>
                  <h5 style={{ color: 'white' }} >About us</h5>
                </Link>
              </li>
              <li>
                <Link href="/Glimpse" style={{ textDecoration: 'none' }}>
                  <h5 style={{ color: 'white' }} >Glimpse Of College</h5>
                </Link>
              </li>
              <li>
                <Link href="/Rules">
                  <h5 style={{ textDecoration: 'none',color : "white" }}>Rules</h5>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/Contact"  style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'white' }}>Contact us</h3>
          </Link>
        </li>
        <li>
          <Link href="/Admission" style={{ textDecoration: 'none' }}>
              <h3 style={{ color: 'white' }}>Admission</h3>
          </Link>
        </li>
      
      </ul>
    </div>



    </>
    )
}
