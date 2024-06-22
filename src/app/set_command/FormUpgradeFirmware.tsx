'use server'
import { Button } from '@/components/ui/button'
import { upgradeFirmware } from '@/fetching/upgradeFirmware'
import { upgradeFirmwareAction } from '@/serverAction/upgradeFirware.action'
import React from 'react'

const FormUpgradeFirmware:React.FC = () => {
  return (
    <form className='flex gap-3 justify-center m-4' action={upgradeFirmwareAction}>
    {/* <form className='flex gap-3 justify-center m-4' action={upgradeFirmware}> */}
    <input className='
        file:bg-primary file:border-none
        file:px-2 file:py-1
        file:rounded-xl
        border-2 p-1 rounded-xl'
      type="file"
      name='file' />
    <Button type='submit'>Upgrade</Button>
  </form>
  )
}

export default FormUpgradeFirmware
