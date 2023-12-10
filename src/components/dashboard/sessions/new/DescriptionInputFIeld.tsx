function DescriptionInputFIeld(props: any) {
    const { register, config } = props;
    return (
        <div
            id="RootRoot"
            className="flex flex-col gap-2 w-full h-48 font-roboto font-bold leading-[24px]"
        >
            <div id="Label" className="leading-[24px] text-base text-[#bababa]">
                Description
                <span className=" text-[#fda29b]"> *</span>
            </div>
            <div className="w-full h-48">
                <textarea
                    type="text-area"
                    {...register("description", { ...config })}
                    className="font-roboto font-normal outline outline-none text-base placeholder-[#535353] resize-none leading-[24px] bg-transparent text-[#FFF] border-solid border-[#757575]  w-full h-full  px-3 pt-3 border text-left text-top"
                    placeholder="Type details"
                />
            </div>
        </div>
    );
}

export default DescriptionInputFIeld;
