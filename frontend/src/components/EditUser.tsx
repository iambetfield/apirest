import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'


const EditUser = () => {

    let navigate = useNavigate();
    const {id} = useParams();

    const[cliente, setCliente] = useState({
        nombre:"",
        apellido:"",
        email:""
    });

    const{nombre, apellido, email} = cliente;

    const onInputChange=(e:any)=>{
        setCliente({...cliente,[e.target.name]:e.target.value});
    }

    const onSubmit= async (e:any)=>{
        e.preventDefault();
        await axios.put(`http://3.19.54.43:8080/clientes/${id}`, cliente)
        navigate("/");
    }

    const loadCliente = async()=>{
        const result = await axios.get(`http://3.19.54.43:8080/clientes/${id}`);
        setCliente(result.data);
    }

    useEffect(()=>{
        loadCliente()
    },[]);


  return (
    <div className="flex justify-center items-center">
        
      <div className="w-[30%] mt-6">
        <h1 className="mb-4 font-bold">Editar Cliente</h1>
        <form onSubmit={(e)=>onSubmit(e)}>
          <div className="">
            <div className="relative mb-6 " data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[40px] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                name="nombre"
                aria-describedby="emailHelp123"
                placeholder="First name"
                value={nombre}
                onChange={(e)=>onInputChange(e)}
              />
              <label className="">
                Nombre
              </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[40px] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                name="apellido"
                aria-describedby="emailHelp124"
                placeholder="Last name"
                value={apellido}
                onChange={(e)=>onInputChange(e)}
              />
              <label className="">
                Apellido
              </label>
            </div>
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="email"
              className="peer block min-h-[40px] w-full rounded border-0 bg-gray-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(e)=>onInputChange(e)}
            />
            <label className="font-[30px]">
              Email address
            </label>
          </div>

         <Button className="w-full">EDITAR CLIENTE</Button>
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

export default EditUser;
