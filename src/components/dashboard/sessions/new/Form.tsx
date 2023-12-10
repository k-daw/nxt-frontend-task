"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import InputField from "./InputField";
import ImageInputField from "./ImageInputField";
import DateInputField from "./DateInputField";
import Header from "./Header";
import TimeInputField from "./TimeInputField";
import DescriptionInputFIeld from "./DescriptionInputFIeld";

function Form() {
    const { register, handleSubmit, setValue, control } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <Header handleSubmit={handleSubmit} />
            <form
                id="newSessionForm"
                className="bg-[#2e2e2e] flex flex-col ml-56 gap-20 w-3/5 items-start pt-10 pb-16 px-10"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col justify-between gap-8 w-full items-start">
                    <InputField
                        title={"Session Title"}
                        name="title"
                        register={register}
                        config={{}}
                    />
                    <InputField
                        title={"Session Subtitle"}
                        name="subtitle"
                        register={register}
                        config={{}}
                    />
                    <ImageInputField
                        name="cover_image"
                        setValue={setValue}
                        register={register}
                        config={{}}
                    />
                    <div className="w-full flex flex-row gap-8">
                        <DateInputField
                            name="date"
                            control={control}
                            setValue={setValue}
                            register={register}
                            config={{}}
                        />
                        <div className="w-[100%] flex flex-row justify-between">
                            <TimeInputField
                                title="From"
                                name="from"
                                control={control}
                                setValue={setValue}
                                register={register}
                                config={{}}
                                required={true}
                            />
                            <TimeInputField
                                title="Till"
                                name="till"
                                control={control}
                                setValue={setValue}
                                register={register}
                                config={{}}
                                required={false}
                            />
                        </div>
                    </div>
                    <DescriptionInputFIeld register={register} config={{}} />
                </div>
                <div className="flex flex-col gap-8 w-full items-start">
                    <div className="flex flex-col gap-2 w-full items-start">
                        <div className="flex flex-row w-16 items-start">
                            <div
                                id="Label5"
                                className="font-sans font-bold leading-[24px] text-[#bababa]"
                            >
                                Speaker
                            </div>
                            <div className="font-sans font-bold leading-[24px] text-[#fda29b]">
                                *
                            </div>
                        </div>
                        <div className="border-solid border-[#757575] flex flex-row justify-between w-full h-12 items-start pt-3 pl-3 pr-5 border">
                            <div className="font-sans leading-[24px] text-[#535353] mt-px">
                                Select
                            </div>
                            <img
                                src="https://file.rendit.io/n/q8qBvQ832O4oNuS2gMjz.svg"
                                alt="Vector4"
                                className="mt-2 w-4"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full items-start">
                        <div className="flex flex-row w-20 items-start">
                            <div
                                id="Label6"
                                className="font-sans font-bold leading-[24px] text-[#bababa]"
                            >
                                Moderator
                            </div>
                            <div className="font-sans font-bold leading-[24px] text-[#fda29b]">
                                *
                            </div>
                        </div>
                        <div className="border-solid border-[#757575] flex flex-row justify-between w-full h-12 items-start pt-3 pl-3 pr-5 border">
                            <div className="font-sans leading-[24px] text-[#535353] mt-px">
                                Select
                            </div>
                            <img
                                src="https://file.rendit.io/n/q8qBvQ832O4oNuS2gMjz.svg"
                                alt="Vector5"
                                className="mt-2 w-4"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full items-start">
                    <div
                        id="Title"
                        className="font-sans font-bold leading-[24px] text-[#bababa]"
                    >
                        Venue{" "}
                    </div>
                    <div className="border-solid border-[#757575] flex flex-row justify-between w-full h-12 items-start pt-3 pl-3 pr-5 border">
                        <div
                            id="PlaceHolder"
                            className="font-sans leading-[24px] text-[#535353] mt-px"
                        >
                            Select{" "}
                        </div>
                        <img
                            src="https://file.rendit.io/n/q8qBvQ832O4oNuS2gMjz.svg"
                            alt="Path"
                            id="Path"
                            className="mt-2 w-4"
                        />
                    </div>
                </div>
            </form>
        </>
    );
}
export default Form;
