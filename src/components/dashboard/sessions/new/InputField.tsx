function InputField(props: any) {
    const { title, register, name, config } = props;
    return (
        <div
            id="RootRoot"
            className="flex flex-col gap-2 w-full h-16 items-start font-roboto font-bold leading-[24px]"
        >
            <div id="Label" className="leading-[24px] text-base text-[#bababa]">
                {title}
                <span className=" text-[#fda29b]"> *</span>
            </div>
            <div className="flex flex-row justify-center align-center w-full">
                <input
                    {...register(name, { ...config })}
                    className="font-roboto font-normal text-base placeholder-[#535353] leading-[24px] bg-transparent text-[#FFF] border-solid border-[#757575] flex flex-row justify-center w-full h-12 items-start px-3 border"
                    placeholder="Start Typing..."
                />
            </div>
        </div>
    );
}

export default InputField;
