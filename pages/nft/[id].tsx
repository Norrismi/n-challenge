import React from 'react'

const NFTDropPage = () => {
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

                    <button className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base">
                        Sign In
                    </button>
                </header>


                <div className="content">
                    Content
                </div>


                <div className="mint">

                </div>
            </div>
        </div>
    )
}

export default NFTDropPage