import styled from 'styled-components';
import { neutral } from '../../styles';

const sizeMap = {
    sm: `width: 400px; height: 220px;`,
    md: `width: 550px; height: 350px;`,
    lg: `width: 800px; height: 400px;`,
};

export default styled.div`
    ${({ size }) => (size ? sizeMap[size] : '')}
    background: ${neutral[100]};
    box-shadow: -2px 3px 5px rgba(0, 0, 0, 0.25);
    position: relative;

    ${({ styles }) => `${styles}`}
`;
