import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const FadeEle = styled.div`
    transition: all ${props => props.show ? '0.75s' : '0s'} ease;
    opacity: ${props => props.show ? 1 : 0};
    transform: translateY(${props => props.show ? 0 : '30px'});
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function FadeScroll(props) {

    const [show, setShow] = useState(true);
    const [showing, setShowing] = useState(false);
    const eleRef = useRef(null);

    const handleScroll = () => {
        const eleMid = (eleRef.current.getBoundingClientRect().bottom - eleRef.current.getBoundingClientRect().top) / 2 + eleRef.current.getBoundingClientRect().top;
        if (eleMid < window.innerHeight && !showing) {
            setShowing(prevShowing => {
                if(!prevShowing) {
                    setTimeout(() => {
                        setShow(true);
                    }, props.delay || 0);
                }
                return true;
            });
        } else if (eleRef.current.getBoundingClientRect().top > window.innerHeight) {
            setShow(false);
            setShowing(false);
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
        <FadeEle ref={eleRef} show={show} className={props.className}>
            {props.children}
        </FadeEle>
    );
}
