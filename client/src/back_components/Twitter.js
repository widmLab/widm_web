import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Twitter = () => {
    return(
        <Container>
            <Form.Group controlId="Twitter.ControlTextarea1">
                <h3>Twitter</h3>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" size="lg" type="submit" block>
                Send
            </Button>
        </Container>
    )
}
export default Twitter;