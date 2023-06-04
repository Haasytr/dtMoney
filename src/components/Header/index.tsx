import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImage from '../../assets/logo.svg'
import NewTransactionModal from '../NewTransactionModal'
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
