
import { Dashboard } from './components/Dashboard';
import { Header } from './components/header';
import { GlobalStyle } from './styles/global'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal';
import { TransactionsProvider } from './components/hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransctionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransctionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransctionModal} />

      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransctionModal}
      />

      <GlobalStyle/>
    </TransactionsProvider>
  );
}