import { UserButton } from "@clerk/clerk-react";
import { Authenticated } from "convex/react";

export function AdminPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Welcome to admin page</h1>
      <Authenticated>
        <UserButton />
      </Authenticated>
    </main>
  )
}