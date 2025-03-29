import React, { useRef, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { LuDot, LuImagePlus } from 'react-icons/lu';
import { toast } from 'react-toastify';


const Edit = () => {

    const [uploadedImage, setUploadedImage] = useState<string | null>(`/profile.png`);


    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required("Full Name is required"),
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        dob: Yup.string().required("Date of Birth is required"),
        presentAddress: Yup.string().required("Present Address is required"),
        permanentAddress: Yup.string().required("Permanent Address is required"),
        city: Yup.string().required("City is required"),
        country: Yup.string().required("Country is required"),
        postalCode: Yup.string().matches(/^\d{5}$/, "Invalid postal code").required("Postal Code is required"),
    });

    // Initial form values
    const initialValues = {
        fullName: "Charlene Reed",
        username: "Charlene Reed",
        email: "charlenereed@gmail.com",
        password: "********",
        dob: "25 January 1990",
        presentAddress: "San Jose, California, USA",
        permanentAddress: "San Jose, California, USA",
        city: "San Jose",
        country: "USA",
        postalCode: "45962",
    };

    const handleSubmit = (values: typeof initialValues) => {
        console.log("Form Submitted:", values);
        toast.success(`Profile Successfully Updated`)
    };

    const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference to the hidden input

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];


        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result && typeof reader.result === 'string') {
                    setUploadedImage(reader.result); // Set the image as a string
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click(); // Programmatically click the file input
    };

    const handleRemoveImage = () => {
        setUploadedImage(null);
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-3 items-start mt-7 w-full ">
                {/* Profile Image */}
                <div className='lg:w-[20%] w-full'>
                    {uploadedImage ? (
                        <label className="flex flex-col items-center cursor-pointer">
                            <div className='relative'>
                                <img
                                    src={uploadedImage}
                                    alt="Uploaded"
                                    className="object-contain w-[120px] h-[120px] rounded-full"
                                />
                                <button
                                    onClick={handleRemoveImage}
                                    className="absolute bottom-2 right-2 bg-primary-300 text-white rounded-full p-2"
                                >
                                    <FaPencilAlt />
                                </button>
                            </div>
                        </label>


                    ) : (
                        <label className="flex flex-col items-center cursor-pointer">



                            <div className='relative'>
                                <img
                                    src={`/dummyProfile.svg`}
                                    alt="Uploaded"
                                    className="object-contain w-[120px] h-[120px] rounded-lg"
                                />
                                <button
                                    onClick={triggerFileInput}
                                    className="absolute bottom-2 right-2 bg-primary-300 text-white rounded-full p-2"
                                >
                                    <FaPencilAlt />
                                </button>
                            </div>

                            <input
                                ref={fileInputRef} // Attach the ref to the hidden input
                                type="file"
                                accept="image/png, image/jpeg"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </label>
                    )}
                </div>

                <div className='lg:w-[80%] w-full'>
                    {/* Form */}
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ errors, touched }) => (
                            <Form>
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                                    {([
                                        { label: "Your Name", name: "fullName", type: "text" },
                                        { label: "User Name", name: "username", type: "text" },
                                        { label: "Email", name: "email", type: "email" },
                                        { label: "Password", name: "password", type: "password" },
                                        { label: "Date of Birth", name: "dob", type: "text" },
                                        { label: "Present Address", name: "presentAddress", type: "text" },
                                        { label: "Permanent Address", name: "permanentAddress", type: "text" },
                                        { label: "City", name: "city", type: "text" },
                                        { label: "Country", name: "country", type: "text" },
                                        { label: "Postal Code", name: "postalCode", type: "text" },
                                    ] as const).map((field) => (
                                        <div key={field.name}>
                                            <label className="block text-[13px] lg:text-base text-primary-300">{field.label}</label>
                                            <Field
                                                type={field.type}
                                                name={field.name}
                                                className={`w-full border p-2 text-primary-500 rounded-md mt-1 ${errors[field.name as keyof typeof errors] && touched[field.name as keyof typeof touched]
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                                    }`}
                                            />
                                            <ErrorMessage name={field.name} component="div" className="text-red-500 text-xs mt-1" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-end mt-8">
                                    <button type="submit" className="bg-primary-300 cursor-pointer hover:bg-primary-300/90 text-white lg:w-[190px] w-full px-6 py-3 rounded-[15px]">
                                        Save
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

            </div>
        </div>
    )
}

export default Edit