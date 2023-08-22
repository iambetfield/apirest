import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { useState, useEffect } from 'react';
import axios from 'axios';
import { buttonVariants } from "@/components/ui/button";
import {Link} from 'react-router-dom'


const Listado = () => {

    const [clientes, setClientes] = useState([]);



  useEffect(()=>{
    loadClients();
  },[]);

  const loadClients = async () => {
    const result = await axios.get("http://3.19.54.43:8080/clientes");
   setClientes(result.data)
  }

  const deleteCliente = async(id:any)=>{
    await axios.delete(`http://3.19.54.43:8080/clientes/${id}`)
    loadClients();
  }
    
  return (
    <div>
        <Table>
  <TableCaption>Listado total de clientes</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>Nombre</TableHead>
      <TableHead>Apellido</TableHead>
      <TableHead>Email</TableHead>
      <TableHead className="text-center">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
        clientes.map((cliente:any)=>(
<TableRow key={cliente.id}>
      <TableCell className="font-medium text-left">{cliente.id}</TableCell>
      <TableCell className="text-left">{cliente.nombre}</TableCell>
      <TableCell className="text-left">{cliente.apellido}</TableCell>
      <TableCell className="text-left">{cliente.email}</TableCell>
      <TableCell>
        <Link to={`/viewUser/${cliente.id}`} className={`${buttonVariants({ variant: "outline" })} mr-4`}>Ver</Link>
        <Link to={`/editUser/${cliente.id}`} className={`${buttonVariants({ variant: "outline" })} mr-4 bg-slate-200`}>Editar</Link>
        <Link to="" className={buttonVariants({ variant: "destructive" })} onClick={()=> deleteCliente(cliente.id)}>Eliminar</Link>
      </TableCell>
    </TableRow>
        ))
    }
    
  </TableBody>
</Table>

    </div>
  )
}

export default Listado