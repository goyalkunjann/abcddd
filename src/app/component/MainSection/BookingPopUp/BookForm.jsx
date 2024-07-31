import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slice/slice";

export const BookForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        phoneNo: "",
        location: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const nameRegex = /^[a-zA-Z\-\'\s]+$/;
    const phoneRegex = /^\+91[0-9]{10}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nameRegex.test(formData.name) || formData.name.trim().length === 0) {
            setErrorMessage("Please enter a valid name. Names may include alphabets, hyphens, and apostrophes.");
            return;
        }
        if (!phoneRegex.test(formData.phoneNo)) {
            setErrorMessage("Phone number must start with +91 and followed by 10 digits.");
            return;
        }
        if (!formData.location.trim()) {
            setErrorMessage("Location cannot be empty.");
            return;
        }

        setErrorMessage(""); // Clear previous error message
        setSuccessMessage(""); // Clear previous success message

        // Simulate an asynchronous request using setTimeout
        setTimeout(() => {
            
            alert("Appointment booked successfully!");
            setFormData({ name: "", phoneNo: "", location: "" }); // Reset form fields after successful submission
        }, 1000);
    };

    return (
      <section className="relative lg:w-[450px] w-full h-auto bg-white lg:rounded-[20px] rounded-none flex flex-col shadow-md mt-[40px] lg:mt-0 m-[10px] p-[20px] border-[0.5px] z-10">
            <div className="flex flex-col items-center mt-[8px]">
                <h1 className="text-xl pt-8 font-bold">Book your appointment</h1>
                <p className="text-center text-gray-600 mt-2">Get free consultation</p>

                {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
                {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

                <form className="flex flex-col items-center gap-[10px] mt-[30px]" onSubmit={handleSubmit}>
                    <input
                        style={{ padding: '12px', marginBottom: '10px', borderRadius: '45px', border: '1px solid #ccc', width: '150%', boxSizing: 'border-box' }}
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        style={{ padding: '12px', marginBottom: '10px', borderRadius: '40px', border: '1px solid #ccc', width: '150%', boxSizing: 'border-box' }}
                        type="text"
                        placeholder="Mobile/Email"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                    />
                    <input
                        style={{ padding: '12px', marginBottom: '10px', borderRadius: '45px', border: '1px solid #ccc', width: '150%', boxSizing: 'border-box' }}
                        type="text"
                        placeholder="Location of your Plot"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                    <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '45px', backgroundColor: '#A46254', color: '#ffffff' }}>Book Now</button>
                </form>
            </div>
        </section>
    );
};
