import styled from 'styled-components';

export const Container = styled.div`
     width: 100%;
`;

export const Clearfix = styled.div`
   height: ${props => props.margin}px;
`;

export const ContentTitle = styled.div`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LogoMask = styled.img`
    height: 65px;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 500;
    color: #322972;
`;

export const Content = styled.div`
    max-width: 720px;
    margin: 0 auto;
    padding: 20px;
`;

export const Text = styled.p`
    color: #333;
`;

export const UserName = styled.p`
    font-size: 25px;
    font-weight: 500;
    color: #322972;
    margin-bottom: 10px;
`;

export const TextBold = styled.span`
    color: #333;
    font-weight: 500;
`;