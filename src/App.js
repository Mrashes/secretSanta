import './App.scss';
import { Container, Row, Col, Form } from "react-bootstrap"
// import { useState,  } from "react"


const App = (props) => {
  // const [totalPeople, setTotal] = useState(1)
  // const [people] = useState([{name: "", email: ""}])

  return (
    <Form>
      <Container className="santa-wrapper">
        <Row>
          <Col className="content">
            <h1 className="text-center">Secret Santa</h1>
            {/* {people.map(el => <label>Name: <input value={el.name}/></label>)} */}
            
            {/* <button type="button" onClick={() => setTotal(totalPeople+1)}>Add New Person</button> */}
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default App;
