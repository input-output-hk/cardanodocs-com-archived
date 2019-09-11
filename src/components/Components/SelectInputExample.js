import React, { useState } from 'react'
import Select from '../Inputs/Select'
import styled from 'styled-components'
import Query from './Query'

const SubContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
`

const options = [
  {
    value: 'byron',
    key: 'byron',
    label: 'Byron',
    title: 'Byron'
  },
  {
    value: 'shelley',
    key: 'shelley',
    label: 'Shelley',
    title: 'Shelley'
  },
  {
    value: 'goguen',
    key: 'goguen',
    label: 'Goguen',
    title: 'Goguen'
  },
  {
    value: 'basho',
    key: 'basho',
    label: 'Basho',
    title: 'Basho'
  },
  {
    value: 'voltaire',
    key: 'voltaire',
    label: 'Voltaire',
    title: 'Voltaire'
  }
]

export default () => {
  const [ value, setValue ] = useState(options[0].value)
  const onChange = value => setValue(value)
  return (
    <Query
      render={({ frontmatter }) => (
        <div className='text-align-center'>
          <h2>{frontmatter.content.components.select_input}</h2>
          <SubContainer className='text-align-left'>
            <Select
              options={options}
              value={value}
              onChange={onChange}
              name='example'
              title='example'
            />
          </SubContainer>
        </div>
      )}
    />
  )
}
