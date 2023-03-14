import React from 'react'

export default function Post() {
    return (
            <main className=" w-full  flex items-center justify-center mt-4">
                <div className="border max-w-screen-md bg-white mt-6 rounded-2xl p-4 w-full">
                    <div className="flex items-center	justify-between">
                        <div className="gap-3.5	flex items-center ">
                            <img src="https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="object-cover bg-yellow-500 rounded-full w-10 h-10" />
                            <div className="flex flex-col">
                                <b className="mb-2 capitalize">sofia müller</b>
                                <time datetime="06-08-21" className="text-gray-400 text-xs">06 August at 09.15 PM
                                </time>
                            </div>
                        </div>
                        <div className="bg-gray-100	rounded-full h-3.5 flex	items-center justify-center">
                        </div>
                    </div>
                    <div className="whitespace-pre-wrap mt-7">Hello guys ?</div>
                    <div className="mt-5 flex gap-2	 justify-center border-b pb-4 flex-wrap	">
                        <img src="https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto" alt="photo" />
                        {/* <img src="https://images.unsplash.com/photo-1614914135224-925593607248?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto" alt="photo" /> */}
                    </div>
                    <div className=" h-16 border-b  flex items-center justify-around	">
                        <div className="flex items-center	gap-3	">
                            <div className="text-sm	">10 Comments</div>
                        </div>
                        <div className="flex items-center	gap-3">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20"
						fill="currentColor">
						<path fill-rule="evenodd"
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							clip-rule="evenodd" />
					</svg> */}
                            <div className="text-sm">5 Likes</div>
                        </div>
                        <div className="flex items-center	gap-3">
                            <div className="text-sm">Share</div>
                        </div>
                        <div className="flex items-center	gap-3">
                            <div className="text-sm">Saved</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="bg-yellow-500 rounded-full w-10 h-10 object-cover border" />
                        <div className="flex items-center	justify-between	 bg-gray-50 h-11 w-11/12 border rounded-2xl	 overflow-hidden px-4 ">
                            <input type="text" className="h-full w-full bg-gray-50 outline-none " placeholder="Write your comment..." name="comment" />
                        </div>
                    </div>
                </div>
            </main>
    )
}
