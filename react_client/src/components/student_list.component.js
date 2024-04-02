import React, { Component } from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Student_list extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      errorMessage: ''
    }
  };
  componentDidMount(){
    document.title = "Student Lists";
    this.fetchStudent();
  }
  fetchStudent = () => {
    Axios.get("http://localhost:5000/students")
    .then(response => {
      this.setState({
        data: response.data
      })
    })
    .catch(error => {
      this.setState({
        errorMessage: 'Result Not found!!'})     
      })
  }
  render() {
    return (
      <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Position</th>
          <th>Theme</th>
          <th>University</th>
          <th>Project</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data && this.state.data.map((item) => (
        <tr>
        <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.position}</td>
          <td>{item.setting.theme}</td>
          <td>{item.university.name}</td>
          <td>{item.Projects.map((pj) => (
            <>{pj.name}{","}</>
          ))}
          </td>
          <td>
          <Button variant="warning">Edit</Button>{' '}
          <Button variant="danger">Update</Button>{' '}
          </td>
        </tr>  
        ))}
      </tbody>
    </Table> 
      </>
    )
  }
};
export default Student_list;