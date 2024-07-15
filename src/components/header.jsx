import {Navbar, Container} from 'react-bootstrap';
export default function AppHeader(){
    return (
        <Navbar className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    )
}