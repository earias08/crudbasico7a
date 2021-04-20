import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const AgregarProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const cambioCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validacion
    if (
      nombreProducto.trim() === "" ||
      precioProducto <= 0 ||
      categoria === ""
    ) {
      // validacion falla, entonces mostrar un cartel de error
      setError(true);
    } else {
      setError(false);
      // si esta bien la validacion entonces agregar el producto en la API

     //crear el objeto que tengo que enviar a la API
    //  const producto = {
    //     nombreProducto: nombreProducto,
    //     precioProducto: precioProducto,
    //     categoria: categoria
    //  }

    const producto = {
        nombreProducto,
        precioProducto,
        categoria
     }

     console.log(producto);
    //  enviar el request o solicitud POST

     try{
        //  codigo normal
        const respuesta = await fetch('http://localhost:3004/cafeteria')
        console.log(respuesta)

     }catch(error){
        console.log(error);
     }

    }

  };

  return (
    <Container>
      <Form className="my-5" onSubmit={handleSubmit}>
        <h1 className="text-center my-5">Agregar nuevo producto</h1>
        <Form.Group>
          <Form.Label>Nombre de producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Té"
            onChange={(e) => setNombreProducto(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
            onChange={(e) => setPrecioProducto(parseInt(e.target.value))}
          ></Form.Control>
        </Form.Group>
        <h3 className="text-center my-4">Categoria</h3>
        <div className="text-center">
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Bebida caliente"
            value="bebidaCaliente"
            onChange={cambioCategoria}
          ></Form.Check>
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Bebida Fria"
            value="bebidaFria"
            onChange={cambioCategoria}
          ></Form.Check>
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Dulce"
            value="dulce"
            onChange={cambioCategoria}
          ></Form.Check>
          <Form.Check
            type="radio"
            name="categoria"
            inline
            label="Salado"
            value="salado"
            onChange={cambioCategoria}
          ></Form.Check>
        </div>
        <Button variant="danger" type="submit" className="w-100 my-5">
          Guardar
        </Button>
        {
            (error === true)?( <Alert variant="warning">Todos los campos son obligatorios</Alert>):(null)
        }
       
      </Form>
    </Container>
  );
};

export default AgregarProducto;
