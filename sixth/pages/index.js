import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import { Button, Container, Row, Col } from 'reactstrap';
import ReactTyped from 'react-typed';


class Index extends Component {
  constructor(props) {
    super(props);
    this.stringTyped = ['Developer', 'Coding Lover', 'React JS', 'FullStack', 'DevOps', 'Ace Player'];
  }
  componentDidMount() {

  }
  componentDidUpdate() {

  }
  render() {
    const { isAuthenticated, user } = this.props;
    return (
      <BaseLayout isAuthenticated={isAuthenticated} user={user}>
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2>Full Stack Web Development</h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history
                        </div>
                      </div>
                      <img className="image" src="/static/images/section-1.png" />
                      <div className="shadow-custome">
                        <div className="shadow-inner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Amien Kurniawan.
                    Get informed, Collaborate and Discover projects i was working on through the years!
                  </h1>
                </div>
                <ReactTyped
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={this.stringTyped}
                  showCursor
                  cursorChar="|"
                  className="self-typed"
                />
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }

}
export default Index;