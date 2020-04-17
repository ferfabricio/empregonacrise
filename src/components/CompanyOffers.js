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
    color: #4a4a4a;
  }
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`

export default function CompanyOffers({ offers, categories }) {
  return <OffersContainer>
    <div>
      <h2>Empresas que estão contratando ({offers.total})</h2>
    </div>
    <CardsContainer>
      {offers.companies.length === 0 && <div>Nenhuma empresa cadastrada.</div>}
      {offers.companies.length > 0 && offers.companies.map(company => {
        return <CompanyCard key={company.name} company={company} categories={categories} />
      })}
    </CardsContainer>
  </OffersContainer>
}
