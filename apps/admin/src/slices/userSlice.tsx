import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isAuthenticated: boolean;
  user: {
    name: string;
    role: string;
  },
  activeSidebarTab: string;
  branches: {
    id: number;
    schoolName: string;
    branchName: string;
    teacherCount: number;
    branchLocation: string;
    branchPrincipalName: string;
    principalEmail: string;
    principalPhoneNumber: string;
    studentCount: number;
  }[];
};

const initialState: UserState = {
  isAuthenticated: true,
  user: {name: "Rahul", role: "ADMIN"},
  branches: [],
  activeSidebarTab: "dashboard",
};

const userSlice = createSlice({
  name: "globalState",
  initialState: initialState, 
  reducers: {
    authenticate: (state, action: PayloadAction<{name: string, role: string}>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    setActiveSidebarTab: (state, action: PayloadAction<string>) => {
      state.activeSidebarTab = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {name: "", role: ""},
      localStorage.removeItem("token");
    },
    setBranches: (
      state,
      action: PayloadAction<
        {
          id: number;
          schoolName: string;
          branchName: string;
          teacherCount: number;
          branchLocation: string;
          branchPrincipalName: string;
          principalEmail: string;
          principalPhoneNumber: string;
          studentCount: number;
        }[]
      >
    ) => {
      state.branches = action.payload;
    },
  },
});

export const { authenticate, logout, setBranches, setActiveSidebarTab } = userSlice.actions;
export default userSlice.reducer;
