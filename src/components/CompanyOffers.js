import React from 'react'
import styled from 'styled-components'
import CompanyCard from './CompanyCard'

const OffersContainer = styled.section`
  width: calc(90% - 310px);

  h2 {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    margin: 30px auto 12px 12px;
  }
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`

export default function CompanyOffers() {
  return <OffersContainer>
    <div>
      <h2>Empresas que estão contratando (52)</h2>
    </div>
    <CardsContainer>
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </CardsContainer>
  </OffersContainer>
}
