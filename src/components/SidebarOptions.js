import React from 'react'

const renderHTML = (rawHTML) =>
  React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } })

const SidebarOptions = ({ props }) => {
  const {
    slots,
    sidebarOpen,
    setSidebarOpen,
    sidebarOptions,
    handleSetSidebarOptions,
  } = props

  return (
    <>
      <button
        className={sidebarOpen ? 'closeButton' : 'cogWheelButton'}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <>
          {/* HTML codes for - X icon / Gear icon */}
          {sidebarOpen
            ? renderHTML('&#9747; Close')
            : renderHTML('&#9881;  Options')}
        </>
      </button>
      {sidebarOpen && (
        <div className='optionsMenu'>
          <label htmlFor='allow_multiples'>
            <div className='tooltip'>
              Allow Multiples?
              <span className='tooltiptext'>
                Allow the same God to be chosen multiple times (if 2v2 or above)
              </span>
            </div>
          </label>
          <br />
          <label className='switch'>
            <input
              disabled={slots === 1}
              type='checkbox'
              name='allow_multiples'
              checked={sidebarOptions.allow_multiples}
              onChange={(e) => handleSetSidebarOptions(e)}
            />
            <span
              className={
                slots === 1 ? 'slider round notAllowed' : 'slider round'
              }
            ></span>
          </label>
        </div>
      )}
    </>
  )
}

export default SidebarOptions
