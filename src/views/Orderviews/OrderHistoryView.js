import React from 'react'
import BackArrowMiddleHead from '../../components/individuals/BackArrowMiddleHead'


const OrderHistoryView = () => {
  return (
    <div>
      <br />
      <div className='ilonasmedia2'>
        <BackArrowMiddleHead content="Orderhistory" />
        {/* raden börjar här */}
        <div className='one-order border-bottom'>
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
            <div>
             <b>Summa</b>
            </div>
          </div>
        </div>
        {/* slutar här */}

        <div className='one-order border-bottom'>
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
        </div>

      </div>
    </div>

  )
}

export default OrderHistoryView