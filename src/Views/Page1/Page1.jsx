import React from 'react';
import {
  Col,
  Row,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import Layout from '../../Components/Layout';

function Page1() {
  return (
    <Layout>
      <Col md={6} className="result">
        <Card>
          <CardHeader>
            Page 1
          </CardHeader>
          <CardBody>
          </CardBody>
        </Card>
      </Col>
    </Layout>
  );
}

export default Page1;



