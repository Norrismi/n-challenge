import React, { useState } from 'react'
import { ConnectWallet, useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";

const NFTDropPage = () => {


    // Auth
    const connectWithMM = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();

    const [connectedAddress, setConnectedAddress] = useState(false)

    console.log(address)


    return (
        <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>

            <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500 h-screen flex-col">

                <div className="flex flex-col py-2 lg:min-h-screen justify-center items-center mx-auto ">
                    <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl ">

                        <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72 ' src="https://links.papareact.com/8sg" alt="" />
                    </div>


                    <div className="text-white text-center p-5 space-y-2">
                        <h1 className='text-4xl flex justify-center font-bold'>
                            PapaFam Apes
                        </h1>
                        <h2 className='tex-xl text-gray-300'>
                            A collection of PapaFam Apes who live and breath in the Jungle
                        </h2>
                    </div>

                </div>
            </div>

            <div className="flex flex-1 flex-col p-12  lg:col-span-6">
                <header className=" flex items-center justify-between ">
                    <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
                        The <span className='font-extrabold underline decoration-pink-600/50'>Papa Fam</span> NFT Market Place
                    </h1>

                    <button onClick={() => (address ? disconnect() : connectWithMM()) } className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base">
                        { address ? 'Sign Out' : 'Sign In'}
                    </button> 
                </header>

                <hr className='my-2 border' />
                    <div className="mx-auto text-red-500/70">{address ? `Your logged in with wallet ${address.slice(0,5)}....${address.slice(-5)}` : null}</div>


                <div className="flex flex-col flex-1 items-center mt-10 space-y-6 text-center lg:justify-center lg:space-y-0 lg:justify-center">
                    <img className='w-80 object-cover pb-10 lg:h-40' src="https://links.papareact.com/bdy" alt="pr2" />
                    <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold ">The PapaFam Ape coding Club</h1>
                    <p className="pt-2 text-xl text-green-500 ">13/21 NFT's Claimed</p>
                </div>

                <button className="bg-red-600 h-16 w-full p-2 text-white rounded-full mt-10 font-bold">Mint NFT</button>


                <div className="mint">

                </div>
            </div>
        </div>
    )
}

export default NFTDropPage