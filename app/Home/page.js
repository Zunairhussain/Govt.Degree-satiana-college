import { Container, Row, Col } from 'react-bootstrap';
import img1 from "../assets/1.jpg"
import Image from "next/image";
import img2 from "../assets/Quran.png"
import Header from "../(components)/header/Header";
import img3 from "../assets/PB UH.png"
import img4 from "../assets/allama.jpg"


export default function Home () {
  return (
    <>
    
        <Header />
        <div style={{ textAlign: 'center', padding: '5px' }}>
        <Image src={img1} alt="images not found" width="1180px" height="450px" style={{ textAlign: 'center' }} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6"><Image style={{ margin: '20px' }} src={img2} alt="image not found" width="550" /></div>
          <div className="col-6"><Image style={{ margin: '20px' }} src={img3} alt="Image not found" width="505" height="416px" /></div>
        </div>
      </div>

      <div style={{ backgroundColor: 'rgb(23, 55, 76)', color: 'white', textAlign: 'center', marginLeft: '20px', marginTop: '20px', marginRight: '20px', padding: '5px', fontSize: 'larger' }}>
        <h1>Principal's Message</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Image src={img4} alt="images not found" width="400px" height="450px" style={{ textAlign: 'center', marginTop: '10px' }} />
            <h2>Mian Tarafat Ali   2023-12-31 </h2>
          </div>
          <div className="col-6">
            <h2 style={{ textAlign: 'center', backgroundColor: 'rgb(33, 33, 180)', color: 'white', padding: '10px', marginTop: '10px' }}>Principal Message</h2>
            <p style={{ border: '5px solid black', padding: '10px', marginTop: '5px' }}>
              After serving in the Education department as a teacher for a prolonged period of 32 years, I have nourished certain dreams and ideas in my mind for the training and education of our new generation and to enhance the standard of Government educational Institutions Now when I am at the twilight of my career, Allah Almighty has blessed me with this opportunity in the shape of my tenure as Principal to materialize my dreams...
            </p>
          </div>
        </div>
      </div>

</>
  );
}