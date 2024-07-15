import {Button, Row, Card, Col } from 'react-bootstrap';
var data_main =[ {
    id: 1,
    image : require("../assets/images/content.png"),
    title: "Erectile Dysfunction",
    desc: " Uplink Health Rx makes treating erectile dysfunction simpler and easier! With Uplink Health Rx, you can go through every step of the process from the comfort of your home! Get evaluated by a US-licensed physician and have your medication delivered directly from the pharmacy, to your doorstep!  "
}];
var data = [
   
    {
        id: 1,
        image : require("../assets/images/products/genericviagra.png"),
        title: "Generic Viagra",
        desc: "Sildenafil Citrate is the generic counterpart of the well-known erectile dysfunction (E.D.) medication, Viagra. Our Sildenafil Citrate tablets contain the same potency and effectiveness as its brand-name counterpart, but without the expensive price tag.",
        bcolor:"#b2dbb9",
        fcolor: ""
    },
    {
        id: 2,
        image : require('../assets/images/products/genericcialis.png'),
        title: "Generic Cialis",
        desc: "Tadalafil, the generic counterpart Cialis, best known its  extended duration of effectiveness. While other E.D. medications typically last only a few hours, Tadalafil stands out, offering up to 36 hours of efficacy with just one tablet.",
        bcolor:"#176eae",
        fcolor:"#ffffff"
    }

   ]
export default function Appcon(){
    return (
            <div className='container-fluid'>
               <Row className='text-center '>
                 <label className='mb-5' style={{fontSize:"3.515625vw", fontWeight:"bold"}}>
                    Problem Getting Hard?
                 </label>
               </Row>
                <Row>
                    <Card className="text-white mb-5">
                        {
                            data_main.map(hero=>{
                                return(
                                        <div key={hero.id}>
                                            <Card.Img  src={hero.image} alt="Card image" />
                                            <Card.ImgOverlay className='mt-5'>
                                                <Card.Title className='mb-4' style={{fontSize:"2.0833333333333335vw", fontWeight:"bold" }}>
                                                    {hero.title}
                                                </Card.Title>
                                                <Card.Text style={{width:"52.083333333333336vw", height:"14.778645833333334vw", fontSize:"1.5625vw", fontWeight:"normal"}}>
                                                    {hero.desc}
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </div>   
                                    )
                            })
                        }  
                    </Card>
                    {
                        data.map(hero=>{
                            return(
                                <Col key={hero.id} >
                                <div className="card mb-3" style ={{maxWidth:"53.255208333333336vw", height:"32.552083333333336vw", backgroundColor:hero.bcolor, color:hero.fcolor}}>
                                    <div className="row g-0">
                                        <div className="col-md-4 ">
                                        <img src={hero.image} className="img-fluid rounded" alt="..." width={"200px"} height={"200px"} style={{marginTop:" 6.510416666666667vw",marginLeft: "3.2552083333333335vw", width:"15.494791666666666vw", heigh:"22.786458333333332vw"  }} />
                                        </div>
                                        <div className="col-md-8" style={{position: "relative"}}>
                                            <div className="card-body" style={{ position: "absolute", width:"26.953125vw", height:"15.234375vw", marginTop:"8.658854166666666vw", marginBottom:"8.658854166666666vw",marginRight:"2.0833333333333335vw", marginLeft:"6.510416666666667vw"}}>
                                                <h5 className="card-title" style={{fontSize:"2.0833333333333335vw"}} >{hero.title}</h5>
                                                <p className="card-text" style={{fontSize:"1.0416666666666667vw"}}>{hero.desc}</p>
                                                <Button variant="danger">Get Started</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </Col>
                                )
                        })
                    }
                    
                </Row>
            </div>
    
    )
}



                            
