import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useColorThemeContext } from '../Context'
import { MdArrowBack } from 'react-icons/md'
import { MdInfoOutline } from 'react-icons/md'
import colorThemeIcon from '../img/colorTheme.svg'

export default function Nav() {
    let history = useHistory()
    let location = useLocation()
    const [visibility, setVisibility] = useState(false)
    const { setColorPopup, colorTheme } = useColorThemeContext()

    let width = window.matchMedia('(max-width: 600px)')

    useEffect(() => {
        if (location.pathname !== '/') {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    }, [location.pathname])

    const handleClick = () => {
        history.goBack()
    }

    const alertTip = (x) => {
        if (x.matches) {
            alert('Hei, tämä projekti on tarkoitettu työnhaun tueksi. Selaile sovellusta vapaasti. Voit vaihdella sovelluksen väripalettia oikeasta yläkulmasta ja valita annoskokoja halusi mukaan!')
        }
    }

    return (
        <nav style={{ background: colorTheme.background }} className="flex space-between align-center">
            <div className="relative" style={{ height: '28px' }}>
                <div className={`tooltip ${visibility && "tooltip-hidden"} ${colorTheme.dark && 'darkText'}`} onClick={() => alertTip(width)}><MdInfoOutline />
                    <span className="tooltipText">
                        Hei, tämä projekti on tarkoitettu työnhaun tueksi.
                        Selaile sovellusta vapaasti. Voit vaihdella sovelluksen väripalettia oikeasta yläkulmasta ja valita annoskokoja halusi mukaan!
                        <br />
                        <br />
                        <a href="https://github.com/BenPanyanil/benin-pikakeittokirja" rel="noopener noreferrer" target="_blank">GitHub</a>
                    </span>
                </div>
                <button onClick={() => handleClick()} className={`back-btn flex align-center ${visibility && "back-btn-visible"} ${colorTheme.dark && 'darkText darkBorder'}`}><MdArrowBack /></button>
            </div>
            <button className="colorPopup-btn" onClick={() => setColorPopup(true)}><img src={colorThemeIcon} className="colorThemeIcon" alt="colorThemeIcon"></img></button>
        </nav >
    )
}
