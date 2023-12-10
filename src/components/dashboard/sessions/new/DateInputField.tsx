import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInputField(props) {
    const { control, register, setValue } = props;
    const [selectedDate, setSelectedDate] = useState(Date.now);

    useEffect(() => {
        setValue("date", selectedDate);
    }, [selectedDate]);

    function handleOnChange(value) {
        setSelectedDate(value);
        register("date", { required: true });
    }
    return (
        <div
            id="RootRoot"
            className="flex flex-col gap-2 w-full h-16  font-roboto font-bold leading-[24px]"
        >
            <div id="Label" className="leading-[24px] text-base text-[#bababa]">
                Date
                <span className=" text-[#fda29b]"> *</span>
            </div>
            <div className="flex flex-row justify-between border-solid border-[#757575] w-full h-12  border">
                <Controller
                    control={control}
                    name="date" // Name of your date field in the form
                    render={() => (
                        <DatePicker
                            selected={selectedDate}
                            onChange={(selectedDate) =>
                                handleOnChange(selectedDate)
                            }
                            className="bg-transparent outline outline-transparent border-none w-full h-12 border rounded-md font-roboto font-normal text-base placeholder-[#535353] leading-[24px] px-3"
                            dateFormat="MMM .dd .yyyy"
                            calendarClassName="bg-white border border-[#757575] rounded-md shadow-sm" // Style calendar container
                        />
                    )}
                />
                <img
                    src="https://file.rendit.io/n/q8qBvQ832O4oNuS2gMjz.svg"
                    alt="Vector"
                    className="w-4 mr-4"
                />
            </div>
        </div>
    );
}

export default DateInputField;
