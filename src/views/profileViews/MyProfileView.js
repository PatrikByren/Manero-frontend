import React from 'react'
import Field from '../../components/individuals/Field'
import Header from '../../components/sections/Header'
import { directive } from '@babel/types'
import ProfileIntro from '../../components/individuals/ProfileIntro'

const MyProfileView = () => {
  return (
    <div className='myprofile'>
      <Header />
      <ProfileIntro />
      <Field icon={<i class="fa-light fa-calendar"></i>} text="Order history" submitbutton={<i class="fa-solid fa-chevron-right"></i>} />
      <Field icon={<i class="fa-light fa-calendar"></i>} text="Order history" submitbutton={<i class="fa-solid fa-chevron-right"></i>} />
      <Field icon={<i class="fa-light fa-calendar"></i>} text="Order history" submitbutton={<i class="fa-solid fa-chevron-right"></i>} />
      <Field icon={<i class="fa-light fa-calendar"></i>} text="Order history" submitbutton={<i class="fa-solid fa-chevron-right"></i>} />
      <Field icon={<i class="fa-light fa-calendar"></i>} text="Order history" submitbutton={<i class="fa-solid fa-chevron-right"></i>} />
    </div>
  )
}

export default MyProfileView