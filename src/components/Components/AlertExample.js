import React, { useState } from 'react'
import Button from '../Button'
import Alert from '../Alert'
import styled from 'styled-components'
import Query from './Query'

const SubContainer = styled.div`
  width: 100%;
`

export default () => {
  const [ alertVisible, setAlertVisible ] = useState(false)
  const onShowAlert = e => {
    e.preventDefault()
    setAlertVisible(true)
  }

  const onDismiss = e => {
    e.preventDefault()
    setAlertVisible(false)
  }

  return (
    <Query
      render={({ frontmatter }) => (
        <div className='text-align-center'>
          <h2>{frontmatter.content.components.alert}</h2>
          <SubContainer>
            <Button onClick={onShowAlert}>{frontmatter.content.open_alert}</Button>
            <Alert
              isVisible={alertVisible}
              title={frontmatter.content.alert_dialog.title}
              onDismiss={onDismiss}
              name='example'
              buttons={[
                {
                  key: 'yes',
                  type: 'primary',
                  label: frontmatter.content.alert_dialog.buttons.yes,
                  onClick: onDismiss
                },
                {
                  key: 'no',
                  type: 'secondary',
                  label: frontmatter.content.alert_dialog.buttons.no,
                  onClick: onDismiss
                }
              ]}
            >
              <p>{frontmatter.content.alert_dialog.alert_body}</p>
            </Alert>
          </SubContainer>
        </div>
      )}
    />
  )
}
