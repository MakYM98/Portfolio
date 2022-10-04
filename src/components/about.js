import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/about.css"
import webCert from '../images/web_development.jpg'
import dashCert from '../images/python_dash.jpg'
import githubCert from '../images/github.jpg'
import {useRef} from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

function About() {
  const scrollElement = useRef(null)

  const scrollLeft = () => {
    scrollElement.current.scrollLeft += 500
  }

  const scrollRight = () => {
    scrollElement.current.scrollLeft -= 500
  }


  return (
    <div className='aboutArea'>
      <Container   style={{height:'100%'}} fluid>
        {/* Skills */}
        <Row id='skillsSection'>
          <div id='skillHeader'>
            <h1>Skills</h1>
          </div>
          
          <Col>
          <h5> Python </h5>
            <div className="skillBar">
              <div className="skills python"><p className='percentageText'>80%</p></div>
            </div>
            <h5> HTML/CSS </h5>
            <div className="skillBar">
              <div className="skills html"><p className='percentageText'>80%</p></div>
            </div>

            <h5> JavaScript </h5>
            <div className="skillBar">
              <div className="skills js"><p className='percentageText'>70%</p></div>
            </div>
            <h5> ReactJs + React Native</h5>
            <div className="skillBar">
              <div className="skills react"><p className='percentageText'>70%</p></div>
            </div>
            
          </Col>
          <Col>
            <h5> Git </h5>
            <div className="skillBar">
              <div className="skills git"><p className='percentageText'>70%</p></div>
            </div>
            <h5> Microsoft Excel </h5>
            <div className="skillBar">
              <div className="skills excel"><p className='percentageText'>70%</p></div>
            </div>
            <h5> SQL </h5>
            <div className="skillBar">
              <div className="skills sqlite"><p className='percentageText'>50%</p></div>
            </div>
            <h5> Kotlin</h5>
            <div className="skillBar">
              <div className="skills kotlin"><p className='percentageText'>50%</p></div>
            </div>
          </Col>
        </Row>

        {/* Certifications */}
        <Row id='certSection'>
          <div id='skillHeader'>
            <h1>Certifications</h1>
          </div>

          <div id='certDiv' ref={scrollElement}>
            <img src={webCert}/>
            <img src={dashCert}/>
            <img src={githubCert}/>
          </div>

          <div id='certButtons'>
            <FaArrowAltCircleLeft id="leftArrow" onClick={scrollRight}/>
            <FaArrowAltCircleRight id="rightArrow" onClick={scrollLeft}/>
          </div>

          
        </Row>
      </Container>
    </div>
  );
}

export default About;
