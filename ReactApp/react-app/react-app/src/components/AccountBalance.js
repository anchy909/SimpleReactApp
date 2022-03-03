import React, { useState } from 'react'

function AccountBalance({ accounts }) {
    const [ savingValue, setSavingValue ] = useState("")

    const updateSavingValue = () => {
        setSavingValue('103$')
    }
  return (
    <div>
        {/* <button id="balance-button">Send 100$</button> */}
        {accounts.balace}
        <div className="savings">103$</div>
        <button id="balance-button" onClick={updateSavingValue}>Send 100$</button>
    </div>
  )
}

export default AccountBalance