import {Button, Row} from 'react-bootstrap';
var data = [
{
    id: 1,
    image:  require('../assets/images/products/genericcialis.png')
},
{
    id: 2,
    image:  require('../assets/images/products/genericviagra.png')
},
{
    id: 3,
    image:  require('../assets/images/products/finasteride.png')
},
{
    id: 4,
    image:  require('../assets/images/products/lightningrx.png')
},
{
    id: 5,
    image:  require('../assets/images/products/testosterone.png')
},
{
    id: 6,
    image:  require('../assets/images/products/shredprotocol.png')
},
{
    id: 7,
    image:  require('../assets/images/products/extremerx.png')
}

];
const ascdata = data.sort();
export default function AppHero(){
    return (

        <div className='' style={{ background: "linear-gradient(180deg, rgba(246, 246, 246, 0.15) 0%, rgba(92, 236, 211, 0.25) 100%)" }}>
            <div className='justify-content-center mb-5  text-center' xs='auto'>
               <Row>
               <h1 className='mb-3' style={{fontWeight:"bold"}}>Men’s Health Made Simple.</h1>  
               <label className='mb-3'>Your #1 Portal for Men’s Prescription Medication</label>
               </Row>
               <Button variant="danger" size="lg">FIND MY TREATMENT</Button> 
            </div>
            <div className='text-center' style={{ height:'469px'}}>
                <section  className='content-all'>
                    <div  className='content-carrousel'>
                        {
                            ascdata.map(hero => {
                                const id = hero.id                                
                                return (             
                                        <figure key={id} htmlFor="">
                                            <img 
                                            src={hero.image}
                                            //style={{ width: '25%', height: '50%' }}
                                            alt=""
                                            />
                                        </figure>

                                )
                              })
                        }
                    </div>    
                </section>
            </div>
        </div>
    )
 }