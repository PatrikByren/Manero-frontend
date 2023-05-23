import React from 'react'
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead'
import {useState, useEffect} from 'react';
import axios from 'axios';


const OrderHistoryView = () => {
  const[orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get('https://manero.azurewebsites.net/api/Order/userId?id=usingtestidtotestorderhistory')
        .then(response => {
            console.log(response.data);  
            setOrders(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}, []);

  return (
    <div>
      <br />
      <div className='ilonasmedia2'>
        <BackArrowMiddleHead content="Orderhistory" />
        {/* raden börjar här */}
        {orders.map((order) => {
          return  <div className='one-order border-bottom'>
          <div className='flex-container'>
            <div className='oderinfo'>
              #{order.id}
            </div>
            <div className='oderinfo shippinggul'>
              Shipping <i class="fa-regular fa-truck"></i>
            </div>
          </div>

          <div className='flex-container'>
            <div className='oderinfo'>
              {order.orderDate.substring(0, 10)}
            </div>
            <div>
             <b>${order.totalPrice}</b>
            </div>
          </div>
        </div>
        })}
       
        {/* slutar här */}

        {/* <div className='one-order border-bottom'>
          <div className='flex-container'>
            <div>
              #10002
            </div>
            <div className='deliveredgrön'>
              Delivered <i class="fa-solid fa-check"></i>
            </div>
          </div>

          <div className='flex-container'>
            <div>
              Datum och tid
            </div>
            <div>
             <b>Summa</b>
            </div>
          </div>
        </div>

        <div className='one-order border-bottom'>
          <div className='flex-container'>
            <div>
              #10003
            </div>
            <div className='canceledröd'>
              Canceled <i class="fa-regular fa-xmark"></i>
            </div>
          </div>

          <div className='flex-container'>
            <div>
              Datum och tid
            </div>
            <div>
             <b>Summa</b>
            </div>
          </div>
        </div> */}

      </div>
    </div>

  )
}

export default OrderHistoryView