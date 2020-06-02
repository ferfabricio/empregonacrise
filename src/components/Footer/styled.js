import styled from 'styled-components';

export const Container = styled.footer`
    margin-top: 25px;
    width: 100%;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #322972;
`;

export const Clearfix = styled.div`
    height: ${props => props.margin}px;
`;

export const ImageHeader = styled.img`
     height: 45px;
`;

export const Text = styled.p`
    color: #FFF;
`;


export const TextPagename = styled.span`
    color: #FFF;
    opacity: 0.6;
`;