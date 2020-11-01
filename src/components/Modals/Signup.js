import React from 'react';
import styled from 'styled-components';
import StyledModal from './BaseModal';
import Button from '../Buttons/Button';
import SignUpIllustration from '../../assets/sign-up-flow-1.svg';

const Div = styled.div`
    ${({ styles, ...props }) => {
        if (styles instanceof Function) {
            return `${styles ? styles(props) : ''}`;
        }
        return `${styles}`;
    }};
`;

const Img = styled.img``;

const Input = styled.input`
    border: none;
    outline: none;
    &: focus {
        outline: none;
    }
    background: ${({ theme }) => `${theme.formInputBackground}`};

    height: 40px;
    width: 80%;
    ${({ styles, ...props }) => `${styles ? styles(props) : ''}`};
`;

const Signup = (props) => {
    return (
        <StyledModal
            size="md"
            styles="
            padding: 50px;
            display: flex;
            flex-direction: column;
            justify-content: start;
        "
        >
            <Div styles="display: flex; width: 80%; flex-direction: column;">
                <Div
                    styles={({ theme }) => `
                    font-size: ${theme.typescale.h5};
                    color: ${theme.formItemTitleColor};
                    `}
                >
                    Enter your email or username
                </Div>
                <Input type="text" styles={() => `width: 100%;`} />
                <Div styles="margin: 15px 0px; display: flex; justify-content: center;">
                    <Button size="md" variant="secondary">
                        Next
                    </Button>
                </Div>
                <Div styles="position: absolute; bottom: 10px; right: 10px; width: 260px; height: 150px; display: flex; justify-content: flex-end; align-items: flex-end;">
                    <Img
                        src={SignUpIllustration}
                        styles="width: 100%; height: 100%;"
                    />
                </Div>
            </Div>
        </StyledModal>
    );
};

export default Signup;
