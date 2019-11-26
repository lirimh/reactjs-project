import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ContactLogo from '../../img/contact-us.png'
import Image from 'react-bootstrap/Image'
import "animate.css/animate.min.css";

import './Contact.css'

export class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                  <div className="row">
                <div className="contact-form col-6 animated rollIn">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>

  <Button className="px-5" variant="primary" type="submit">
    Submit
  </Button>
</div>
<div class="contact-info col-6 animated fadeInRight">
   <Image class="mb-5" src={ContactLogo} alt="" fluid></Image>
   <p class="mt-4">Interested in our work? Want to learn more? We'd love to reach out to you and begin a conversation.
​       Fill out the form and we'll contact you shortly. We're excited about what's possible together. </p>
          <ul>
              <li>Phone Number: +381621516179</li>
          </ul>
   <h2>Let's Start a Conversation.</h2>
</div>
</div>
</div>
            </div>
        )
    }
}

export default Contact
