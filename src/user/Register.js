
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Register() {

const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

    return (
        <div className='login'>
        <Container fluid>

           <Form className='login-form'>
                <Form.Group className="mb-3 f-group" controlId="formEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                       Name
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="formEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 f-group" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Email
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 f-group" controlId="form">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 f-group" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button> 
               
            </Form>
        </Container>
      </div>
    );

}

export default Register;