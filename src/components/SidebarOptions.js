import React from 'react'

const renderHTML = (rawHTML) => 
    React.createElement(
        "div",
        { dangerouslySetInnerHTML: { __html: rawHTML } }
    )

const SidebarOptions = ({props}) => {
    const {
        sidebarOpen,
        setSidebarOpen,
        sidebarOptions,
        handleSetSidebarOptions
    } = props



    return (
        <div className="sidebarSticky">
            <button className={sidebarOpen ? 'closeButton' : 'cogWheelButton'}
                onClick={()=>setSidebarOpen(!sidebarOpen)}>
                <>
                    {/* HTML codes for - X icon / Gear icon */}
                    {sidebarOpen ? renderHTML('&#9747;'): renderHTML('&#9881;')}
                </>
            </button>
            {sidebarOpen && (
                <div className="optionsMenu">
                    <label htmlFor="allow_multiples">
                        <div className="tooltip">
                            Allow Multiples?
                            <span className="tooltiptext">Allow the same God to be chosen multiple times (if 2v2 or above)</span>
                        </div>
                    </label><br/>
                    <label className="switch">
                        <input
                            type="checkbox"
                            name="allow_multiples"
                            checked={sidebarOptions.allow_multiples}
                            onChange={(e) => handleSetSidebarOptions(e)}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
            )}
        </div>
    )
}

export default SidebarOptions