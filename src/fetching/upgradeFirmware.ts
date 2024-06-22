'use server'
import {BASE_URL_SERVER} from "@/lib/baseUrl"

const upgradeFirmware = async (form:FormData) => {
    try{
        const res = await fetch(`${BASE_URL_SERVER}/upgradeFirmware`, {
            method:'POST',
            body: form
        })
        const resJson = await res.json()
        return resJson;
    } catch (error) {
        return Error("Error occured when uploading firmware");
    }
}

export{
    upgradeFirmware
}