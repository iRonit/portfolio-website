import React, { useState } from 'react'
import { Button } from '../Button'
import emailjs from 'emailjs-com';
import {
    ContactContainer,
    Card,
    CardContainer,
    FormWrap,
    Col1,
    Col2,
    Result,
    ButtonWrapper
} from './ContactElements'

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

    return (
        <>
            <ContactContainer id="contact">
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
            </ContactContainer>
        </>
    )
}

export default Contact
