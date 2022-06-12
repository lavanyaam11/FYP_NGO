import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import Header from './Header';
import NGOSignIn from './NGOSignIn';
import DonorSignIn from './DonorSignIn';

function Hero() {
  const [modalShow, setModalShow] = useState(false);
  const [modalDonor, setModalDonor] = useState(false);
  return (
    <>
      <Header setModalShow={setModalShow} setModalDonor={setModalDonor}/>
      <NGOSignIn
        show={modalShow}
        onHide={() => setModalShow(false)} />
      <DonorSignIn
        show={modalDonor}
        onHide={() => setModalDonor(false)}
      />
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="ngo.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>GiveEthCare</h3>
            <p>Cultures all over the world have spoken a great deal on the merits of giving back to society. Charity finds mention in the works of eminent writers, thinkers and leaders extensively, and in all religions. However, for many giving back requires personal reasons. In the words of Aristotle: “To decide to whom to give it, and how large and when, and for what purpose and how, is neither in every man’s power nor an easy matter.” Here are some great reasons that can all give one a personal push to donate to charity.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/oneee.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Good Job</h3>
            <p>As you have embarked upon the journey of charity, you must keep yourself abreast of the most significant non-governmental organisations. International child rights NGO Save the Children is India’s most renowned and trust children’s charity, and runs pan-India projects that brings access to essential services like healthcare, education, social protection schemes and life-saving aid during disasters. Powered by kind-hearted individuals like yourself as well as corporations, the NGO is able to maintain a consistent supply chain of essential life-saving medicine, nutrition, and aid services. The knowledge that your hard-earned money has gone to a meaningful goal like child rights will give you impetus to do more for society.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="/backg.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Thank you</h3>
            <p>You just made the world a better place to live.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <h2 className="d-flex justify-content-center">Project Guide</h2>
      <div className="d-flex justify-content-around">
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src="Ashritha.jpg" />
          <Card.Body>
            <Card.Title>Ashritha R Murthy</Card.Title>
            <Card.Text>
              Bonjour.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br></br>
      <h2 className="d-flex justify-content-center">THE TEAM</h2>
      <div className="d-flex justify-content-around">
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src="anu.jpg" />
          <Card.Body>
            <Card.Title>Anushree B</Card.Title>
            <Card.Text>
              Hola.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src="gowry.jpg" />
          <Card.Body>
            <Card.Title>Gowry A V</Card.Title>
            <Card.Text>
              Hi.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br></br>
      <div className="d-flex justify-content-around">
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src="lavanya.jpg" />
          <Card.Body>
            <Card.Title>Lavanya A M</Card.Title>
            <Card.Text>
              Hey.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '16rem' }}>
          <Card.Img variant="top" src="yuki.jpg" />
          <Card.Body>
            <Card.Title>Yuktha N</Card.Title>
            <Card.Text>
              Hello.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br></br>
    </>
  );
}

export default Hero;