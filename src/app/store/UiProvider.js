'use client'
import React from "react";
import { StoreProvider } from ".";
import Modal from "../component/Utils/CustomModal/Modal";

export default function UiProvider({ children }) {
  return (
    <StoreProvider>
         {children}
             <Modal />
     </StoreProvider>
  );
}
