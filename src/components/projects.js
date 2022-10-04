import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/projects.css"
import portfolio from '../images/portfolio.png'
import todo from '../images/To-Do.jpg'
import guardify from '../images/guardify.jpg'
import habit_tracker from '../images/habit_tracker.jpg'

function Project() {
  return (
    <div id="projectArea">
        <h1 id='projectHeader'>Projects</h1>
        <Container id='projectContainer'>
          <Row>
            <Col>
              <img className='projImg' src={portfolio}/>
              <h2 className='projName'>Website Portfolio</h2>
              <p>A website created with ReactJS to show the different projects I have worked on over the years.</p>
            </Col>
            <Col>
              <img className='projImg' src={todo}/>
              <h2 className='projName'>To-Do App</h2>
              <p>A simple mobile application created with React Native that allows users to keep track of their tasks.</p>
              <a href="https://snack.expo.dev/@maym98/to-do-app">Link to App</a>
            </Col>
            <Col>
              <img className='projImg' src={guardify}/>
              <h2 className='projName'>GuardifySG </h2>
              <p>A mobile application created with Java that helps users to choose the most appropriate insurance plan. </p>
              <a href="https://github.com/alysayusoff/guardifySG">Link to Github Page</a>
            </Col>
            <Col>
              <img className='projImg' src={habit_tracker}/>
              <h2 className='projName'>Habit Tracker</h2>
              <p>Currently in development and will be updated on this page soon. It will be created with Kotlin. </p>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Project;
