import React from 'react';
import Header from './components/Header';
import BoxContainer from './components/BoxContainer';
import Table from './components/Table';
import OrdersTable from './components/OrderTable';

export default function App() {
  return (
    <div>
      <Header />
      <BoxContainer />
      <Table />
      <OrdersTable />
    </div>
  )
}
