import { useState } from "react";

const MessagePanel = () => {

    const[message, setMessage] = useState("");

    return (

        <>
            <div>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full border rounded-xl p-4 min-h-[120px] outline-none focus:ring-2 focus:ring-cyan-500"
                />

                <div className="flex justify-end mt-4">
                    <button
                        className="bg-amber-500 
                        hover:bg-amber-600 hover:text-white
                        px-4 py-2 
                        rounded-lg transition cursor-pointer"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </>
    );
}

export default MessagePanel;