import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlaceholderGraph } from "../Common/PlaceholderGraph";
import { useFetch, FetchHookProps } from "../../Hooks/useFetch";

const Branch: React.FC = () => {

  const {id} = useParams();
  const { data, loading, error, handleFetch } = useFetch();

  const getBranchById: () => void = () => {
    const url = `${import.meta.env.VITE_API_URL}/admin/getBranchById/${id}`;
    const token = localStorage.getItem("token");
    handleFetch({ url, method: "GET", token } as FetchHookProps);
  };

  useEffect(() => {
    getBranchById();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data, loading, error]);

  return (
    <>
      <div className="max-w-[1056px] rounded-lg shadow-lg mt-6 mb-5 p-0 pb-4 bg-white">
        {/* banner image */}
        <div className="w-full max-h-[3015px] rounded-t-lg">
          <img
            className="object-cover rounded-t-lg"
            src="/assets/images/branch-banner.png"
            alt="banner"
          />
        </div>
        {/* branch info */}
        {loading && (
          <div className="pt-4">
            <PlaceholderGraph />
          </div>
        )}
        {error && (
          <div className="mt-4 flex items-center justify-center">Error</div>
        )}
        {!loading && !error && data.data.length == 0 && (
          <div className="mt-4 flex items-center justify-center">Empty</div>
        )}
        {!loading && !error && Object.keys(data.data).length > 0 && (
          <>
            <div className="w-full mx-auto pt-5 px-4">
              <div className="flex items-start justify-between">
                <div className="grow">
                  <div>
                    <h2 className="font-sans font-medium text-[24px] text-black leading-9 mb-3">
                      {data.data.schoolName}
                    </h2>
                    <div className="flex flex-row items-center justify-start gap-2">
                      <div className="border border-orange rounded-lg py-1 px-2 text-center font-sans font-normal text-[10px] leading-[15px] text-orange ">
                        {data.data.branchName}
                      </div>
                      <div className="border border-orange rounded-lg py-1 px-2 text-center font-sans font-normal text-[10px] leading-[15px] text-orange ">
                        {data.data.board}
                      </div>
                      
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-10 mt-10 justify-between">
                    <div>
                      <p className="font-sans font-normal text-sm text-lightGray">
                        Principal
                      </p>
                      <p className="font-sans font-medium text-sm text-darkGray">
                        {data.data.branchPrincipalName}
                      </p>
                    </div>

                    <div>
                      <p className="font-sans font-normal text-sm text-lightGray">
                        Contact Number
                      </p>
                      <p className="font-sans font-medium text-sm text-darkGray">
                        {data.data.principalPhoneNumber}
                      </p>
                    </div>

                    <div>
                      <p className="font-sans font-normal text-sm text-lightGray">
                        Location
                      </p>
                      <p className="font-sans font-medium text-sm text-darkGray">
                      {data.data.branchLocation}
                      </p>
                    </div>

                    <div>
                      <p className="font-sans font-normal text-sm text-lightGray">
                        Email Address
                      </p>
                      <p className="font-sans font-medium text-sm text-darkGray">
                        {data.data.principalEmail}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-9">
                  <div className="w-[275px] h-[123px] rounded-lg shadow-lg flex flex-row items-center justify-center gap-6">
                    <div className="w-[77px] h-[77px] rounded-[50%] bg-lightBlue flex items-center justify-center">
                      <img
                        className="object-none object-center"
                        src="/assets/icons/student-purple.svg"
                        alt="student"
                      />
                    </div>
                    <div>
                      <div className="font-sans font-normal text-4xl leading-[54px] text-center text-completeBlue mb-1">
                        {data.data.studentCount}
                      </div>
                      <div className="font-sans font-medium text-base text-lightGray">
                        Students
                      </div>
                    </div>
                  </div>

                  <div className="w-[275px] h-[123px] rounded-lg shadow-lg flex flex-row items-center justify-center gap-6">
                    <div className="w-[77px] h-[77px] rounded-[50%] bg-lightOrange flex items-center justify-center">
                      <img
                        className="object-none object-center"
                        src="/assets/icons/teacher-orange.svg"
                        alt="teacher"
                      />
                    </div>

                    <div>
                      <div className="font-sans font-normal text-4xl leading-[54px] text-center text-orange mb-1">
                        {data.data.teacherCount}
                      </div>
                      <div className="font-sans font-medium text-base text-lightGray">
                        Teachers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* <div className="w-full mx-auto pt-5 px-4">
        <div className="flex items-start justify-between">
          <div className="grow">
            <div>
            <h2 className="font-sans font-medium text-[24px] text-black leading-9 mb-3">
            DAV CENTENREY Sr. School
            </h2>
            <div className="flex flex-row items-center justify-start gap-2">
            <div className="border border-orange rounded-lg py-1 px-2 text-center font-sans font-normal text-[10px] leading-[15px] text-orange ">
            Senior Secondary
            </div>
            <div className="border border-orange rounded-lg py-1 px-2 text-center font-sans font-normal text-[10px] leading-[15px] text-orange ">
            Delhi
            </div>
            <div className="border border-orange rounded-lg py-1 px-2 text-center font-sans font-normal text-[10px] leading-[15px] text-orange ">
            Branch Code - ABC123456
            </div>
            </div>
            </div>
            
            <div className="grid grid-cols-2 gap-y-10 mt-10 justify-between">
            <div>
            <p className="font-sans font-normal text-sm text-lightGray">Principal</p>
            <p className="font-sans font-medium text-sm text-darkGray">Sarah Williams</p>
            </div>
            
            <div>
            <p className="font-sans font-normal text-sm text-lightGray">Contact Number</p>
            <p className="font-sans font-medium text-sm text-darkGray">+91 87654 32109</p>
            </div>

            <div>
            <p className="font-sans font-normal text-sm text-lightGray">Location</p>
            <p className="font-sans font-medium text-sm text-darkGray">Delhi</p>
            </div>
            
            <div>
            <p className="font-sans font-normal text-sm text-lightGray">Email Address</p>
            <p className="font-sans font-medium text-sm text-darkGray">dav_delhi@yahoo.com</p>
            </div>
            </div>
            </div>
            
          <div className="flex flex-col gap-9">
            <div className="w-[275px] h-[123px] rounded-lg shadow-lg flex flex-row items-center justify-center gap-6">
                <div className="w-[77px] h-[77px] rounded-[50%] bg-lightBlue flex items-center justify-center">
                    <img className="object-none object-center" src="/assets/icons/student-purple.svg" alt="student" />
                </div>
                <div>
                    <div className="font-sans font-normal text-4xl leading-[54px] text-completeBlue mb-1">8900</div>
                    <div className="font-sans font-medium text-base text-lightGray">Students</div>
                </div>
            </div>

            <div className="w-[275px] h-[123px] rounded-lg shadow-lg flex flex-row items-center justify-center gap-6">
                <div className="w-[77px] h-[77px] rounded-[50%] bg-lightOrange flex items-center justify-center">
                    <img className="object-none object-center" src="/assets/icons/teacher-orange.svg" alt="teacher" />
                </div>

                <div>
                    <div className="font-sans font-normal text-4xl leading-[54px] text-orange mb-1">1400</div>
                    <div className="font-sans font-medium text-base text-lightGray">Teachers</div>
                </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Branch;
