import React, { FormEvent, useEffect, useState } from "react";
import "../../../components/Teachers/styles/DetailsForm.css"
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useSelector } from "react-redux";

import { NavigateFunction, useNavigate } from "react-router-dom";
import { FetchHookProps, useFetch } from "../../../Hooks/useFetch";
import { RootState } from "../../../stores/store";
import CustomSelect from "../../../components/Common/CustomSelect";
import SectionTitle from "../../../components/Common/SectionTitle";

type Props = {
  userType: string;
  redirect: string;
};

const AddTeacher: React.FC<Props> = ({ userType, redirect }) => {

  const [userName, setUserName] = useState<string>("");
  const [role, setRole] = useState<string>(userType);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [branchId, setBranchId] = useState<string | number>(0);
  const [street, setStreet] = useState<string>("");
  const [locality, setLocality] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [dob, setdob] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [qualification, setQualification] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [emergencyContact, setEmergencyContact] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  const { data, loading, error, handlePost } = useFetch();


  const branches = useSelector(
    (state: RootState) => state.globalState.branches
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      name: userName,
      email: email,
      password: password,
      role: role.toUpperCase(),
      branchId: branchId,
      address: {
        street: street,
        locality: locality,
        city: city,
        pinCode: pincode,
        country: country,
      },
      phoneNumber: phoneNumber,
      dateOfBirth: dob,
      gender: gender,
      qualification: qualification,
      experience: experience,
      emergencyContact: emergencyContact,
    };

    let url: string = "";
    switch (userType) {
      case "admin":
        url = `${import.meta.env.VITE_API_URL}/admin/register`;
        break;
      case "principal":
        url = `${import.meta.env.VITE_API_URL}/principal/register`;
        break;
      case "teacher":
        url = `${import.meta.env.VITE_API_URL}/teacher/register`;
        break;
      case "student": url = `${import.meta.env.VITE_API_URL}/student/register`;
        break;
      default:
        break;
    }

    const token = localStorage.getItem("token");

    handlePost({ url, body: payload, token } as FetchHookProps);

  };

  useEffect(() => {
    if (data.code === 200) {
      navigate(redirect);
    }
  }, [data])


  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="max-w-[1056px] mt-6 mx-auto mb-5 p-8 bg-white boxShadow">
        <SectionTitle title={`${userType} Details`} />

        {/* input fields */}
        <div className="fieldsGrid">
          <div>
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
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                type="text"
                name=""
                id=""
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mb-1">
              <label
                className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                htmlFor=""
              >
                Role
              </label>
            </div>
            <div className="h-[43px] border border-darkGray rounded">
              <input
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                type="text"
                name=""
                id=""
                value={role.toUpperCase()}
              // onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mb-1">
              <label
                className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                htmlFor=""
              >
                Email
              </label>
            </div>
            <div className="h-[43px] border border-darkGray rounded">
              <input
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                type="email"
                name=""
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
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
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                type="password"
                name=""
                id=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="mb-1">
              <label
                className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                htmlFor=""
              >
                Branch ID
              </label>
            </div>
            <div className="h-[43px] border border-darkGray rounded">
              <CustomSelect
                data={branches.map((branch) => ({
                  label: branch.branchName,
                  value: branch.id,
                }))}
                cleanable={true}
                // defaultValue={14}
                handleSelect={setBranchId}
              />
            </div>
          </div>
        </div>

        {/* address fields */}
        <div className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize mt-6 w-full border-b border-lightGray pb-1">
          Address Field
        </div>

        <div className="fieldsGrid mt-4 pb-4 border-b border-lightGray">
          <div>
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
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                type="text"
                name=""
                id=""
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
          </div>
          <div>
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
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                type="text"
                name=""
                id=""
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
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
                  className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                  type="text"
                  name=""
                  id=""
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
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
                  className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                  type="text"
                  name=""
                  id=""
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
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
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                type="text"
                name=""
                id=""
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="fieldsGrid mt-6">
          <div>
            <div className="mb-1">
              <label
                className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                htmlFor=""
              >
                Phone
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

          <div>
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
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                type="date"
                name=""
                id=""
                value={dob}
                onChange={(e) => setdob(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="mb-1">
              <label
                className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                htmlFor=""
              >
                Gender
              </label>
            </div>
            <div className="h-[43px] border border-darkGray rounded">
              <select
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                name="gender"
                id=""
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male" defaultValue="male">
                  Male
                </option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div>
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
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                type="text"
                name=""
                id=""
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>
          </div>
          <div>
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
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                type="text"
                name=""
                id=""
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mb-1">
              <label
                className="font-sans font-normal text-[14px] text-darkGray leading-[21px] capitalize"
                htmlFor=""
              >
                Emergency Contact
              </label>
            </div>
            <div className="h-[43px] border border-darkGray rounded">
              <input
                className="outline-none w-full h-full p-1 rounded text-lightGray font-normal text-[14px] leading-[21px]"
                type="text"
                name=""
                id=""
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1056px] mx-auto flex items-center justify-end gap-4 mb-4 pb-4">
        <button className="w-[105px] h-[38px] rounded-lg bg font-sans border border-lightGray text-lightGray font-medium text-[16px]"
          onClick={() => navigate(redirect)}
        >
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
  )
}

export default AddTeacher




