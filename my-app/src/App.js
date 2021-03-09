
import './App.css';

import {Container, Row, Col, Button, Form, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <img width="400"  src="MyPicture.jpg" alt="My portrait" /> 
          </Col>
        <Col>
        <Card class="d-flex justify-content-center" style={{ marginTop: '70px',padding: '20px' }}>
            {/*<Card.Img variant="top" src="work-3M.gif" />  USE THIS LATER*/}
            <Card.Title>My Story </Card.Title>   
            <p>My Name is Akrem Ben Salem, i am a photography and videography hobbiest. <br />
                I have been editing and filming videos for 8 years now and practicing the art of photography for about 6. <br />
                Adding to that, i have some experience in audio mastering and production.<br />
                i've selected some video projects i'm proud of, you can check it below. <br />
                In addition to my experience in audiovisulal production, i am an electromechanical engineer. <br /> 
              </p>
        </Card>
        </Col>
        </Row>
        <h1 style={{ margin: '30px'}}>My Work</h1>
        <Row>
          <Col>
          <Card class="d-flex justify-content-center">
            <Card.Img variant="top" src="work-3M.gif" />
            <p>This video is an aftermovie of an event called <br />"3 Mètres Au-dessus de L'art" by Club Radio Libertad ESPRIT.
              </p>
            <Card.Footer>
            <Button href="https://youtu.be/5J3QtTvg1vA" target="_blank" size="sm" style={{ width: '100px' , margin:'10px', alignSelf:'center'}}>Watch video</Button>
            </Card.Footer>
          </Card>
          </Col>
          <Col>
          <Card class="d-flex justify-content-center">
            <Card.Img variant="top" target="_blank" src="work-chtourou.gif" />
            <p>  This video is the application of Mariem Chtourou <br /> for an MCVP position in Aiesec of tunisia <br /> 2019-2020.                      
              </p>
            <Card.Footer>
            <Button href="https://youtu.be/GQNVU042Vgc" target="_blank" size="sm" style={{ width: '100px' , margin:'10px', alignSelf:'center'}}>Watch video</Button>
            </Card.Footer>
          </Card>
          </Col>
          <Col>
          <Card class="d-flex justify-content-center">
            <Card.Img variant="top" src="work-transform.gif" />
            <p>This video is was created to promote ESPRO Junior entreprise and to illustrate the transformation of members after joing the entity
              </p>
            <Card.Footer>
            <Button href="https://youtu.be/5J3QtTvg1vA" size="sm" target="_blank" style={{ width: '100px' , margin:'10px', alignSelf:'center'}}>Watch video</Button>
            </Card.Footer>
          </Card>
          </Col>
        </Row>
        <Row style={{paddingTop:'20px'}}>
          <Col>
          <Card class="d-flex justify-content-center">
            <Card.Img variant="top" src="work-jurney.gif" alt="the journey GIF" />
            <p>I names this video the journey, it captures all the events of the year 18-19, the highlight of this one is the sound design.
              </p>
            <Card.Footer>
            <Button href="https://youtu.be/wdagT8DmSw4" target="_blank" size="sm" style={{ width: '100px' , margin:'10px', alignSelf:'center'}}>Watch video</Button>
            </Card.Footer>
          </Card>
          </Col>
          <Col>
          <Card class="d-flex justify-content-center">
            <Card.Img variant="top" target="_blank" src="work-Veracity.gif" />
            <p>  This one is a teaser of a music project named "Veracity", the dark style is chosen to align with the duo's identity.                      
              </p>
            <Card.Footer>
            <Button href="https://youtu.be/BVEUr-xXcC8" target="_blank" size="sm" style={{ width: '100px' , margin:'10px', alignSelf:'center'}}>Watch video</Button>
            </Card.Footer>
          </Card>
          </Col>
          <Col>
          <Card class="d-flex justify-content-center">
            <Card.Img variant="top" src="work-recruitement.gif" />
            <p>During my time at ESPRO as Marketing manager i created this video. it recaps the requitement of 2019-2020 members
              </p>
            <Card.Footer>
            <Button href="https://youtu.be/G_D4kCy70xU" target="_blank" size="sm" style={{ width: '100px' , margin:'10px', alignSelf:'center'}}>Watch video</Button>
            </Card.Footer>
          </Card>
          </Col>
        </Row>
        <Form style={{paddingTop:'20px' ,paddingBottom:'35px'}}>
          <Form.Group controlId = "formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="yourEmail@email.com"/>
          </Form.Group>
          <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Full name"/>
          </Form.Group>
          <Form.Group controlId = "formSelect">
            <Form.Label>Request Type</Form.Label>
            <Form.Control as="select">
              <option selected>Invoice</option>
              <option>Information</option>
              <option>Partnership</option>
              <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formRequestMessage">
              <Form.Label>Request</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder ="Please type your request description here"/>
            </Form.Group>
          <Button>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
