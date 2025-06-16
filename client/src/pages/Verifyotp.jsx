import React, { useState } from "react";

const Verifyotp = () => {
    const otpLength = 6;
    const [otp, setOtp] = useState(new Array(otpLength).fill(""));

    const handleInputChange = (e, index) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            const updatedOtp = [...otp];
            updatedOtp[index] = value;
            setOtp(updatedOtp);

            // Automatically move to the next input if a number is entered
            if (value && index < otpLength - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Entered OTP: ${otp.join("")}`);
    };

    return (
        <div
            style={{ height: "calc(100vh - 80px )" }}
            className="max-w-6xl mx-auto flex items-center justify-center "
        >
            <form
                className="shadow-md rounded-lg h-[300px] w-[500px] px-5"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-bold text-center">
                    India's last minute app
                </h1>

                <div className="py-10 flex items-center justify-center flex-col w-full space-y-3">
                    <h3>Verify otp!</h3>
                    <div className="flex items-center justify-space-x-2">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                id={`otp-input-${index}`}
                                className="border border-[#94A3B8] w-14 p-2 rounded-lg text-center"
                                type="tel"
                                maxLength="1"
                                value={value}
                                onChange={(e) => handleInputChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="bg-[#94A3B8] w-full text-[#F7F7F7] p-3 rounded-lg outline-none"
                    >
                        Verify
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Verifyotp;
