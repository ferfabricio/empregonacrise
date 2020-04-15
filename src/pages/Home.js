import React from 'react'
import styled from 'styled-components'
import Search from '../components/Search'

const BannerTop = styled.div`
  width: 100%;
  height: 200px;
  background-color: #322972;
  padding-top: 60px;
`

const BannerText = styled.div`
    width: 735px;
    height: 86px;
    font-size: 36px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.82px;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
`

export default function Home() {
    return <div>
      <BannerTop>
        <BannerText>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod</BannerText>
        <Search />
      </BannerTop>
    </div>
}
