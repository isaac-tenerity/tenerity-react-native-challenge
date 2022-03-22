import { useState, useCallback } from "react";
import {ErrorObj, ReqOptions } from '../types';


const ENDPOINT_EMULATOR = 'http://10.0.2.2:3000/'; // for simulator/ emulator android
const ENDPOINT_DEVICE = 'http://localhost/:3000/';

export const useAPICall = () => 
{
    const [isLoading, setLoading] = useState<Boolean>(false);
    const [errorBox, setError] = useState<ErrorObj>({error:false, errorMessage:""});

    const apiRequest = useCallback(async (reqOptions: ReqOptions, handleRes: Function) => 
    {
        setLoading(true);
        try {
            const res = await fetch(`${ENDPOINT_EMULATOR}${reqOptions.url}`, {
                method: (reqOptions.method || "GET"),
                headers:{'Content-type': 'application/json'},
                body:(reqOptions.body)? JSON.stringify(reqOptions.body): null    
            })

            if(!res.ok) {
                console.log(res, "error");
                throw new Error("Failed Network Request!")};

            const data = await res.json();

            handleRes(data);
        } catch (e) {
            setError({error:true, errorMessage: e.message})
        }
        
        setLoading(false);
    }, []);

    return{
        isLoading,
        errorBox,
        apiRequest
    }
}