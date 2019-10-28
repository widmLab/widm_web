import React from 'react';
import Container from 'react-bootstrap/Container';

const styles = {
  wrapper : {
      'marginBottom' : '10px',
      'textAlign' : 'center',
  },
  atag : {
      'fontSize' : '20px',
  }
}
const Twitter = () => (
    <Container className="containWrapper" style={styles.wrapper} id="twitter" fluid>
      <h1 className="titletext">Twitter</h1>
      <a style={styles.atag} href="https://twitter.com/WebWidm"
        className="twitter-timeline"
      >tweets by @WIDM_WEB
      </a>
    </Container>
  );

export default Twitter;