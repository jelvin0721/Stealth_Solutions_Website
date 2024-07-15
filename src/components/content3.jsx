import {Button, Col, Row, Card} from 'react-bootstrap';
var data = [
   
    {
        id: 1,
        image : require("../assets/images/content3.png"),
        title: "Finasteride",
        desc: "Finasteride is an FDA-approved pharmacological treatment designed to treat androgenic alopecia, often referred to as male-pattern hair loss. Its mechanism involves the inhibition of the androgen DHT, effectively slowing down hair loss and fostering the growth of strong and healthy hair.",
        bcolor:"#E0CF75",
        fcolor: ""
    }

   ]
export default function Appcont3(){
    return(
        <div style={{width:"97.65625vw", marginTop:"13.020833333333334vw"}} >
            <div className='justify-content-center mb-5 ' xs='auto'>
                <Row >
                    <Col className='text-center'>
                        <h1 className='mb-3' style={{fontWeight:"bold"}}>Real Solutions, Made Simple</h1>  
                        <label className='mb-3'>Uplink Health Rx provides high-quality medication for the at-home treatment of androgenic alopecia, commonly known as male-pattern baldness.</label>
                    </Col> 
                </Row>
                <Row>
                    {
                        data.map(hero=>
                        {
                            return(
                                    <Col  key={hero.id}>
                                        <Card className='mt-5'>
                                            <Card.Body style={{ }} className='text-center'>
                                                    <Card.Img variant="top" src={hero.image}  className='img-fluid'/>
                                            </Card.Body>
                                            <Card.Body style={{width:"678px",height:"209px" }}>
                                                <Card.Title>{hero.title}</Card.Title>
                                                <Card.Text style={{fontSize:"1.0416666666666667vw"}}>
                                                    {hero.desc}
                                                </Card.Text>
                                                <Button variant="danger" size="lg" >Get Started</Button>
                                            </Card.Body>
                                        </Card>  
                                    </Col>
                                )
                        })            
                    }
                </Row>
                 
             </div>
        </div>
        
    )
}