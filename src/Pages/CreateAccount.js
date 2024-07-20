import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export const CreateAccount = () => {

    const [days, setDays] = useState([]);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "October", "September", "November", "December"];
    const [years, setYears] = useState([])

    useEffect(() => {
        const daysArray = [];
        for (let i = 1; i < 32; i++) {
            daysArray.push(i);
        }
        setDays(daysArray);
    }, []);

    useEffect(() => {
        const yearsArray = [];
        for (let i = 1924; i < 2025; i++) {
            yearsArray.push(i);
        }
        setYears(yearsArray);
    }, [])




    return (
        <div className="flex flex-col justify-between px-[32.5rem] pt-[3rem] pb-[15rem] gap-8">
            <div className="text-center">
                <FontAwesomeIcon icon={faTwitter} className="text-[#1D9BF0] w-10 h-10" />
            </div>
            <div className="flex flex-col gap-8 ">
                <p className="text-3xl font-bold">Create an Account</p>
                <form className="flex flex-col gap-6">
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="form-input w-full p-3 border border-solid bg-white border-gray-300 rounded-lg text-sm h-16"
                    />
                    <label htmlFor="Phone"></label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Phone"
                        className="form-input w-full p-3 border border-solid bg-white border-gray-300 rounded-lg text-sm h-16"
                    />
                </form>
                <div className="text-left">
                    <button className="text-[#1D9BF0] font-semibold">Use email</button>
                </div>
                <p className="font-semibold">Date of Birth</p>
                <div className="flex flex-row w-full gap-1">
                    <label htmlFor="months" className="block text-sm font-medium text-gray-700"></label>
                    <select
                        id="months"
                        name="months"
                        placeholder="Month"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md h-16"
                    >
                        <option value="" disabled selected placeholder="Month">Month</option>
                        {months.map((month) => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>


                    <label htmlFor="days" className="block text-sm font-medium text-gray-700"></label>
                    <select
                        id="days"
                        name="days"
                        placeholder="Day"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="" disabled selected>Day</option>
                        {days.map((day) => (
                            <option key={day} value={day}>{day}</option>
                        ))}
                    </select>

                    <label htmlFor="years" className="block text-sm font-medium text-gray-700"></label>
                    <select
                        id="years"
                        name="years"
                        placeholder="Year"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="" disabled selected>Year</option>
                        {years.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>

                </div>
                <button className="w-[30rem] h-16 border rounded-[2rem] text-white font-bold text-lg bg-[#1D9BF0]">
                    Sign up
                </button>
            </div>
        </div>
    )
}