import { useMemo } from 'react'
import { useLocation } from 'react-router-dom';

const useGetActiveRoute = (): { pathname: string } => {
  type routeType = {
    [key: string]: string;
  };

  const routes : routeType = {
    "dashboard": "Dashboard",
    "teachers": "Teacher",
    "teacher": "Teacher",
    "assignment": "Assignment",
    "syllabus": "Syllabus",
    "classes": "Classes",
    "class": "Classes",
    "calendar": "Calendar",
  }
  const location = useLocation();

  const result = useMemo((): string => {
    let pathname = location.pathname
    let pathnameArr = pathname.split("/")

    let path: string = (Array.isArray(pathnameArr) && pathnameArr.length > 1) ? pathnameArr[1] || "dashboard" : "dashboard"
    return routes[path] || "Dashboard"
  }, [location])
  return { pathname: result }
}

export default useGetActiveRoute
