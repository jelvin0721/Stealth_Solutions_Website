import {Button, Col, Row, Card} from 'react-bootstrap';
var data = [
   
    {
        id: 1,
        image : require("../assets/images/products/extremerx.png"),
        title: "Extreme Rx",
        desc: "Extreme Rx is a custom medication that incorporates enclomiphene, an advanced remedy designed to naturally elevate testosterone levels. This highly-specialized formulation is made to enhance strength, promote muscle growth, elevate libido, and positively impact mood.",
        bcolor:"#E0CF75",
        fcolor: ""
    },
    {
        id: 2,
        image : require('../assets/images/products/lightningrx.png'),
        title: "Lightning Rx",
        desc: "Lightning Rx is a specifically crafted troche medication incorporating three prominent active ingredients – Sildenafil, Tadalafil, and Oxytocin. Diverging from conventional ED medications requiring 45 minutes to an hour for efficacy, the Lightning Rx starts working in just 15 minutes and can maintain its effects for up to 36 hours.",
        bcolor:"#DF7E5B",
        
    }

   ]
export default function Appcont2(){
    return(
        <div style={{width:"97.65625vw", marginTop:"13.020833333333334vw"}} >
            <div className='justify-content-center mb-5  ' xs='auto'>
                <Row >
                    <Col className='text-center'>
                        <h1 className='mb-3' style={{fontWeight:"bold"}}>Personalized treatment plan with our Custom Rx</h1>  
                        <label className='mb-3'>Uplink Health Rx has brought together a global team of experts to develop groundbreaking custom medications specifically tailored for individuals who only want the best results possible. Total Male Rx’s custom medications are made to deliver more advanced results compared to traditional medication.</label>
                        <Button variant="danger" size="lg" >Get Started</Button>
                    </Col> 
                </Row>
                <Row>
                        {
                        data.map(hero=>{return(
                            <Col key={hero.id}
                            >
                                <Card  className='mt-5'>
                                    <Card.Body style={{ backgroundColor:hero.bcolor, }} className='text-center'>
                                            <Card.Img variant="top" src={hero.image} style={{width:"15.494791666666666vw", heigh:"22.786458333333332vw" }} />
                                    </Card.Body>
                                    <Card.Body style={{width:"678px",height:"209px" }}>
                                        <Card.Title>{hero.title}</Card.Title>
                                        <Card.Text style={{width:"44.140625vw", height:'3.7109375vw', fontSize:"1.0416666666666667vw"}}>
                                            {hero.desc}
                                        </Card.Text>
                                        <Button variant="danger" className='mt-4'>Go somewhere</Button>
                                    </Card.Body>
                                </Card>  
                            </Col>
                        )})
                         
                        }
                        
                 
                </Row>
                 
             </div>
        </div>
        
    )
}