import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import Footer from '../../components/Footer';
import MapSection from '../../components/Map/Map';
import { motion } from 'framer-motion';
import { NavLogo } from '../../components/Navbar/NavbarElements';

import {
    ContactContainer,
    Card,
    CardContainer,
    FormWrap,
    Col1,
    Col2,
    Result,
    ButtonWrapper,
    BackButton
} from './ContactElements';

const Contact = (props) => {
    const [result, showResult] = useState(false);
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_0rwurti', 'template_2nq81od', e.target, 'user_7j0TlZP8Ih7vH3cSMYirS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true);
        setTimeout(showResult(false), 5000);
    };

    const location = {
        address: "I'm here!",
        lat: 12.936038361862003,
        lng: 77.69607765236333,
    } // our location object from earlier

    return (
        <>
            <BackButton
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 50 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}>
                <NavLogo to="/">
                    My Portfolio
                    <i class="fab fa-typo3" style={{ marginLeft: 0.5 + 'em' }} />
                </NavLogo>
            </BackButton>
            <ContactContainer id="contact">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}>
                    <Card>
                        <CardContainer>
                            <p>Contact Me</p>
                            <form action="" onSubmit={sendEmail}>
                                <FormWrap>
                                    <Col1>
                                        <span>Full Name</span>
                                        <br />
                                        <input type="text" name="fullName" required />
                                        <br />
                                        <span>Phone Number (Optional)</span>
                                        <br />
                                        <input type="text" name="phoneNumber" />
                                        <br />
                                        <span>Email</span>
                                        <br />
                                        <input type="text" name="email" required />
                                        <br />
                                    </Col1>
                                    <Col2>
                                        <span>Message</span>
                                        <br />
                                        <textarea name="message" required />
                                        <br />
                                        <ButtonWrapper>
                                            <button>Submit</button>
                                        </ButtonWrapper>
                                        <div>
                                            {result ? <Result>Your message has been sent! Thank you!</Result> : null}
                                        </div>
                                    </Col2>
                                </FormWrap>
                            </form>
                        </CardContainer>
                    </Card>
                </motion.div>
            </ContactContainer>
            <MapSection location={location} zoomLevel={17} />
            <Footer />
        </>
    )
}

export default Contact
