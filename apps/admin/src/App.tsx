
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Protected from "./private/Protected";
import ViewTeachers from "./pages/view/teachers";
import ViewStudents from "./pages/view/students";
import Dashboard from "./pages/dashboard";
import Teachers from "./pages/teachers";
import Classes from "./pages/classes";
import Assignment from "./pages/assignment";
import Syllabus from "./pages/syllabus";
import Course from "./pages/course";
import Calendar from "./pages/calendar";
import TeacherDetailsWithEdit from "./pages/teachers/details";
import AddTeacher from "./pages/teachers/add";
import Grade from "./pages/classes/grade";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={
        <Protected>
          <Outlet />
        </Protected>
      }>
        <Route path="login" element={<Login />} />

        <Route index element={<Dashboard />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="teachers" element={<Teachers />} />

        <Route path="teachers/add" element={<AddTeacher userType={""} redirect={""} />} />

        <Route path="teacher/:id" element={<TeacherDetailsWithEdit />} />

        <Route path="classes" element={<Classes />} />

        <Route path="class/:grade/teachers" element={<Grade activeComponent={0} />} />
        <Route path="class/:grade/students" element={<Grade activeComponent={1} />} />
        <Route path="class/:grade/assignment" element={<Grade activeComponent={2} />} />
        <Route path="class/:grade/class-routine" element={<Grade activeComponent={3} />} />

        <Route path="assignment" element={<Assignment />} />

        <Route path="syllabus" element={<Syllabus />} />

        <Route path="courses" element={<Course />} />

        <Route path="calendar" element={<Calendar />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
