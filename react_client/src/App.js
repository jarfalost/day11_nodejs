import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Student_list from './components/student_list.component'
import Student_create from './components/student_create.component'
import Student_update from './components/student_update.component'
import Student_project from './components/student_project.component'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">ITDI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Student" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/">List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/student_create">
                Create
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/student_project">Add student to project
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className = 'container mt-3'>
        <Routes>
          <Route path = "/" element = {<Employee_list/>} />
          <Route path = "/student_create" element = {<Student_create/>} />
          <Route path = "/student_update" element = {<Student_update/>} />
          <Route path = "/student_project" element = {<Student_project/>} />
        </Routes>
      </div>
    </div>    
    )
  }
}
export default App;