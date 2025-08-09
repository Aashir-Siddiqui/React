import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Data", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Registration Form
        </h2>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            First Name
          </label>
          <input
            {...register("firstname", {
              required: "First name is required",
              minLength: {
                value: 3,
                message: "First name must be at least 3 characters long",
              },
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="John"
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstname.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Last Name
          </label>
          <input
            {...register("lastname", {
              required: "Last name is required",
              minLength: {
                value: 3,
                message: "Last name must be at least 3 characters long",
              },
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Doe"
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastname.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Age</label>
          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "You must be at least 18 years old" },
              max: { value: 99, message: "You must be under 100 years old" },
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="25"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Gender</label>
          <select
            {...register("gender")}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sky-600 text-white font-medium py-2 rounded-lg hover:bg-sky-700 transition duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Form;
