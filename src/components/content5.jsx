import {Col, Row, Card} from 'react-bootstrap';
var data = [
    {
        id: 1,
        image : require("../assets/images/content3.png"),
        title: "Start your treatment today.",
        list: [ 
                {
                    seq:1, ldesc:"100% Online healthcare platform"
                },
                {
                    seq:2, ldesc:"FDA-approved medication"
                },
                {
                    seq:3, ldesc:"Discreet shippin"
                }, 
                {
                    seq:4, ldesc:"US-licensed physicians" 
                }, 
                {
                    seq:5, ldesc:"US-based pharmacy"
                },
                {
                    seq:6, ldesc:"Ongoing care"
                }
        ]
    },
   ]
export default function Appcont5(){
    return(
        <div style={{width:"97.65625vw", marginTop:"13.020833333333334vw"}} className='justify-content-center mb-5  contrainer-fluid text-center' xs='auto'>
            <div >
                <Row  className='text-center'>
                    <Col >
                        <h1 className='mb-3' style={{fontWeight:"bold"}}>Men’s Health Made Simple</h1>  
                    </Col> 
                </Row>
                <Row>
                    {
                        data.map(hero=>
                        {
                            return(
                                    <Col key={hero.id}>
                                         <Card  >
                                            <Card.Title className='' style={{fontSize:"2.0833333333333335vw"}}>
                                            {hero.title}                           
                                            </Card.Title>
                                            <Card.Body>
                                             <div>
                                                <ul>
                                                {
                                                hero.list.map(listdata=>{return(<li style={{order: listdata.seq}} key={listdata.seq}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM18.045 7.455C17.9379 7.34823 17.8103 7.26416 17.6699 7.20782C17.5295 7.15149 17.3792 7.12404 17.228 7.12712C17.0768 7.1302 16.9277 7.16375 16.7897 7.22575C16.6518 7.28776 16.5277 7.37695 16.425 7.488L11.2155 14.1255L8.076 10.9845C7.86274 10.7858 7.58067 10.6776 7.28922 10.6827C6.99776 10.6879 6.71969 10.8059 6.51357 11.0121C6.30745 11.2182 6.18938 11.4963 6.18424 11.7877C6.1791 12.0792 6.28728 12.3612 6.486 12.5745L10.455 16.545C10.5619 16.6517 10.6892 16.7358 10.8294 16.7923C10.9695 16.8487 11.1196 16.8764 11.2706 16.8736C11.4217 16.8708 11.5706 16.8376 11.7085 16.776C11.8465 16.7144 11.9706 16.6256 12.0735 16.515L18.0615 9.03C18.2656 8.81775 18.3784 8.53391 18.3756 8.23944C18.3728 7.94496 18.2546 7.66332 18.0465 7.455H18.045Z" fill="#003B5B"/>
                                                </svg>{' '}{listdata.ldesc}</li>)})
                                                } 
                                                </ul>
                                              </div>
                                              <img src={require("../assets/images/last.png")} className='prodseticon'/>
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