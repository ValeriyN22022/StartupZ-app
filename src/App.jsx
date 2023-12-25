import './App.scss'
import Plate from "./components/Plate/Plate.jsx";
import Banner from "./components/Banner/Banner.jsx";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const plates = [{
    title: 'Tolq',
    modified: 'tolq',
    description: 'Tolq is the translation solution built for e-commerce.\n' +
        'It provides all pieces of the localization puzzle in one single integrated solution.',
    img: '../public/images/tolq_img.png'
}, {
    title: 'Feedback Labs',
    modified: 'feedback',
    description: 'Feedback Labs turns feedback into actionable insights for your team.',
    img: '../public/images/feedback_img.png'
}, {
    title: 'Codekeeper',
    modified: 'codekeeper',
    description: 'Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.',
    img: '../public/images/codekeeper_img.png'
}, {
    title: 'LegalSite',
    modified: 'legal',
    description: 'Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.',
    img: '../public/images/legal_img.png'
}]

function App() {


    return (
        <>
            <header className='main_menu'>
                <img src='../public/logo.svg' className="logo"/>
                <div className='main_menu_flex'>
                    <div className='menu_startups'>Startups</div>
                    <div className='menu_contact'>Contact</div>
                    <div className='menu_button'>Work with us!</div>
                </div>
            </header>
            <Banner/>
            <div className="we_create">
                <p className='we_create__title'>We Create Startups.</p>
                <p className='we_create__description'>We are startup studio that develops and launches new
                    companies.</p>
                <div className="we_create__button">See our works</div>
            </div>

            <div className="who_we_are">
                <p className="who_we_are__title"> Who we are</p>
                <p className="who_we_are__description">We create products that have innovation and technology at their
                    core.
                    We value working with talented people that understand the possibilities of today.</p>
                <div className="who_we_are__container">
                    <div className="who_we_are__reason">
                        <div className="who_we_are__reason__number">01</div>
                        <p className="who_we_are__reason__description">We develop innovative
                            products, systems and
                            services</p>
                    </div>
                    <div className="who_we_are__reason">
                        <div className="who_we_are__reason__number">02</div>
                        <p className="who_we_are__reason__description">Next we build teams to scale them into
                            companies</p>
                    </div>
                    <div className="who_we_are__reason">
                        <div className="who_we_are__reason__number">03</div>
                        <p className="who_we_are__reason__description">Each startup solving one problem
                            at a time</p>
                    </div>
                </div>
            </div>
            <div className="solving_container">
                <div className="solving_container__about">
                    <img className="solving_container__about__like" src="../public/like.png" alt="like"/>
                    <p className="solving_container__about__description">We love solving problems!</p>
                    <img className="solving_container__about__revert_like" src="../public/like.png" alt="like"/>
                </div>

            </div>
            <div className="who_we_are-modified">
                <p className="who_we_are-modified__title"> Our core values</p>
                <div className="who_we_are-modified__container">
                    <div className="who_we_are-modified__reason">
                        <div className="who_we_are-modified__reason__number">01. Innovation</div>
                        <p className="who_we_are-modified__reason__description">Startupz operates where entrepreneurship
                            and technology intersect. We design solutions and turn them into businesses models.</p>
                    </div>
                    <div className="who_we_are-modified__reason">
                        <div className="who_we_are-modified__reason__number">02. People</div>
                        <p className="who_we_are-modified__reason__description">Talent is what enable us to create great
                            companies.</p>
                    </div>
                </div>
            </div>
            <div className="our_works">
                <p className="our_works__title">Our works</p>
                <div className="our_works__plates">
                    {plates.map((data,i) => {
                        return (
                            <Plate key={i*Math.random()}
                                description={data.description}
                                title={data.title}
                                image={data.img}
                                modified={data.modified}
                            />
                        )
                    })
                    }
                </div>
            </div>
            <div className="about_startups_container">
                <img className="about_startups_container__about__like" src="../public/like.png" alt="like"/>
                <p className="about_startups_container__about__description">Startups create a world that actually is
                    better.
                    Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.</p>
                <img className="about_startups_container__about__revert_like" src="../public/like.png" alt="like"/>
            </div>
            <div className="hiring_container">
                <p className="hiring_container__title">We are hiring!</p>
                <p className="hiring_container__description">We're always looking for talented people to join and help
                    build our startups.
                    Check out our current openings</p>
                <div className="hiring_container__button">See current openings</div>
            </div>
            <div className="send_message_container">
                <p className="send_message_container__title">Are you ready
                    to board this rocket ship?</p>
                <p className="send_message_container__description">Share your excitement with us.</p>
                <form action="" className="send_message_container__form">
                    <input placeholder='Name*' type="text" className="send_message_container__form__name"/>
                    <input placeholder='Email*' type="email" className="send_message_container__form__email"/>
                    <textarea placeholder='Message*' className="send_message_container__form__message"/>
                    <div className="send_message_container__form__button">Shoot us a message</div>
                </form>
            </div>
            <footer className='footer'>
                <div className="footer__logo">
                    <img src="../public/logo.svg" alt="logo" className="footer__logo__logo"/>
                    <div className="p footer__logo__copyright">© 2020 Startupz. All rights reserved.</div>
                </div>
                <div className="footer__companies">
                    <h3 className="footer__companies__title">Companies</h3>
                    <p className="footer__companies__company">LegalSite</p>
                    <p className="footer__companies__company">Codekeeper</p>
                    <p className="footer__companies__company">Feedback Labs</p>
                    <p className="footer__companies__company">Tolq</p>
                </div>
                <div className="footer__contact">
                    <h3 className="footer__contact__title">Contact</h3>
                    <p className="footer__contact__description">World Trade Center - The Hague
                        Prinses Margrietplantsoen 33
                        2595 AM The Hague
                        The Netherlands</p>
                    <a className='footer__contact__send-message' href='#'>Send us an email</a>
                </div>
                <div className="footer__follow">
                    <h3 className="footer__follow__follow-us">Follow us</h3>
                    <ul>
                        <li><FontAwesomeIcon className="footer__follow__messenger" icon="fa-brands fa-twitter" /></li>
                        <li><FontAwesomeIcon className="footer__follow__messenger" icon="fa-brands fa-linkedin" /></li>
                        <li><FontAwesomeIcon className="footer__follow__messenger" icon="fa-brands fa-instagram" /></li>
                    </ul>



                </div>
            </footer>
        </>
    )
}

export default App
