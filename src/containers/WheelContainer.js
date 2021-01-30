import React, { useEffect, useState } from 'react'
import { addSpinnerKeys, getAllGods } from '../helpers/helpers'
import Spinner from '../components/Spinner'
const WheelContainer = () => {
    const [ godsList, setGodsList ] = useState([])
    const [ shouldReload, setShouldReload ] = useState(true)
    useEffect(() => {
        if (shouldReload) {
            getAllGods()
            .then((response) => {
                setGodsList(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
        setShouldReload(false)
    }, [shouldReload])
    return (
        <>
            <Spinner props={{godsList}} />
        </>
    )
}

export default WheelContainer