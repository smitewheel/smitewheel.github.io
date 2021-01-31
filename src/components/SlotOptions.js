import React from 'react'

import Assassin from '../img/Assassin.png'
import Guardian from '../img/Guardian.png'
import Hunter from '../img/Hunter.png'
import Mage from '../img/Mage.png'
import Warrior from '../img/Warrior.png'
import Cutesy from '../img/Cutesy.png'
import Refresh from '../img/Refresh.png'

const SlotOptions = ({props}) => {
    const {
        filter,
        handleSetFilter
    } = props
    return (
        <div className="options">
            <button onClick={()=>{handleSetFilter('Assassin')}}>
                <img className={filter === 'Assassin' ? 'activeFilter' : 'roundedIcon'} src={Assassin} alt="Assassin" />
            </button>
            <button onClick={()=>{handleSetFilter('Guardian')}}>
                <img className={filter === 'Guardian' ? 'activeFilter' : 'roundedIcon'} src={Guardian} alt="Guardian" />
            </button>
            <button onClick={()=>{handleSetFilter('Hunter')}}>
                <img className={filter === 'Hunter' ? 'activeFilter' : 'roundedIcon'} src={Hunter} alt="Hunter" />
            </button>
            <button onClick={()=>{handleSetFilter('Mage')}}>
                <img className={filter === 'Mage' ? 'activeFilter' : 'roundedIcon'} src={Mage} alt="Mage" />
            </button>
            <button onClick={()=>{handleSetFilter('Warrior')}}>
                <img className={filter === 'Warrior' ? 'activeFilter' : 'roundedIcon'} src={Warrior} alt="Warrior" />
            </button>
            <button onClick={()=>{handleSetFilter('Custom')}}>
                <img className={filter === 'Custom' ? 'activeFilter' : 'roundedIcon'} src={Cutesy} alt="Custom" />
            </button>
            <button onClick={()=>{handleSetFilter('Reset')}}>
                <img className="refreshIcon" src={Refresh} alt="Refresh" />
            </button>
        </div>
    )
}

export default SlotOptions