import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import * as Icons from './icons'
export { Icons }

const slowBounce = keyframes`
  0% {
    transform:  translate(0px,0px)  ;
  }
  25% {
    transform:  translate(0px,5px)  ;
  }
  50% {
    transform:  translate(0px,0px)  ;
  }
  75% {
    transform:  translate(0px,-5px)  ;
  }
  100% {
    transform:  translate(0px,0px)  ;
  }
`

const Text = styled.p`
    color: blue;
    animation: ${slowBounce} 4s cubic-bezier(.46,.15,.78,.59) infinite;
`

export const Thing = () => {
    useEffect(() => {
        // code to run on component mount
    }, [])
    return <Text>Lorem ipsum</Text>
}
