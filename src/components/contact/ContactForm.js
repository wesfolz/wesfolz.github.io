import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as emailjs from 'emailjs-com';

import FillButton from 'components/buttons/FillButton';
import Colors from 'styles/Colors';

const Header = styled.h1`
    color: ${Colors.lightBlue};
    margin-top: 0;
    margin-bottom: 20px;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 600px;
    width: 100%;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    opacity: ${props => props.show ? 1 : 0};
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(50px)'};
    background-color: ${`${Colors.info}10`};
    padding: 40px;
    margin: 0px 40px;
    border-radius: 2px;
    box-sizing: border-box;
`;

const FormInput = styled.input`
    color: white;
    width: 100%;
    box-sizing: border-box;
    background-color: #1ba9d730;
    border-radius: 2px;
    outline: none;
    border: 1px solid ${props => props.invalid ? 'red' : 'transparent'};
    font-size: 14px;
    padding: 12px;
    margin: 8px 0;
    &::placeholder {
        color: white;
        opacity: 0.6;
    }
    &:hover {
        background-color: #1ba9d760;
    }
    &:focus {
        border: 1px solid #1ba9d7;
    }
`;

const FormArea = styled(FormInput)`
    height: 120px;
    resize: none;
`;

const SendContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const FeedbackContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        padding-left: 20px;
        color: ${Colors.info};
        line-height: 32px;
        a {
            color: inherit;
        }
    }
`;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function ContactForm() {

    const [fromName, setFromName] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [message, setMessage] = useState('');

    const [fromNameInvalid, setFromNameInvalid] = useState(false);
    const [fromEmailInvalid, setFromEmailInvalid] = useState(false);
    const [messageInvalid, setMessageInvalid] = useState(false);

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [submitText, setSubmitText] = useState("Send Message");

    useEffect(() => {
        setShow(true);
        return () => {
            setShow(false);
        };
    }, []);

    const validate = () => {
        const name_Invalid = !fromName;
        const email_Invalid = !fromEmail.match(EMAIL_REGEX);
        const message_Invalid = !message;

        setFromNameInvalid(name_Invalid);
        setFromEmailInvalid(email_Invalid);
        setMessageInvalid(message_Invalid);

        return !name_Invalid && !email_Invalid && !message_Invalid;
    };

    const handleSubmit = () => {
        if (success || error) {
            setError(false);
            setSuccess(false);
            setSubmitText("Send Message");
            return;
        }

        if (!validate()) {
            return;
        }

        const SERVICE_ID = 'default_service';
        const TEMPLATE_ID = 'template_5VzY19VX';
        const USER_ID = 'user_dscsF7Lfpco5msNoHFWln';

        const templateParams = {
            toName: 'Wesley Folz',
            fromName,
            fromEmail,
            message
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccess(true);
                setSubmitText("New Message")
            }, (error) => {
                console.log('FAILED...', error);
                setError(true);
                setSubmitText("Try Again");
            });
    };

    return (
        <FormContainer show={show}>
            <Header>Contact</Header>
            {(success || error) ? null :
                <div>
                    <FormInput
                        invalid={fromNameInvalid} type="text" placeholder="Name" value={fromName}
                        onChange={(e) => { setFromNameInvalid(!e.target.value); setFromName(e.target.value) }} />
                    <FormInput
                        invalid={fromEmailInvalid} type="email" placeholder="Email" value={fromEmail}
                        onChange={(e) => { setFromEmailInvalid(!e.target.value.match(EMAIL_REGEX)); setFromEmail(e.target.value) }} />
                    <FormArea
                        invalid={messageInvalid} as="textarea" type="text" placeholder="Message" value={message}
                        onChange={(e) => { setMessageInvalid(!e.target.value); setMessage(e.target.value) }} />
                </div>}
            {error ? <FeedbackContainer>
                <FontAwesomeIcon icon="exclamation-triangle" size="2x" color={Colors.orange}></FontAwesomeIcon>
                <p>
                    Hmmm... Something went wrong.
                    <br />Try again or try emailing me directly:
                    <br /> <a href="mailto:wesleyfolz@gmail.com">wesleyfolz@gmail.com</a>
                </p>
            </FeedbackContainer> : null}
            {success ? <FeedbackContainer>
                <FontAwesomeIcon icon="check-square" size="2x" color={Colors.green}></FontAwesomeIcon>
                <p>
                    Thanks for your message.
                    <br />I will respond as soon as I can.
                </p>
            </FeedbackContainer> : null}
            <SendContainer>
                <FillButton
                    type="button"
                    color={Colors.lightBlue}
                    onClick={handleSubmit}>
                    {submitText}
                </FillButton>
            </SendContainer>
        </FormContainer>
    );
}
