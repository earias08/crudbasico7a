import React from 'react';
import { Container, Form} from 'react-bootstrap';

const AgregarProducto = () => {
    return (
       <Container>
           <Form className='my-5'>
               <h1 className='text-center my-5'>Agregar nuevo producto</h1>
               <Form.Group>
                   <Form.Label>Nombre de producto*</Form.Label>
                   <Form.Control type='text' placeholder='Té'></Form.Control>
               </Form.Group>
               <Form.Group>
                   <Form.Label>Precio*</Form.Label>
                   <Form.Control type='number' placeholder='0'></Form.Control>
               </Form.Group>
               <h3 className='text-center my-4'>Categoria</h3>
               <div className='text-center'>
                   <Form.Check type='radio' name='categoria' inline label='Bebida caliente'></Form.Check>
                   <Form.Check type='radio' name='categoria' inline label='Bebida Fria'></Form.Check>
                   <Form.Check type='radio' name='categoria' inline label='Dulce'></Form.Check>
                   <Form.Check type='radio' name='categoria' inline label='Salado'></Form.Check>
               </div>
           </Form>
       </Container>
    );
};

export default AgregarProducto;