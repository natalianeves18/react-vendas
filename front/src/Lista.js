import React, { useState, useEffect } from "react"
import { Col, FormGroup, Row, Form, Label, Input, Button, Alert } from "reactstrap"
import api from './api'

export default function Lista() {
  return (
    <>
      <Form>
          <Row>
              <Col sm='12' className='mb-2'>
                  <h6>Cadastro de lista de compras</h6>
              </Col>
          </Row>
      </Form>
    </>
  )
}
