import React from 'react'
import { Container, Image, Row, Col,Div} from 'react-bootstrap/'
import '../Styles/Style.css'
import Astronaut from '../../components/Images/Astronaut.svg'
import Planeta1 from '../Images/planeta1.svg'
import Background1 from '../Images/background1.png'
import Python from '../Images/python.png'
import JS from '../Images/JS.png'
import Java from '../Images/Java.png'
import C from '../Images/C.png'
import Cpp from '../Images/Cpp.png'
import Swift from '../Images/Swift.png'
import Php from '../Images/Php.png'
import Kotlin from '../Images/Kotlin.png'
import Typescript from '../Images/Typescripit.png'
import Itunes from '../Images/apple.svg'
import Google from '../Images/google.png'
import Stars from '../Images/stars.svg'

function Body(){
    return(


<Container fluid>
        <Row>
            <Col className='col-12 col-sm-12 col-md-6'>
                <div className='astronautaDiv'>
                    <Image src={Astronaut} ></Image>
                </div>
            </Col>

            <Col className='col-12 col-sm-12 col-md-6'>
            <div className="oneXtwo">
            
                <h1 class="titulo"> Your Journey Starts Here.</h1>
                <p>Principio 
                    sdiuhasdiuhaisudhaisudhaiusdh
                    aisudhauhsdiauhsdiuahsdhasiudhaisudhasuihdasiudhasd
                    aiushdiauhsdasiuhd
                </p>

                <div className='connect'>
                    <p>teste</p>
                </div>
                <div className="appDiv">
                    <a href='./'> <Image className="Itunes" src={Itunes} fluid ></Image></a>
                    <a href='./' > <Image className="Google" src={Google} fluid ></Image></a>
                </div>
                
            </div>
    
            
            
            
            
            </Col>
        </Row>
            <br></br>
        <Row>
        <Col className="col-12 col-sm-12 col-md-none ">

        </Col>
        <Col className="col-12 col-sm-12 col-md-7 ">
            <div className='languagesDiv'>
                <h2 className="features"> Languages </h2>
                <br></br><br></br><br></br><br></br><br></br>
                <Image className='languagesIcon'src={Python} ></Image>
                <Image className='languagesIcon' src={Java} ></Image>
                <Image  className='languagesIcon' src={C} ></Image>
                <Image  className='languagesIcon' src={JS} ></Image>
                <Image  className='languagesIcon' src={Cpp}></Image>
                <Image  className='languagesIcon' src={Swift} ></Image>
                <Image  className='languagesIcon' src={Php}></Image>
                <Image  className='languagesIcon' src={Kotlin}></Image>
                <Image  className='languagesIcon' src={Typescript}></Image>
            </div>
    
        </Col>
        </Row>
        
        <Row>


        </Row>
        
</Container>
    )
}

export default Body;