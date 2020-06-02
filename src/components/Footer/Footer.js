import React from 'react'

import { Container, Clearfix, ImageFooter, Text, TextPagename } from './styled';

import heart from '../../images/heart.svg';

export default function Footer({ pageName }) {
    return (
        <Container>
            <ImageFooter src={heart} />
            <Clearfix margin={10} />
            <Text>É simples mas estamos fazendo de coração.</Text>
            <Clearfix margin={5} />
            <Text>Nunca foi tão importante ajudar o outro.</Text>
            <Clearfix margin={15} />
            {pageName && <TextPagename>{pageName}</TextPagename>}
        </Container>
    )
}
