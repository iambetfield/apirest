package com.iternova.empleados.controller;

import com.iternova.empleados.exception.ResourceNotFoundException;
import com.iternova.empleados.model.Cliente;
import com.iternova.empleados.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/")
public class ClienteController {
    @Autowired
     private ClienteRepository clienteRepository;

    @GetMapping("/clientes")
    public List<Cliente> listarCLientes(){
        return clienteRepository.findAll();
    }
    @PostMapping("/cliente")
    public Cliente guardarCliente(@RequestBody Cliente cliente){
        return clienteRepository.save(cliente);
    }
    @GetMapping("/clientes/{id}")
    public Cliente getCliente(@PathVariable Long id){
        return clienteRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException(id));
    }

    @PutMapping("/clientes/{id}")
    public Cliente updateCliente(@RequestBody Cliente nuevoCliente, @PathVariable Long id){
        return clienteRepository.findById(id)
                .map(cliente ->{
                    cliente.setNombre(nuevoCliente.getNombre());
                    cliente.setApellido(nuevoCliente.getApellido());
                    cliente.setEmail(nuevoCliente.getEmail());
                    return clienteRepository.save(cliente);
                }).orElseThrow(()-> new ResourceNotFoundException(id));
    }

    @DeleteMapping("/clientes/{id}")
    public String deleteCliente(@PathVariable Long id){
        if(!clienteRepository.existsById(id)){
            throw new ResourceNotFoundException(id);
        }
        clienteRepository.deleteById(id);
        return "User with the " + id + " has been deleted";
    }

}
