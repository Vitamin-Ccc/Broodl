import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";

export const metadata = {
  title: "Broodl · Dashboard"
};

const DashboardPage = () => {
  const isAuthenticated = true

  // changing const to let because we are changing the variable to Dashboard if Authenticated. Using const will not work
  let children = (
    <Login />
  )

  if(isAuthenticated) {
    children = (
      <Dashboard />
    )
  }


  return (
    <Main>
      {children}
    </Main>
  )
}

export default DashboardPage