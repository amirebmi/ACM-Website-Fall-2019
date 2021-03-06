import React from 'react'
import {Tabs,Row,Col,Tab,Nav,Container,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import "./Projects.css"
import LegacyProject from './LegacyProject'
import NewProject from './NewProject'

class Projects extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        return (
            <div class="project-body">
                {/* <div class="quote-style-1 quote-bg">
                    <div class="quote-block" style={{'margin-left': '15%', 'margin-right': '15%'}}>
                    <br></br>
                    Looking for experience?<br></br> Participate in our <span className="highlight-text"><i><b>projects and programs!</b></i></span>
                    <br></br>
                    <br></br>
                    </div>
                </div> */}
                <div>
                    <div className="project-title-text">
                    <p></p>
                        <p>Looking for experience?</p>
                        <p>Participate in our <span className="emphasis">projects</span>!</p>
                    </div>
                    <div className="project-title-card"></div>
                </div>
                <div class="card project-card">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="spring2020projects">
                        <Row>
                            <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="spring2020projects">Spring 2020</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="first">Fall 2019</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-nav-link anchor-white" eventKey="second">Spring 2019</Nav.Link>
                                </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>                                
                                <Tab.Content className="project-tab-content">
                                
                                <h3><b>Disclaimer!</b></h3>
                                    <span class="disclaimer"><b>1. You must be a member of ACM to participate in the projects!</b> If you are not a member, 
                                    <b><i><span class="highlight-text"> you will not be allowed in.</span></i></b></span><br></br>
                                    <span class="disclaimer"><b>2. Admittance to these projects are <span class="highlight-text">first come, first served.
                                    </span></b> Space is limited in these projects, so you are advised to attend the First General Meeting to secure 
                                    yourself a spot in the project of your choosing.</span><br></br>
                                    <span class="disclaimer"><b>3. The deadline to apply to the Spring 2020 projects is <i><span class="highlight-text">
                                    Sunday, February 9th, 2020 at 6:00 PM.</span></i></b></span><br></br>
                                    <br></br><br></br>

                                    <Tab.Pane eventKey="spring2020projects">
                                        <Tab.Container defaultActiveKey="S2020beginner">                                            
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="S2020beginner">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="S2020advanced">Advanced Project</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                <Tab.Pane eventKey="S2020beginner">
                                                    <NewProject
                                                        opener="Want to learn how to advertise your skillset in a tech-savvy way?"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Personal Website is a beginner’s project that requires little to no programming experience. If you have no coding experience or you are just interested in coding, then this is the perfect project for you. In this project, you will create your own personal website. This project is an excellent way to create a portfolio to showcase your art or promote yourself. You can even create your own blog and design the website however you like. The technologies that you will learn will include: HTML, CSS, JavaScript, and Bootstrap."
                                                        technologies={["HTML", "CSS", "JavaScript", "Bootstrap"]}
                                                        poster="./spring2020/Personal Website.png"
                                                        linkToSignUp="https://docs.google.com/forms/d/e/1FAIpQLSePO_VbTGlI838nY0oXqDpQDGC6GZ6guEMwJqrHHp32gR3-ag/viewform"
                                                        //Use '/' not '-' for dates to prevent issues on Firefox.
                                                        openDate="01/28/2020"
                                                        opentime="14:59:59"
                                                        deadlineDate="02/09/2020"
                                                        deadlineTime="17:59:59"
                                                        projectLeadersImages={["./leaders/Srivats V.png", "./leaders/Giovanni C.png", "./leaders/Kevin F.JPG"]}
                                                        projectLeaders={["Srivats Venkataraman", "Giovanni Castellanos", "Kevin Flores"]}
                                                        />
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="S2020advanced">
                                                    <NewProject
                                                        opener="Space Invaders, but with extra steps!"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="Space Invaders Part II is a game development project, which is a continuation of last semester's project. New features include new bosses, level progressions, and special abilities. This project will contain a lot of object-oriented programming along with some data structures. This project is meant for more experienced programmers who would like a challenge and for those who participated in last semester’s Space Invaders Part I. The technologies and language used will be Python and Pycharm."
                                                        technologies={["Python", "PyCharm"]}
                                                        poster="./spring2020/Space Invaders 2.0.png"
                                                        linkToSignUp="https://docs.google.com/forms/d/e/1FAIpQLSeZ9Pdvj0luRQgZ7B7JWM8eRA3-xq0Mn9VYH_K59MeKz7ehNw/viewform"
                                                        //Use '/' not '-' for dates to prevent issues on Firefox.
                                                        openDate="01/28/2020"
                                                        opentime="14:59:59"
                                                        deadlineDate="02/09/2020"
                                                        deadlineTime="17:59:59"
                                                        projectLeadersImages={["./leaders/Andrew G.png", "./leaders/Elton M.png", "./leaders/Grover.JPG", "./leaders/Luis.JPG"]}
                                                        projectLeaders={["Andrew Gonzalez", "Elton Lin", "John Grover", "Luis Gonzalez"]}
                                                        />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="first">
                                        <Tab.Container defaultActiveKey="low1920">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="low1920">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="hi1920">Intermediate Project</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">

                                                <Tab.Pane eventKey="low1920">
                                                    <LegacyProject
                                                        opener="Who doesn't enjoy games even a little?"
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="The instant gratification, the flashy lights, the addictive player-application feedback. In this workshop, we recreated a classic arcade game from the late 70's, Space Invaders, using Python, a high-level programming language that is not only extremely easy to learn but also widely used."
                                                        technologies={['Python', 'PyGame', 'Python', 'Git/Github', 'Did I mention Python...?']}
                                                        poster='./pictures/beginner.png'
                                                        projectImages={[
                                                            './Space Invaders/space1.jpg',
                                                            './Space Invaders/space2.jpg',
                                                            './Space Invaders/space3.jpg',
                                                            './Space Invaders/space4.jpg',
                                                            './Space Invaders/space5.jpg'
                                                             ]}
                                                        projectLeadersImages={['./leaders/Andrew G.png','./leaders/Cristian C.png', './leaders/Elton M.png']}
                                                        projectLeaders={['Andrew Gonzalez', 'Cristian Corrales', 'Elton Lin']}
                                                        />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="hi1920">
                                                    <LegacyProject 
                                                        opener='Looking for a bit of a challenge?'
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description='In this workshop, we created a chat application (a chapplication) using React, a JavaScript web framework that everybody and their grandmas use. Learning how to use React could score you major brownie points to potential recruiters.'
                                                        technologies={['React.js', 'Git/Github', 'Firebase', 'Node.js', 'HTML', 'CSS']}
                                                        poster='./pictures/intermediate.png'
                                                        projectImages={[
                                                            './Accord/accord1.jpg', 
                                                            './Accord/accord2.jpg', 
                                                            './Accord/accord3.jpg', 
                                                            './Accord/accord4.jpg'
                                                        ]}
                                                        projectLeadersImages={['./leaders/Emily P.png', './leaders/Ingelbert F.png', './leaders/Srivats V.png', './leaders/Deric K.png']}
                                                        projectLeaders={['Emily Pascua', 'Ingelbert Figueroa', 'Srivats Venkataraman', 'Deric Kwok']}
                                                        />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <Tab.Container defaultActiveKey="low1819">
                                            <Nav variant="tabs">
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="low1819">Beginner Project</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className="project-nav-link anchor-blue" eventKey="hi1819">Advanced Project</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content className="project-tab-content">
                                                
                                                <Tab.Pane eventKey="low1819">
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description='Past attendees of the workshops for this project learned how to create their own website. There are people who make their own websites to advertise themselves, so learning how to make your own website could give you an advantage in the job-hunting scene. Since HTML and CSS, the two technologies that make up many websites, are both fairly easy to learn, these workshops were geared towards beginners. '
                                                        technologies={['HTML5', 'CSS', 'JavaScript', 'Bootstrap']}
                                                        poster='./pictures/webDev.jpg'
                                                        projectImages={['./pictures/web1.jpg', './pictures/web2.jpg', './pictures/web3.jpg']}
                                                        projectLeadersImages={['./leaders/Deric K.png']}
                                                        projectLeaders={['Deric Kwok']}
                                                        />
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="hi1819">
                                                    <LegacyProject
                                                        opener=''
                                                        //Description is long, but put on a single line to avoid word spacing issues
                                                        description="The workshops for this project focused on teaching its attendees how to use Android Studio to design and build an Android app. Using Android Studio, past attendees ported ACM's website to an app format. Although creative freedom was limited compared to the beginner's project of this year, workshop attendees had the creative freedom to design the app in any way they wanted. Due to the skills required to operate Android Studio, the workshops were geared towards advanced programmers who already knew the fundamentals of programming with Java."
                                                        technologies={['Android Studio', 'Java']}
                                                        poster='./pictures/androidDev.jpg'
                                                        projectImages={['./pictures/android1.jpg', './pictures/android2.jpg', './pictures/android3.jpg']}
                                                        projectLeadersImages={['./leaders/Ingelbert F.png', './leaders/Emily P.png', './leaders/Srivats V.png']}
                                                        projectLeaders={['Ingelbert Figueroa', 'Emily Pascua', 'Srivats Venkataraman']}
                                                        />
                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>                                        
                                    </Tab.Pane>                            
                                </Tab.Content>
                            </Col>
                        </Row>
					</Tab.Container><br></br>
                </div>
            </div>
        );
    }
}

export default Projects