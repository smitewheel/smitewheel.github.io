import React from 'react'

const Slot = ({props}) => {
    const {
        godsList,
        slotRef,
        winner,
        rolling
    } = props
    return (
        <div className="slot">
            <section>
                <div className="container" ref={slotRef}>
                    {godsList.map((god, i) => 
                        <img
                            key={i}
                            className="godCard"
                            src={god.card.replace("'", "")}
                            alt={god.name}
                        />
                    )}
                </div>
                {!rolling && winner && <div className="winner">{winner.name}</div>}
            </section>
        </div>
    )
}

export default Slot