'use client'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toggleModal } from '../store/slice/slice';
import { SCREENS } from '../component/Utils/CustomModal/Modal';
import { Header } from '../component/Header/Header';
import { Footer } from '../component/Footer/Footer';

export const Wrapper = ({children}) => {
    const dispatch = useDispatch();

const openLeadPopup = () => {
  dispatch(toggleModal({
    screen: SCREENS.LEAD_POPUP,
    visible: true
  }))
}

useEffect(() => {
     setTimeout(() => {
      openLeadPopup();
    }, 5000);
}, []);
  return (
    <>
    <Header />
    {children}
  <Footer/>
  </>
  )
}
