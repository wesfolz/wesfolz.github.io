import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

const Modal = styled.aside`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    transform: scale(${props => props.show ? 1 : 0});
    transition: transform 0.3s ease;
    padding: 40px;
    top: 0;
    left: 0;
    background-color: black;
`;

const Frame = styled.embed`
    width: calc(100% - 80px);
    height: calc(100% - 80px);
`;

export default function ExternalFrame(props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.visible);
    }, [props.visible]);

    return (
        <Modal>
            <Frame src={props.src} show={show}></Frame>
        </Modal>
    );
}
