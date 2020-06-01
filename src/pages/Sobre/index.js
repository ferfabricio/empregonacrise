import React from 'react';

import {
    Container,
    Clearfix,
    ContentTitle,
    LogoMask,
    Title,
    Content,
    Text,
    UserName,
    TextBold
} from './styles';

import mask from '../../images/mask.svg';

export default function Sobre() {
    return (
        <Container>
            <ContentTitle>
                <LogoMask src={mask} />
                <Title>Sobre o emprego na crise</Title>
            </ContentTitle>
            <Clearfix margin={30} />
            <Content>
                <Text>Vamos ser breve e falar um pouquinho sobre o Emprego na crise?</Text>
                <Clearfix margin={10} />
                <Text>O ano de 2020 começou de uma maneira diferente para todos nós. Em pouco tempo fomos afetados de inúmeras formas e maneiras pela Covid-19.</Text>
                <Clearfix margin={10} />
                <Text>Com isso, Fernando Fabricio sentiu a necessidade de criar um local para dar maior visibilidade a empresas que estão contratando em plena crise, indo na contramão do mercado atual. Um local de possibilidades, que tem o propósito de ajudar pessoas e uni-los com essas empresas.</Text>
                <Clearfix margin={10} />
                <Text>Uma forma de agilizar e estreitar o caminho de contratação, beneficiando ambos os lados em período de crise e em futuro breve</Text>
                <Clearfix margin={30} />
                <Text>Estamos começando mas estamos no caminho. lembrando que não possui nenhum custo =)</Text>
                <Clearfix margin={50} />
                <TextBold>Quem está com nós nessa jornada?</TextBold>
                <Clearfix margin={30} />
                <UserName>Fernando Fabricio - Senior development</UserName>
                <Clearfix margin={5} />
                <Text>Email de contato: <TextBold>fernando.fabricio@gmail.com</TextBold></Text>
                <Clearfix margin={10} />
                <Text>Telefone: <TextBold>+55 44 9177-4544</TextBold></Text>
                <Clearfix margin={30} />
                <Text>Site/Portfolio:</Text>
                <Clearfix margin={10} />
                <TextBold>www.fernandofabricio.com</TextBold>
                <Clearfix margin={50} />
                <UserName>Thiago Martins - UI / UX designer</UserName>
                <Clearfix margin={5} />
                <Text>Email de contato: <TextBold>email@thiagomartins.me</TextBold></Text>
                <Clearfix margin={10} />
                <Text>Telefone: <TextBold>+55 44 99112.9701</TextBold></Text>
                <Clearfix margin={30} />
                <Text>Site/Portfolio:</Text>
                <Clearfix margin={10} />
                <TextBold>www.dribbble.com/thiago_martins</TextBold>
                <Clearfix margin={10} />
                <TextBold>www.behance.net/thiago_martins</TextBold>
                <Clearfix margin={60} />
                <Text>Ficou interessado e quer ajudar?</Text>
                <Clearfix margin={10} />
                <Text>Você será muito bem vindo e fale conosco através do email abaixo.</Text>
                <Clearfix margin={30} />
                <TextBold>contato@empregonacrise.com.br</TextBold>
            </Content>
        </Container>
    )
}
