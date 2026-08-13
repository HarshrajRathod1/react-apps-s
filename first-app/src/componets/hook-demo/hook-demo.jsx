import { useEffect, useInsertionEffect, useLayoutEffect } from "react"

export function HookDemo(){
    useLayoutEffect(()=>{
        alert((navigator.cookieEnabled)?`Cookie Accepted :${navigator.cookieEnabled}`: `cookie Accetpted : ${navigation.cookieEnabled}`)
        window.navigator.geolocation.getCurrentPosition((position)=>{
            console.log(`Latitude: ${position.coords.latitude}\n Longitude: ${position.coords.longitude}`)
        })
        console.log('After Layout before paint')
    },[])
    useEffect(()=>{
        console.log('After Rendor before layout')
    },[])
    useInsertionEffect(()=>{
        console.log('After Paint')
        let style=document.createElement('style')
        style.innerHTML=`
            h3{
                color:red;
            }`
        document.querySelector('head').appendChild(style)

    },[])
    return(
        <div>
            <h3>Hello world</h3>
        </div>
    )
}