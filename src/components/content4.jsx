import {Col, Row} from 'react-bootstrap';
var data = [
   
    {
        id: 1,
        image : require("../assets/images/content3.png"),
        title: "Select Your Treatment",
        desc: "Explore our diverse treatment options to discover the simplest, most convenient, and cost-effective solutions for typical men's health issues. ",
        bcolor:"",
        fcolor: "#003B5B"
    },
    {
        id: 2,
        image : require("../assets/images/content3.png"),
        title: "Complete Online Health Evaluation",
        desc: "Fill out a brief 3-minute health questionnaire, which will be reviewed by a US-licensed physician. This evaluation aids in determining the most appropriate Total Male Rx treatments for your needs.",
        bcolor:"",
        fcolor: "#003B5B"
    },
    {   
        id: 3,
        image : require("../assets/images/content3.png"),
        title: "Finasteride",
        desc: "Upon approval, proceed to our secure checkout and verification process. Once processed, your order will be discreetly shipped to the address you provided. It's as simple as that!",   
        bcolor:"",
        fcolor: "#003B5B"
    }
   ]
export default function Appcont4(){
    return(
        <div style={{width:"97.65625vw", marginTop:"13.020833333333334vw"}} className='mb-5  text-center' >
            <div >
                <Row  className='text-center'>
                    <Col >
                        <h1 className='mb-3' style={{fontWeight:"bold"}}>Here’s how it works</h1>  
                    </Col> 
                </Row>
                {
                    data.map(hero=>
                    {
                        return( 
                            <Row key={hero.id}>   
                            <Col className='' lg={2} sm={12} >
                                <div className='ctrl'>
                                    <p className='numbers'>{hero.id}</p>
                                </div> 
                            </Col>
                            <Col lg={10} sm={12} >
                                <div key={hero.id} className='rounded-pill' style={{backgroundColor:"#F6F6F6",  color:hero.fcolor}}>    
                                    <Col md={'auto'}><h5   style={{fontSize:"1.25vw"}} >{hero.title}</h5></Col> 
                                    <Col style={{fontSize:"0.833vw"}} > {hero.desc} </Col>           
                                </div>
                            </Col>
                            </Row>
                            )
                    })            
                }
             </div>
        </div>
        
    )
}