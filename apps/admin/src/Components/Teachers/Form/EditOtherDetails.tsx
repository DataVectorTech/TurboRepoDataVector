import React, { useState } from "react";
// import "./styles/DetailsForm.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const EditOtherDetails: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [emergencyPhone, setEmergencyPhone] = useState<string>("");

  return (
    <div className="max-w-[1056px] mt-6 mx-auto py-6 bg-white" style={{boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.15)"}}>
      <form action="">
        <div className="px-6">
          <div className="fieldsGrid">
            <div className="">
              <div className="mb-1">
                <label
                  className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                  htmlFor=""
                >
                  Phone Number
                </label>
              </div>

              <div className="h-[43px] border border-darkGray rounded phoneInputDiv">
                <PhoneInput
                  defaultCountry="in"
                  value={phoneNumber}
                  onChange={(value) => setPhoneNumber(value)}
                />
              </div>
            </div>

            <div className="">
              <div className="mb-1">
                <label
                  className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                  htmlFor=""
                >
                  Phone Number
                </label>
              </div>

              <div className="h-[43px] border border-darkGray rounded phoneInputDiv">
                <PhoneInput
                  defaultCountry="in"
                  value={emergencyPhone}
                  onChange={(value) => setEmergencyPhone(value)}
                />
              </div>
            </div>

            <div className="">
              <div className="mb-1">
                <label
                  className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                  htmlFor=""
                >
                  Experience
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
                  Qualification
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

        <div className="max-w-[1056px] mx-auto flex items-center justify-end gap-4 mt-4 pr-4">
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

export default EditOtherDetails;