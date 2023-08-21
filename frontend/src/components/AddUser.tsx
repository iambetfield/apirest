import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const { nombre, apellido, email } = cliente;

  const onInputChange = (e: any) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/cliente", cliente);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[30%] mt-6">
        <h1 className="mb-4 font-bold">Agregar Cliente</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="text-left">
            <div className="relative mb-6 " data-te-input-wrapper-init>
              <label className="text-xs ">Nombre</label>
              <input
                type="text"
                className="peer block min-h-[40px] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                name="nombre"
                aria-describedby="emailHelp123"
                placeholder="First name"
                value={nombre}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <label className="text-xs">Apellido</label>
              <input
                type="text"
                className="peer block min-h-[40px] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                name="apellido"
                aria-describedby="emailHelp124"
                placeholder="Last name"
                value={apellido}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>

          <div className="relative mb-6 text-left" data-te-input-wrapper-init>
            <label className="text-xs">Email</label>
            <input
              type="email"
              className="peer block min-h-[40px] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <Button className="w-full">CREAR CLIENTE</Button>
        </form>
        <div className="mt-6">
          <Link to="/" className={buttonVariants({ variant: "destructive" })}>
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
