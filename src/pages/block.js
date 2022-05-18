import classes from './block.module.css'
import {Services} from "../components/services/services";
import {About} from "../components/about/about";


function Block () {
    const services = ['Alert', 'Adinai', 'Github']
    const about = ['Odi', 'Adi']
    return (
        <div className={classes.container}>
            <h2>Fullstack developer</h2>
                <div className={classes.container_inner}>
                    <div className={classes.block1}>
                    <h3>Frontend-developer</h3>
                        <p>A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design, technology and programming to code a website's appearance, as well as taking care of debugging.</p>
                        <Services services={services}/>
                        <About about={about}/>
                </div>
                <div className={classes.blcok2}>
                    <h3>Backend-developer</h3>
                    <p>A backend developer is one who makes use of the technology required to develop the products for the backend of any website. A backend developer is responsible for building the structure of a software application. Backend developers typically work in groups or with a team.</p>
                    <Services services={services}/>
                    <About about={about}/>
                </div>
            </div>


        </div>
    )
}

export default Block;