'use client'
import { Button } from '@/components/ui/button'
import { upgradeFirmware } from '@/fetching/upgradeFirmware'
import React, { useState } from 'react'

const FormUpgradeFirmware2: React.FC = () => {
  const [message, setMessage] = useState<string>('');;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const form = new FormData(formElement);
    const res = await upgradeFirmware(form);
    setMessage(JSON.stringify(res));
  }

  return (
    <>
      <form className='flex gap-3 justify-center m-4' onSubmit={handleSubmit}>
        <input className='
        file:bg-primary file:border-none
        file:px-2 file:py-1
        file:rounded-xl
        border-2 p-1 rounded-xl'
          type="file"
          name='file' />
        <Button type='submit'>Upgrade</Button>
      </form>
    </>
  )
}

export default FormUpgradeFirmware2
