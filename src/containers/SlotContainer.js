import React, { useEffect, useRef, useState } from 'react'
import { getAllGods } from '../helpers/helpers'
import Slot from '../components/Slot'
import SlotOptions from '../components/SlotOptions'
import SidebarOptions from '../components/SidebarOptions'
import tiggzMode from '../helpers/tiggzMode.json'

// Resizing the React DOM Ref array reference
// https://stackoverflow.com/questions/54940399/how-target-dom-with-react-useref-in-map

// Basic Slot Machine reference
// https://stackoverflow.com/questions/62426257/creating-an-animation-for-a-basic-react-slot-machine

const SlotContainer = () => {
    const [godsList, setGodsList] = useState([])
    const [rolling, setRolling] = useState(false)
    const [slots, setSlots] = useState(1)
    const [shouldReload, setShouldReload] = useState(true)
    const [winners, setWinners] = useState([])
    const [filter, setFilter] = useState(null)
    const [filteredList, setFilteredList] = useState([])
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarOptions, setSidebarOptions] = useState({
        allow_multiples: false
    })

    let slotRefs = useRef([React.createRef()])

    useEffect(() => {
        if (shouldReload) {
            getAllGods()
            .then((response) => {
                let shuffled = response.data
                // Loop through and shuffle the array of gods, so they aren't alphabetical
                for(var i = (shuffled.length - 1 ); i > 0; i--){
                    const j = Math.floor(Math.random() * i)
                    const temp = shuffled[i]
                    shuffled[i] = shuffled[j]
                    shuffled[j] = temp
                }
                setGodsList(shuffled)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    setShouldReload(false)
    }, [shouldReload])

    useEffect(() => {}, [slots, filter])

    const hasOptionsEnabled = () => {
        return Object.values(sidebarOptions).some((b) => b === true)
    }

    const renderSlots = (n) => {
        return [...Array(n)].map((e, i) => 
            <Slot
                key={i}
                props={{
                    godsList: filter ? filteredList: godsList,
                    slotRef: slotRefs.current[i],
                    winner: winners[i],
                    rolling: rolling,
                }}
            />
        )
    }

    const handleSlotsChange = (e, n) => {
        setWinners({})
        slotRefs.current = slotRefs.current.splice(0, n)
        for ( let i = 0; i < n; i++) {
            slotRefs.current[i] = slotRefs.current[i] || React.createRef()
        }
        slotRefs.current = slotRefs.current.map((item) => item || React.createRef())
        setSlots(n)
    }

    const handleSetFilter = (newFilter) => {
        setWinners({})
        if (newFilter === 'Custom') {
            setFilteredList(godsList.filter((god, i) => tiggzMode.includes(god.name)))
            setFilter(newFilter)
        } else if (newFilter === "Reset") {
            setFilteredList(godsList)
            setFilter(null)
        } else {
            setFilteredList(godsList.filter((god, i) => god.role === newFilter))
            setFilter(newFilter)
        }
    }

    const handleSetSidebarOptions = (e) => {
        let { name, checked} = e.target
        setSidebarOptions({
            ...sidebarOptions,
            [name]: checked,
        })
    }

    const roll = () => {
        setRolling(true)
        setSidebarOpen(false)
        setWinners({})
        setTimeout(() => {
            setRolling(false)
        }, 1000)
        let chosen = []
        slotRefs.current.forEach((slot, i) => {
            let selected = triggerSlotRotation(slot.current)
            if (!sidebarOptions.allow_multiples){
                // re-rotate if god already chosen
                while (chosen.some((obj) => obj.name === selected.name)) {
                    selected = triggerSlotRotation(slot.current)
                }
            }
            chosen[i] = selected
        })
        setWinners(chosen)
    }

    const triggerSlotRotation = (ref) => {
        let optionList = filter ? filteredList : godsList
        function setTop(top) {
            ref.style.top = `${top}px`
        }
        let options = ref.children
        let randomOption = Math.floor(
            Math.random() * optionList.length
        )
        let chosenOption = options[randomOption]
        setTop(-chosenOption.offsetTop + 2)
        return optionList[randomOption]
    }

    return (
        <>
            <SidebarOptions props={{
                sidebarOpen,
                setSidebarOpen,
                sidebarOptions,
                handleSetSidebarOptions
            }}/>
            <SlotOptions props={{filter, handleSetFilter}}/>
            <div className="SlotMachine">
                {renderSlots(slots)}
                <span>
                    <h1>Team Size: {slots === 1 ? 'Just me' : `${slots}v${slots}`}</h1>
                    <button id={slots === 1 ? 'activeButton' : ''} className="teamButtons" onClick={(e) => handleSlotsChange(e, 1)}>Just me</button>
                    <button id={slots === 2 ? 'activeButton' : ''} className="teamButtons" onClick={(e) => handleSlotsChange(e, 2)}>2v2</button>
                    <button id={slots === 3 ? 'activeButton' : ''} className="teamButtons" onClick={(e) => handleSlotsChange(e, 3)}>3v3</button>
                    <button id={slots === 4 ? 'activeButton' : ''} className="teamButtons" onClick={(e) => handleSlotsChange(e, 4)}>4v4</button>
                    <button id={slots === 5 ? 'activeButton' : ''} className="teamButtons" onClick={(e) => handleSlotsChange(e, 5)}>5v5</button>
                </span>
                <div className="givemesomespace">
                    {hasOptionsEnabled() && (
                        <p>
                            <i>Extra options enabled:</i>
                            <ul>
                            {Object.entries(sidebarOptions).map((keyName, idx) => {
                                return (
                                    <li>
                                        <i key={idx}>{keyName}</i>
                                    </li>
                                )
                            })}
                            </ul>
                        </p>
                    )}
                    <button
                        className={rolling ? 'rolling' : 'roll'}
                        onClick={!rolling && roll || undefined}
                        disabled={rolling}
                    >
                        {rolling? 'Rolling...' : 'Roll it!'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default SlotContainer