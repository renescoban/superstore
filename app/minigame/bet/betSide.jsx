import React from 'react'

export default function BetSide( prop ) {
    const {side} = prop

  return (
    <div>
    <div className='flex flex-col'>
        <span>percentage</span>
        <span>total value {side.totalValue} </span>
        <span>total C {side.totalCommit} </span>
        <span>max bet {side.maxBet}</span>
    </div>
    
    </div>
  )
}
