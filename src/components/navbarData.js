import React from "react";
import { FaRegUser } from "react-icons/fa"; // Email, Contacts
import { TbLayoutDashboard } from "react-icons/tb"; // Dashboard
import { TiEqualsOutline } from "react-icons/ti"; //Tasks
import { BsChatLeft, BsEnvelope } from "react-icons/bs"; // Chat
import { HiOutlineViewBoards } from "react-icons/hi"; // Deals, settings


export const navbarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <TbLayoutDashboard  />,
    className: 'nav-text'
  },
  {
    title: 'Tasks',
    path: '/', // Dummy for prototype reasons
    icon: <TiEqualsOutline />,
    className: 'nav-text'
  },
  {
    title: 'Email',
    path: '/', // Dummy for prototype reasons
    icon: <BsEnvelope />,
    className: 'nav-text'
  },
  {
    title: 'Contacts',
    path: '/contacts',
    icon: <FaRegUser />,
    className: 'nav-text'
  },
  {
    title: 'Chat',
    path: '/', // Dummy for prototype reasons
    icon: <BsChatLeft />,
    className: 'nav-text'
  },
  {
    title: 'Deals',
    path: '/', // Dummy for prototype reasons
    icon: <HiOutlineViewBoards />,
    className: 'nav-text'
  },
]