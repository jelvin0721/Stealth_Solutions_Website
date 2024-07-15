import {Button, Row} from 'react-bootstrap';
var data = [
{
    id: 1,
    image:  require('../assets/images/categories/erectiledysfunction.png'),
    title: 'Erectile Dysfunction'
},
{
    id: 2,
    image:  require('../assets/images/categories/menshairloss.png'),
    title: 'Men’s Hair Loss'
},
{
    id: 3,
    image:  require('../assets/images/categories/testosterone.png'),
    title: 'Testosterone'
},
{
    id: 4,
    image:  require('../assets/images/categories/weightloss.png'),
    title: 'Weight Loss'
},
{
    id: 5,
    image:  require('../assets/images/categories/custom.png'),
    title: 'Custom'
}

];
export default function Appcat(){
    return (
        <Row>
            <div className='text-center maindiv' style={{ height:'469px', width:'951px'}}>
                <div className='slider'>
                    <div className='slide-track'>
                        {
                            data.map(hero => {
                                return (
                                    <div className='slide' key={hero.id}>
                                    <img 
                                      className='imgslide'
                                      src={hero.image}
                                      alt={"slide " + hero.id}
                                    />
                                    <div className='bottom-left'>
                                    <label>{hero.title}</label><br />
                                     <Button variant="danger">Get Started</Button>
                                    </div>
                                     

                                    </div>
                                );
                              })
                        }
                         {
                            data.map(hero => {
                                return (
                                    <div className='slide' key={hero.id}>
                                    <img 
                                      className='imgslide'
                                      src={hero.image}
                                      alt={"slide " + hero.id}
                                    />
                                       <div className='bottom-left'>
                                    <label>{hero.title}</label><br />
                                     <Button variant="danger">Get Started</Button>
                                    </div>

                                    </div>
                                );
                              })
                        }          
                    </div>    
                </div>
            </div>
        </Row>    
    
    )
}