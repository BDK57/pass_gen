'use client'
import React, { useCallback, useState, useEffect, useRef } from 'react'

const Pass_Gen = () => {
    const [numbers, setnumbers] = useState(false)
    const [character, setcharacter] = useState(false)
    const [lenght, setlenght] = useState(null)
    const [pass, setpass] = useState("Hassaddsn")
    const passTextfield = useRef(null)

    const PassGenerator = useCallback(() => {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let pass = ""
        if (numbers) {
            str += "0123456789"
        }
        if (character) {
            str += "!@#$%^&*()"

        }
        console.log(str)
        for (let index = 0; index < lenght; index++) {
            let characterIndex = Math.floor(Math.random() * str.length)
            pass += str.charAt(characterIndex)
        }
        setpass(pass)
    }, [numbers, character, lenght])

    useEffect(() => {

        PassGenerator()

    }, [numbers, character, lenght])

    return (
        <>

            <div className='menu-boxx relative z-[99] h-fit'>
                <img src="poster-wo-bg.png" alt="alt" />
                {/* {console.log(window)} */}
                <div className="flex">
                    <div className="relative w-full">

                        <input ref={passTextfield} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" defaultValue={pass} readOnly />

                    </div>
                    <button className="p-2.5 ml-2 text-sm font-medium text-white bg-[#685FCA] rounded-lg border border-[#685FCA] hover:bg-[#7d74e7] focus:ring-4 focus:outline-none focus:ring-blue-300 " onClick={() => {
                        window.navigator.clipboard.writeText(pass)
                        passTextfield.current.select();
                    }}>COPY</button></div>

                <div className="flex justify-center w-full">
                    <div className="inline-flex items-center">
                        <h4>Number</h4>
                        <label className="relative flex cursor-pointer items-center rounded-full p-3" htmlFor="checkbox-8" data-ripple-dark="true">
                            <input type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10" id="checkbox-8" onChange={(e) => { setnumbers((prev) => !prev) }} value={numbers} />
                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth={1}>
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </label>
                    </div>
                    <div className="inline-flex items-center">
                        <h4>Character</h4>
                        <label className="relative flex cursor-pointer items-center rounded-full p-3" htmlFor="checkbox-8" data-ripple-dark="true">
                            <input type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10" id="checkbox-8" onChange={(e) => { setcharacter((prev) => !prev) }} value={character} />
                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth={1}>
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </label>
                    </div>
                    <div className="inline-flex items-center">
                        <h4>Length</h4>
                        <label className="relative flex cursor-pointer items-center rounded-full p-3" htmlFor="checkbox-8" data-ripple-dark="true">
                            <input type="range" className="before:content['']  relative h-1 w-3/4 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#685FCA] before:opacity-0 before:transition-opacity checked:border-[#685FCA] checked:bg-[#685FCA] checked:before:bg-[#685FCA] hover:before:opacity-10" id="checkbox-8" min={5} max={90} defaultChecked onChange={(e) => {
                                setlenght(e.target.value)
                                // console.log(e.target.value)
                            }} />
                            {/* <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth={1}>
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div> */}
                        </label>
                    </div>
                </div>






            </div>
        </>


    )
}

export default Pass_Gen