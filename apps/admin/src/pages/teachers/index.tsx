import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import SectionTitle from "../../components/Common/SectionTitle";
import { FetchHookProps, useFetch } from "../../Hooks/useFetch";
import usePopUpModal, { PopUpModalPropType } from "../../components/PopUpModal/hook/UsePopUpModal";

interface TeacherInterface {
  id: number;
  name: string;
  branchName: string;
  email: string;
  phone: string;
  qualification: string;
  experience: string;
}

type Props = {
  getByBranch?: boolean;
}

const Teachers: React.FC<Props> = ({ getByBranch }) => {
  const { data, loading, error, handleFetch, handlePost, handleDelete } = useFetch();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [listOfTeachers, setListOfTeachers] = useState<TeacherInterface[]>([]);
  const [filteredTeachers, setFilteredTeachers] = useState<TeacherInterface[]>(
    []
  );
  const [deleteId, setDeleteId] = useState<null | number>(0);
  const { id } = useParams();


  const gettAllTeachers: () => void = () => {
    const token: string | null = localStorage.getItem("token");
    if (getByBranch) {
      const url: string = `${import.meta.env.VITE_API_URL}/teacher/getByBranchId/${id}`;
      handleFetch({ url, token })
    } else {
      const url: string = `${import.meta.env.VITE_API_URL}/teacher/getAll`;
      const body: { role: string } = {
        role: "teacher",
      };
      handlePost({ url, body, token } as FetchHookProps);
    }
  };

  useEffect(() => {
    gettAllTeachers();
  }, []);

  useEffect(() => {
    if (data.code === 200 && data.data.length > 0) {
      setListOfTeachers(data.data);
      setFilteredTeachers(data.data);
    }
  }, [data]);

  const handleSearch: (query: string) => void = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredTeachers(listOfTeachers);
    } else {
      const filtered = listOfTeachers.filter(
        (teacher) =>
          teacher.name.toLowerCase().includes(query.toLowerCase()) ||
          teacher.branchName.toLowerCase().includes(query.toLowerCase()) ||
          teacher.email.toLowerCase().includes(query.toLowerCase)
      );
      setFilteredTeachers(filtered);
    }
  };

  // delete teacher
  const deleteTeacher = () => {
    if (deleteId == null) return;
    const url = `${import.meta.env.VITE_API_URL}/teacher/delete/${deleteId}`;
    const token = localStorage.getItem("token");
    handleDelete({ url, method: "DELETE", token } as FetchHookProps);
    setShowDeletePopup(false);
    gettAllTeachers();
  };

  // delete modal popup parameters
  const deleteModalParameters: PopUpModalPropType = {
    title: "Delete Teacher",
    discardButtonLabel: "Cancel",
    primaryButtonLabel: "Delete",
    onDiscard: function (): void {
      setShowDeletePopup(false);
    },
    onSubmit: deleteTeacher,
    children: <div>Are you sure you want to delete the teacher</div>,
  };

  const {
    PopUpModel: DeleteTeacherModal,
    setShowPopUp: setShowDeletePopup,
    showPopUp: showDeletePopup,
  } = usePopUpModal(deleteModalParameters);

  return (
    <>
      <div className="max-w-[1056px] mt-6 mb-5 py-4 px-8 bg-white boxShadow">
        <SectionTitle title="Teachers" />

        <div className="flex items-center justify-end gap-4 mb-8 mt-2">
          {/* search */}
          <div className="w-[480px] h-[52px] flex items-center rounded-[50px] bg-bgGray relative">
            <span className="inline-block ml-3 mr-1 text-center h-[26px]">
              <img
                className="object-contain w-[26px] h-[26px]"
                src="/assets/icons/search.svg"
                alt=""
              />
            </span>
            <input
              className="w-full outline-none ml-2"
              style={{ backgroundColor: "transparent" }}
              type="text"
              placeholder="Search Here..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          {/* filter */}

          {/* <div className="w-[119px] h-[45px] relative border border-primary rounded-lg text-center p-1 px-2 flex items-center justify-center">
            <select
              name=""
              id=""
              className="outline-none font-sans font-medium text-sm w-full h-full text-primary selectFilter"
            >
              <option value="newest" defaultValue={"newest"}>
                Subject
              </option>
              <option value="oldest">Subject</option>
            </select>
          </div> */}

          <div className="w-[167px] h-[45px] rounded-lg bg-primary text-white flex items-center justify-center">
            <Link
              className="w-full text-center h-full leading-[45px] flex items-center justify-center"
              to="/teachers/add"
            >
              <IoAddOutline className="mr-1" size={20} /> New Teacher
            </Link>
          </div>
        </div>

        {/* list of teachers table */}
        <div className="w-full">
          
          {/* <TeachersTable
            loading={loading}
            data={filteredTeachers}
            error={error}
            setShowDeletePopup={setShowDeletePopup}
            setDeleteId={setDeleteId}
          /> */}

        </div>
      </div>
      {showDeletePopup && <DeleteTeacherModal />}
    </>
  );
}

export default Teachers
