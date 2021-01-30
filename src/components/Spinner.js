import React, { useState } from 'react'

import { Wheel } from 'react-custom-roulette'
// Ugh this library is annoying
// https://github.com/effectussoftware/react-custom-roulette
const Spinner = ({props}) => {
    const [spin, setSpin] = useState(false)
    const {
        godsList
    } = props

    let options = []
    godsList.forEach((v, i) => {
        options.push({option: ''+i})
    })
    return (
        <>
            <Wheel
                mustStartSpinning={spin}
                width="1100"
                height="1100"
                backgroundColors={['#3e3e3e', '#df3428']}
                textColors={['#ffffff']}
                data={options}
                outerBorderColor="black"
                outerBorderWidth={1}
                innerRadius={30}
                innerBorderColor="black"
                innerBorderWidth={0}
                radiusLineColor="black"
                radiusLineWidth={1}
                fontSize={12}
                textDistance={75}
            />
            <input type="button" onClick={() => setSpin(!spin)} value="Spin" />
        </>
    )
}

export default Spinner