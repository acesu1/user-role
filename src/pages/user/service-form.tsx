import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from '../../../convex/_generated/api'
import { useUser } from "@clerk/clerk-react";

export function ServiceForm() {
  const { user } = useUser()
  const createService = useMutation(api.customer.newService)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit() {
    if(!user) return

    await createService({
      title,
      description,
      // id: user.id
    })

    setTitle("");
    setDescription("");

    alert("Serviço cadastrado com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar Serviço</button>
    </form>
  )
}