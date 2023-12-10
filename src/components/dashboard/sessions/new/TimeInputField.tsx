import React, { useState, useEffect } from "react";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { Roboto } from "next/font/google";

function TimeInputField(props) {
    const { title, name, register, config, setValue, required } = props;
    const [selectedTime, setSelectedTime] = useState(dayjs("2022-04-17T15:30"));

    useEffect(() => {
        setValue(name, selectedTime, { shouldValidate: true });
    }, [name, selectedTime]);

    const handleTimeChange = (newValue) => {
        setSelectedTime(newValue);
        register(name, { ...config });
    };

    return (
        <div className="flex flex-col gap-2 w-[45%]">
            <div id="Label" className="leading-[24px] text-base text-[#bababa]">
                {title}
                {required && <span className=" text-[#fda29b]"> *</span>}
            </div>
            <div className="border-solid border-[#757575] flex flex-row w-full h-12  border">
                <LocalizationProvider
                    className="w-full"
                    dateAdapter={AdapterDayjs}
                >
                    <TimeField
                        value={selectedTime}
                        onChange={handleTimeChange}
                        sx={{
                            border: "none ! important",

                            "& .MuiInputBase-input": {
                                outline: 0,
                                borderRadius: "0px",
                                padding: "12px 12px",
                                fontSize: "16px",
                                lineHeight: "24px",
                                font: "Roboto",
                                color: "#bababa",
                                border: "none ! important",
                            },
                            "&. MuiOutlinedInput-input": {
                                display: "none",
                                borderRadius: "0px",

                                border: "none ! important",
                            },
                            "&. MuiOutlinedInput-notchedOutline": {
                                borderRadius: "0px",

                                display: "none",
                            },
                        }}
                    />
                </LocalizationProvider>
                <img
                    src="https://file.rendit.io/n/q8qBvQ832O4oNuS2gMjz.svg"
                    alt="Vector"
                    className="w-4 mx-2"
                />
            </div>
        </div>
    );
}

export default TimeInputField;
