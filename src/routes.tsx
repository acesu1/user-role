import { SignIn, useUser } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "./pages/admin/admin";
import { UserPage } from "./pages/user/user";

export function Router() {
  const { user, isSignedIn } = useUser()

  if(!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <SignIn />
      </div>
    )
  }

  const isAdmin  = user?.publicMetadata.role === 'admin'

  return (
    <Routes>
      {isAdmin ? (
        <Route path="/" element={<AdminPage />} />
      ): (
        <Route path="/" element={<UserPage />} />
      )}
    </Routes>
  )
}