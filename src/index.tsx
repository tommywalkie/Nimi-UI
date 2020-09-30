import * as React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const Text = styled.p`
    color: blue;
    animation: ${bounce} 1s ease infinite;
`

export const Thing = () => {
    return <Text>Lorem ipsum</Text>
}
