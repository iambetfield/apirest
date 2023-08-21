import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import axios from "axios";

const ViewUser = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const loadCliente = async () => {
    const result = await axios.get(`http://localhost:8080/clientes/${id}`);
    setCliente(result.data);
  };

  const { id } = useParams();
  loadCliente();
  useEffect(() => {}, []);

  return (
    <div className="flex justify-center items-center">
        <div className="w-2/5">
        <h1 className="mb-6 font-bold">Datos de Cliente</h1>

<div className="">
  <div className="relative mb-6 " data-te-input-wrapper-init>
  <label className="text-sm">Nombre</label>
    <div className="peer block min-h-[40px] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0">
      {cliente.nombre}
    </div>
    
  </div>

  <div className="relative mb-6" data-te-input-wrapper-init>
  <label className="text-sm">Apellido</label>
    <div className="peer block min-h-[40px] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0">
      {cliente.apellido}
    </div>
    
  </div>
</div>

<div className="relative mb-6" data-te-input-wrapper-init>
<label className="text-sm">Email</label>
  <div className="peer block min-h-[40px] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0">
    {cliente.email}
  </div>
  
</div>

<div className="mt-6">
  <Link to="/" className={buttonVariants({ variant: "default" })}>
    Volver
  </Link>
</div>
</div>
        </div>
      
  );
};

export default ViewUser;
