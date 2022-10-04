import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/home.css"


function Home() {
  return (
    <div id='homeArea'>
      <Container style={{height:'100%'}} fluid>
        <Row style={styles.topRowStyles}>
          <h1 className='titleColor' id='homeTitle'>Mak Yeong Meng</h1>
        </Row>
        <Row>
          {/* Left Part */}
          <Col style={{height:'100%', display:'flex', alignContent:'center', justifyContent:'center'}}>
            <div id="vl"></div>
            <div id="academicSection">
              <h4 className='titleColor'>Academic Qualification</h4>
                <h5> BSc in Computer Science</h5>
                <p> University of London,  April 2020 - April 2023</p>

                <h5> Diploma in Accountancy</h5>
                <p> Ngee Ann Polytechnic,  April 2015 - May 2018</p>

                <h4 className='titleColor' id="experienceSection">Job Experience</h4>
                <h5> Software Engineer Intern</h5>
                <p> ABB, Jul 2022 - Dec 2022</p>

                <h5> Data Science Assitant</h5>
                <p> CrescoData, Jan 2022 - Jun 2021</p>

                <h5> Data Science Intern</h5>
                <p> CrescoData, Oct 2021 - Dec 2021</p>
            </div>
          </Col>

          {/* Middle Part */}
          <Col  style={{height:'100%', display:'flex', alignContent:'center', justifyContent:'center'}}>
            <div id="imageSection">
              <h4>Profile Picture</h4>
            </div>
          </Col>

          {/* Right Part */}
          <Col  style={{height:'100%', display:'flex', alignContent:'center', justifyContent:'center'}}>
          <div id="aboutMeSection">
              <h4 className='titleColor'>Software Engineer</h4>
                <h5> Based in Singapore</h5>
                <p> Hi! I am a Final Year Computer Science student who is looking to start as a Software Engineer!  am dedicated to developing applications that are able to 
                  help solve business problems and value-add to the company. </p>
                <p> 
                  During my time in ABB,I was able to experience multiple stages of the software development cycle. 
                  I have went through the Planning stage up to the implementation stage. I was tasked to develop a 
                  software prototype using Python and have attended multiple review sessions to retrieve feedbacks from stakeholders on the
                  current state of our software and make adjustments from there.
                </p>
                <p> 
                  On the other hand, when I was in CrescoData, I was working with data from our own platform and perform data cleaning and manipulation
                  to produce reports that suit the needs of the client. Furthermore, I have also worked with APIs from different e-commerce platforms to 
                  retrieve relevant data that will be beneficial to the client's needs.
                </p>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
}

const styles={
  topRowStyles: {
    height:'20%',
    width:'100%',
    justifyContent: 'center',
    alignContent:'center',
    textAlign:'center'
  }

}

export default Home;
