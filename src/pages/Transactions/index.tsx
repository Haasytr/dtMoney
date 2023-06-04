import React from 'react'
import { useContextSelector } from 'use-context-selector'
import Header from '../../components/Header'
import Summary from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { dateFormmater, priceFormmater } from '../../utils/formatter'
import SearchForm from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

// import { Container } from './styles';

const Transactions: React.FC = () => {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {priceFormmater.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormmater.format(new Date())}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

export default Transactions
