'use server'

import { upgradeFirmware } from "@/fetching/upgradeFirmware";

const upgradeFirmwareAction = async (data:FormData) => {
    upgradeFirmware(data);
}

export{
    upgradeFirmwareAction
}