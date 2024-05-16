import React, { useState } from "react";
import AssignSubject from "./SubjectInput/AssignSubject";

type Props = {
  profile: string;
};

interface Body {
  name: string;
  dob: string;
  email: string;
  password: string;
  address: {
      street: string;
      locality: string;
      city: string;
      pinCode: string;
      country: string;
  }
}

const EditPersonalDetails: React.FC<Props> = ({ profile }) => {

  const [name, setName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [locality, setLocality] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [pinCode, setPinCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [subjects, setSubjects] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    const body: Body = {
      name: name,
      dob: dob,
      email: email,
      password: password,
      address: {
        street: street,
        locality: locality,
        city: city,
        pinCode: pinCode,
        country: country,
      }
    }
    const token = localStorage.getItem("token");
  }

  return (
    <div className="max-w-[1056px] mt-6 mx-auto py-6 bg-white" style={{boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.15)"}}>
      <form action="" onSubmit={handleSubmit}>
        <div className="px-6">
          <div className="fieldsGrid">
            <div className="">
              <div className="mb-1">
                <label
                  className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                  htmlFor=""
                >
                  User Name
                </label>
              </div>

              <div className="h-[43px] border border-darkGray rounded">
                <input
                  className="outline-none w-full h-full p-1 rounded text-lightGray bg-gray4 font-normal text-[14px] leading-[21px] pl-4"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="">
              <div className="mb-1">
                <label
                  className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                  htmlFor=""
                >
                  Date Of Birth
                </label>
              </div>

              <div className="h-[43px] border border-darkGray rounded">
                <input
                  className="outline-none w-full h-full p-1 rounded text-lightGray bg-gray4 font-normal text-[14px] leading-[21px] pl-4"
                  type="date"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="">
              <div className="mb-1">
                <label
                  className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                  htmlFor=""
                >
                  Email Address
                </label>
              </div>

              <div className="h-[43px] border border-darkGray rounded">
                <input
                  className="outline-none w-full h-full p-1 rounded text-lightGray bg-gray4 font-normal text-[14px] leading-[21px] pl-4"
                  type="email"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="">
              <div className="mb-1">
                <label
                  className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                  htmlFor=""
                >
                  Password
                </label>
              </div>

              <div className="h-[43px] border border-darkGray rounded">
                <input
                  className="outline-none w-full h-full p-1 rounded text-lightGray bg-gray4 font-normal text-[14px] leading-[21px] pl-4"
                  type="password"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize mt-6 px-6 w-full border-b border-lightGray pb-1">
          Address Field
        </div>

        <div className="mt-4 pb-4 px-6 border-b border-lightGray">
          <div className="fieldsGrid">
            <div className="">
              <div className="mb-1">
                <label
                  className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                  htmlFor=""
                >
                  Street
                </label>
              </div>

              <div className="h-[43px] border border-darkGray rounded">
                <input
                  className="outline-none w-full h-full p-1 rounded text-lightGray bg-gray4 font-normal text-[14px] leading-[21px] pl-4"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="">
              <div className="mb-1">
                <label
                  className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                  htmlFor=""
                >
                  Locality
                </label>
              </div>

              <div className="h-[43px] border border-darkGray rounded">
                <input
                  className="outline-none w-full h-full p-1 rounded text-lightGray bg-gray4 font-normal text-[14px] leading-[21px] pl-4"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="mb-1">
                  <label
                    className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                    htmlFor=""
                  >
                    City
                  </label>
                </div>
                <div className="h-[43px] border border-darkGray rounded">
                  <input
                    className="outline-none w-full h-full p-1 rounded text-lightGray bg-gray4 font-normal text-[14px] leading-[21px] pl-4"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div>
                <div className="mb-1">
                  <label
                    className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                    htmlFor=""
                  >
                    Pincode
                  </label>
                </div>
                <div className="h-[43px] border border-darkGray rounded">
                  <input
                    className="outline-none w-full h-full p-1 rounded text-lightGray bg-gray4 font-normal text-[14px] leading-[21px] pl-4"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>

            <div className="">
              <div className="mb-1">
                <label
                  className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                  htmlFor=""
                >
                  Country
                </label>
              </div>

              <div className="h-[43px] border border-darkGray rounded">
                <input
                  className="outline-none w-full h-full p-1 rounded text-lightGray bg-gray4 font-normal text-[14px] leading-[21px] pl-4"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </div>

        {profile === "teacher" && (
          <div className="fieldsGrid px-6 mb-4">
            <AssignSubject />
          </div>
        )}

        <div className="max-w-[1056px] mx-auto flex items-center justify-end gap-4 pr-4">
          <button className="w-[105px] h-[38px] rounded-lg bg font-sans border border-lightGray text-lightGray font-medium text-[16px]">
            Cancel
          </button>
          <button
            type="submit"
            className="w-[105px] h-[38px] rounded-lg bg-primary text-white font-sans font-medium text-[16px]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPersonalDetails;
