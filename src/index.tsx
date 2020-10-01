/*
 * Copyright 2020 Tom Bazarnik et al.
 * Licensed under the GNU General Public License v3
 * See LICENSE for details.
 */

import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

export {
    IrisLibre as IrisLibreIcon,
    IrisLibre as FFNFIcon,
    IronBlood as IronBloodIcon,
    IronBlood as KMSIcon,
    Bilibili as BilibiliIcon,
    Collab as CollabIcon,
    Collab as UtawarerumonoIcon,
    Collab as KizunaAIIcon,
    Collab as HololiveIcon,
    DragonEmpire as DragonEmpireIcon,
    DragonEmpire as ROCIcon,
    EagleUnion as EagleUnionIcon,
    EagleUnion as USSIcon,
    Neptunia as NeptuniaIcon,
    Neptunia as HDNIcon,
    NorthernParliament as NorthernParliamentIcon,
    NorthernParliament as SNIcon,
    RoyalNavy as RoyalNavyIcon,
    RoyalNavy as HMSIcon,
    SakuraEmpire as SakuraEmpireIcon,
    SakuraEmpire as IJNIcon,
    SardegnaEmpire as SardegnaEmpireIcon,
    SardegnaEmpire as RNIcon,
    Universal as UniversalIcon,
    VichyaDominion as VichyaDominionIcon,
    VichyaDominion as MNFIcon
} from './icons'

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
