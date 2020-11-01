import styled from 'styled-components';
import { neutral, typescale } from '../../styles';

const sizeMap = {
    sm: `width: 150px; height: 40px;  font-size: ${typescale.helperText};`,
    md: `width: 180px; height: 45px;  font-size: ${typescale.paragraph};`,
    lg: `width: 210px; height: 50px; font-size: ${typescale.h5};`,
};

const getVariantStyles = (props) => {
    console.log(props);
    const { variant, disabled, theme } = props;
    // this function will be responsilbe for giving the variant sizes;
    let r = '';
    if (variant === 'primary') {
        if (disabled) {
            r += `
                background-color: ${(props) =>
                    props.theme.primaryColorDisabled} !important;
                color: ${theme.textColor} !important;
                cursor: not-allowed;
            `;
        } else
            r += `
            background-color: ${theme.primaryColor};
            color: ${theme.textColorOnPrimary};
            &:hover {
                background-color: ${theme.primaryColorHover};
                border: 1px solid ${theme.textColorOnPrimary};
            }
            &:focus {
                background-color: ${theme.primaryColorActive};
                border: 1px solid ${theme.textColorOnPrimary};
            }
            &:active {
                background-color: ${theme.primaryColorActive};
                border: 1px solid ${neutral[600]};
            }
        `;
    }
    if (variant === 'secondary') {
        if (disabled) {
            r += `
                background-color: ${neutral[200]} !important;
                color: ${neutral[400]} !important;
                cursor: not-allowed;
                border: solid 1px ${neutral[300]};

            `;
        } else {
            r += `
            background-color: ${neutral[100]};
            color: ${theme.primaryColor};
            border: solid 1px ${theme.primaryColor};
            &:hover {
                background-color: ${theme.primaryColor};
                border: none;
                color: ${theme.textColorOnPrimary};
            }
            

        `;
        }
    }
    return r;
};

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    min-width: 100px;
    border: none;
    &:focus {
        outline: none;
    }
    ${({ size }) => sizeMap[size] || ''}
    ${(props) => getVariantStyles(props)}
    ${({ styles }) => styles}
`;

export default Button;
