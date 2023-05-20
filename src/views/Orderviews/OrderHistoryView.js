import React from 'react'
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead'


const OrderHistoryView = () => {
  return (
    <div>
      <br />
      <div className='ilonasmedia2'>
        <BackArrowMiddleHead content="Orderhistory" />
        <div className='history'>

          <div className='flex-container'>
            <div className='oderinfo'>
              #10001
            </div>
            <div className='oderinfo shippinggul'>
              Shipping <i class="fa-regular fa-truck"></i>
            </div>
          </div>

          <div className='flex-container'>
            <div className='oderinfo'>
              Datum och tid
            </div>
            <div className='summa'>
              Summa
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default OrderHistoryView