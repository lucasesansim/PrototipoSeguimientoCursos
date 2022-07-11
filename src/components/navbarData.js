import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa"; // Email, Contacts
import { TbLayoutDashboard } from "react-icons/tb"; // Dashboard
import { TiEqualsOutline } from "react-icons/ti"; //Tasks
import { BsChatLeft, BsEnvelope } from "react-icons/bs"; // Chat
import { HiOutlineViewBoards, HiOutlineDotsHorizontal } from "react-icons/hi"; // Deals, settings


export const navbarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <TbLayoutDashboard  />,
    cName: 'nav-text'
  },
  {
    title: 'Tasks',
    path: '/', // Dummy for prototype reasons
    icon: <TiEqualsOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Email',
    path: '/', // Dummy for prototype reasons
    icon: <BsEnvelope />,
    cName: 'nav-text'
  },
  {
    title: 'Contacts',
    path: '/contacts',
    icon: <FaRegUser />,
    cName: 'nav-text'
  },
  {
    title: 'Chat',
    path: '/', // Dummy for prototype reasons
    icon: <BsChatLeft />,
    cName: 'nav-text'
  },
  {
    title: 'Deals',
    path: '/', // Dummy for prototype reasons
    icon: <HiOutlineViewBoards />,
    cName: 'nav-text'
  },
]