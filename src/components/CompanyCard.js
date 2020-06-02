import React from 'react'
import styled from 'styled-components'

const CompanyContainer = styled.div`
  width: 280px;
  height: 320px;
  margin: 12px;
  background-color: #f8f7f7;

  :hover {
    box-shadow: 0 30px 30px 0 #f5f5f9;
    background-color: #ffffff;

    .logo img {
      filter: grayscale(0%) opacity(100%);
    }
  }

  .logo {
    height: 133px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo img {
    max-width: 240px;
    max-height: 113px;
    filter: grayscale(100%) opacity(50%);
  }

  .name {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #4239bc;
  }

  .nameLocationContainer {
    height: 100px;
  }

  .location {
    font-size: 11px;
    color: #4a4a4a;
    text-align: center;
  }

  .oportunityLabel {
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    color: #4a4a4a;
  }

  .moreCategories {
    font-size: 11px;
    text-align: center;
    color: #9b9b9b;
  }
`

const LabelContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`

const getColor = (categories, name) => {
  return categories.reduce((prev, curr) => {
    if (curr.name === name) {
      return curr.color
    }

    return prev
  }, '#3a49a7')
}

const Label = styled.li.attrs(props => ({
  categories: props.categories || [],
  name: props.name || ''
}))`
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  border-radius: 16.5px;
  text-transform: uppercase;
  padding: 5px;
  margin: 3px;
  background-color: ${props => getColor(props.categories, props.name)}
`

export default function CompanyCard({ company, categories }) {
  const { opportunities, logoUrl, name, location } = company

  return <CompanyContainer>
    <div className='logo'>
      <img src={process.env.REACT_APP_URL + '/logos/' + logoUrl} height={64} alt={name} />
    </div>
    <div className='nameLocationContainer'>
      <div className='name'>{name}</div>
      <div className='location'>{location}</div>
    </div>
    {opportunities.length > 0 && <>
      <div className='oportunityLabel'>Oportunidades em</div>
      <div>
        <LabelContainer>
          {opportunities.slice(0, 4).map(o => {
            return <Label key={o} categories={categories} name={o}>{o}</Label>
          })}
        </LabelContainer>
      </div>
      {opportunities.length > 4 && <div className='moreCategories'>+{opportunities.length - 4} cargos</div>}
    </>}
  </CompanyContainer>
}
