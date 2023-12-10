import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const FileInput = (props) => {
    const { title, register, name, config, setValue } = props;
    const [image, setImage] = useState(null);

    useEffect(() => {
        setValue(name, image, { shouldValidate: true });
    }, [name, image]);

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        register(name, { ...config });
    };

    const onDrop = useCallback((acceptedFiles) => {
        setImage(URL.createObjectURL(acceptedFiles[0]));
        register(name, { ...config });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: props.accept,
    });

    return (
        <div className="flex flex-col gap-2 aspect-w-700 w-full">
            <label
                className="font-roboto font-bold text-base leading-[24px] text-[#bababa]"
                htmlFor={name}
            >
                Thumbnail
            </label>
            {image && (
                <img
                    src={image}
                    alt="Preview"
                    className="object-cover aspect-w-700 w-fullh-[188px] rounded-md"
                />
            )}
            {!image && (
                <div
                    {...getRootProps()}
                    type="file"
                    role="button"
                    aria-label="File Upload"
                    id={name}
                >
                    <input
                        {...props}
                        {...getInputProps()}
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                    <div className="border-dashed border-[#757575] flex flex-col justify-center items-center w-full h-48  gap-2 border">
                        <div className="bg-white/5 flex flex-row justify-center  pt-2 w-10 h-10 items-start rounded-[50px]">
                            <img
                                src="https://file.rendit.io/n/gbnu6UMVabntt8hwat8u.svg"
                                alt="IconDashboardUpload"
                                id="IconDashboardUpload"
                                className="w-6"
                            />
                        </div>
                        <div className="flex flex-col ml-px gap-1 w-1/2 items-start">
                            <div className="flex flex-row ml-6 gap-1 w-4/5 items-start">
                                <span className="text-center text-sm font-sans font-bold leading-[19.6px] text-white">
                                    Click to upload
                                </span>
                                <span className="text-center text-sm font-sans leading-[19.6px] text-[#989898]">
                                    or drag and drop
                                </span>
                            </div>
                            <div className="text-center text-sm font-sans leading-[19.6px] text-[#989898]">
                                SVG, PNG, JPG or GIF (max. 800x400px)
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileInput;
