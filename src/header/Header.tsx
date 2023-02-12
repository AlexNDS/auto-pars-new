import React, {useEffect, useState} from 'react';
import style from './Header.module.scss'
import Nav from "../nav/Nav";
import {Sidebar} from "../sidebar/Sidebar";

const Header = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open]) // отключает прокрутку при открытом меню

    return (
        <div className={style.header}>
            <Sidebar open={open} handleClose={handleClose}/>
            <Nav open={open} handleOpen={handleOpen} handleClose={handleClose}/>
        </div>
    );
}

export default Header;