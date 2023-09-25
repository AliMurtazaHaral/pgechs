
// Argon Dashboard 2 MUI layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import AddDEO from "layouts/User Management/AddDEO";
import AddMember from "layouts/User Management/AddMember";
import AddLedger from "layouts/ledgers/AddLedgers";
import AddMemberDetails from "layouts/Member Management/AddMemberDetails";
import ViewAllMembers from "layouts/Member Management/ViewAllMembers";

const routes = [
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "route",
    name: "Add DEO",
    key: "profile",
    route: "/user-management/addDeo",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <AddDEO />,
  },
  {
    type: "route",
    name: "Add Member",
    key: "profile",
    route: "/user-management/addMember",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <AddMember />,
  },
  { type: "title", title: "Ledger Management", key: "account-pages" },
  {
    type: "route",
    name: "Add Ledgers",
    key: "profile",
    route: "/user-management/addLedger",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <AddLedger />,
  },
  {
    type: "route",
    name: "View Ledgers",
    key: "profile",
    route: "/user-management/addLedger",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <AddLedger />,
  },
  { type: "title", title: "Member Management", key: "account-pages" },
  {
    type: "route",
    name: "Add Member Details",
    key: "profile",
    route: "/user-management/addMemberDetails",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <AddMemberDetails />,
  },
  {
    type: "route",
    name: "View Member Details",
    key: "profile",
    route: "/user-management/viewMemberDetails",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <ViewAllMembers />,
  },
  {
    type: "route",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Profile />,
  },
  {
    type: "route",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <SignIn />,
  },
  {
    type: "route",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
  },
];

export default routes;
