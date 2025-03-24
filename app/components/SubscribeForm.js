
"use client";
import Image from "next/image";
import { useState } from "react";

const SubscribeForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
                setEmail("");
            } else {
                setMessage(data.error || data.message);
            }
        } catch (error) {
            setMessage("Something went wrong");
        }
    };
    return (
        <form className="w-2/3 lg:w-1/2 flex flex-col items-center justify-center gap-2 mt-6" onSubmit={handleSubmit}>
            <div className="w-full flex border-[#AB8201] border-2 rounded-3xl h-14 items-center">
                <Image src="/mail.png" width={100} height={100} className="w-[30px] h-[30px] mx-4" alt="mail logo" />
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="border-l-2 h-[30px] border-[#AB8201] w-full  px-2 my-2 focus:outline-none" placeholder="Enter your E-mail"></input>
            </div>
            <button type="submit" className="cursor-pointer bg-linear-to-r from-cyan-black to-[#ab8201] px-2 py-1 rounded-2xl  w-[121px] h-[44px]">Notify me</button>
            {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
        </form>
    );
};

export default SubscribeForm;
