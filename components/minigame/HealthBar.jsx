'use client'
import { useState, useEffect } from 'react'
import * as Progress from '@radix-ui/react-progress'
import Image from 'next/image';

const HealthBar = ({ entity, enemy, heal }) => {
  const [progress, setProgress] = useState(healthPercentage(entity.health, entity.max_health));
  const [health, setHealth] = useState(entity.health);
  const [maxHealth, setMaxHealth] = useState(entity.max_health);
  const [damage, setDamage] = useState(enemy.damage);


  const handleHit = () => {
    setHealth(Math.max(Math.floor(health - damage), 0))
  }

  const handleHeal = () => {
    setHealth(Math.min(Math.floor(health + heal), maxHealth))
  }


  function healthPercentage(health, maxHealth) {
    return (health / maxHealth) * 100
  }

  useEffect(() => {
    setProgress(healthPercentage(health, maxHealth))
  }, [health]);



  return (
    <div className='bg-slate-500 py-2 block'>
      <div className='  w-80'>
        <Progress.Root
          className='overflow-hidden bg-black rounded-lg h-1'
          value={progress}     >
          <Progress.Indicator className='bg-red-600 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]'
            style={{ transform: `translateX(-${100 - progress}%)` }} />
        </Progress.Root>
        <p className='list-none text-sm'>{health}</p>
      </div>
      <div className='flex space-x-2'>

        <button onClick={handleHit} className='PGButton'>Hit</button>
        <button onClick={handleHeal} className='PGButton'>Heal</button>
      </div>
    </div>
  )
}

export default HealthBar



