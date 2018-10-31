import React, { Component } from 'react';

import HomeworkDetails from './homeworkdetails';
import HomeworkHeader from './homeworkheader';
import NewHomework from './newhomework';
import { Row, Col, Button, Modal, CardPanel, Tabs, Tab, Container, Card } from 'react-materialize';
import './App.css';

const statuses = [
  {id: 0, status: 'Not Started'},
  {id: 1, status: 'Started'},
  {id: 2, status: 'Complete'},
  {id: 3, status: 'Handed In'},
  {id: 4, status: 'Overdue!'}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {statuses:  statuses,
                  students:  [],
                  homeworks: []}
    this.dateChanged = this.dateChanged.bind(this);
  }

  componentDidMount() {

    // Get the list of students from the DB.
    fetch('http://localhost:3001/api/homework/students').then(function(data){
      return data.json();
    }).then (json => {
      this.setState({
        students: json
      });
    });

    // Get the list of homeworks from the DB.
    fetch('http://localhost:3001/api/homework/incomplete').then(function(hwork){
      return hwork.json();
    }).then (json => {
      this.setState({
        homeworks: json
      });
    });
  }

  dateChanged (e)
  {
    console.log('dateChanged: ' + e.target.id + ' ' + e.target.value);
    //console.log(e);
  }

  render() {
    var students = this.state.students;
    var homeworks = this.state.homeworks;

    var studentHrefs = students.map((student, index) => {
      return(
        <Tab title={student}><a href={'#'+student}>{student}</a></Tab>
      );
    });

    students = students.map((student, index) => {
      var props= {homeworks: homeworks,
                    student: student};
      var ahprops = {student: student,
                     addHomework: this.addHomework};
      var act = index==0 ? true : false;

      return(
          <Tab id={student} key={index} title={student} active={act}>
            <Card className="card-content s4 deep-purple lighten-4" title={'Homework for '+student}>
              <HomeworkHeader />
              <HomeworkDetails props={props} />
              <NewHomework student={student} statusList={this.state.statuses} dateChanged={this.dateChanged} />
            </Card>
          </Tab>
      );
    });

    return (
      <div className="App container">
        <Container>
          <h1 className="App-header center-align">Do Your Homework!</h1>
          <Row>
            <Col s={12} m={12}>
                <CardPanel className="App-card-panel">
                  <Tabs className="tabs-fixed-width">
                    {students}
                  </Tabs>
                </CardPanel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
