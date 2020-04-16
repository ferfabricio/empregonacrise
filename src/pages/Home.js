import React from 'react'
import styled from 'styled-components'
import CompanyOffers from '../components/CompanyOffers'
import Search from '../components/Search'
import SearchFilters from '../components/SearchFilters'

const BannerText = styled.div `
    width: 735px;
    height: 86px;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 0.82px;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
`

const BannerTop = styled.section `
  width: 100%;
  height: 300px;
  background-color: #322972;
  padding-top: 60px;
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export default function Home() {
    return <div>
      <BannerTop>
        <BannerText>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod</BannerText>
        <Search />
      </BannerTop>
      <BodyContainer>
        <SearchFilters />
        <CompanyOffers />
      </BodyContainer>
    </div>
}
