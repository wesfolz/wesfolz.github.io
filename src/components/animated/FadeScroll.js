import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const FadeEle = styled.div`
    transition: all 0.75s ease;
    opacity: ${props => props.show ? 1 : 0};
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(30px)'};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function FadeScroll(props) {

    const [show, setShow] = useState(true);
    const eleRef = useRef(null);

    const handleScroll = () => {
        const eleMid = (eleRef.current.getBoundingClientRect().bottom - eleRef.current.getBoundingClientRect().top) / 2 + eleRef.current.getBoundingClientRect().top;
        if (eleMid < window.innerHeight) {
            setShow(true);
        } else if (eleRef.current.getBoundingClientRect().top > window.innerHeight) {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <FadeEle ref={eleRef} show={show}>
            {props.children}
        </FadeEle>
    )
}
