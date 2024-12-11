import { UserButton } from "@clerk/clerk-react";
import { Authenticated, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function AdminPage() {
  
  const getServices = useQuery(api.customer.getCustomer)
  
  console.log(getServices)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Welcome to admin page</h1>
      <Authenticated>
        <UserButton />
      </Authenticated>

      <div>
        {getServices?.map((service) => {
          return (
            <div key={service._id}>
              <p>{service.title}</p>
              <p>{service.description}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}