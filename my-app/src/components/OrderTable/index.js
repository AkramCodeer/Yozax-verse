import React from 'react';
import './OrderTable.css'; // Import CSS file for styling

const ordersData = [
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },{
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },{
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },

  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },

  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },{
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },

  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  {
    id: 1077620,
    productSummer: 17713,
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    date: '22 Jan 2020',
    country: 'Australia',
    shipping: 'Australian Post',
  },
  
];

const OrdersTable = () => {
  const handleEdit = (id) => {
    // Function to handle edit row
    console.log('Edit row with ID:', id);
    // Redirect to the edit page
    window.location.href = '/edit'; // Replace '/edit' with the actual edit page route
  };

  return (
    <div className="order-box-container">
      <table className="orders-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Product Summary</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Date</th>
            <th>Country</th>
            <th>Shipping</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order) => (
            <tr key={order.id}>
              <td><input type="checkbox" className="select-checkbox" /></td>
              <td>{order.id}</td>
              <td>{order.productSummer}</td>
              <td>{order.status}</td>
              <td>{order.customer}</td>
              <td>{order.email}</td>
              <td>{order.date}</td>
              <td>{order.country}</td>
              <td>{order.shipping}</td>
              <td><i className="edit-icon" onClick={() => handleEdit(order.id)}><img src="https://imgs.search.brave.com/D49zLcnR8c1347V4arP1VDgnTWF5DfpLH4wki3eRsLU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaGVyb2ljb25z/LXVpLzI0L2ljb24t/ZWRpdC0xMjgucG5n" alt="Edit Page" className="edit-image" style={{ maxWidth: '25px' }} /></i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
