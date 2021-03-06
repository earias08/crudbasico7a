import React from 'react';
import {ListGroup, Button, Badge} from 'react-bootstrap';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const ItemProducto = (props) => {

    const eliminarProducto = (id) =>{
        Swal.fire({
            title: '¿Esta seguro de eliminar el producto?',
            text: "No puedes recuperar un producto eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            CancelButtonText: 'Cancelar'
          }).then(async(result) => {
            if (result.isConfirmed) {
                // aqui borrar el producto
                const URL = `${process.env.REACT_APP_API_URL}/${id}`;
               try{
                const respuesta = await fetch(URL,{
                  method: "DELETE",
                  headers:{
                   "Content-Type":"application/json"   
                  }  
                });
                console.log(respuesta);
                if(respuesta.status === 200){
                    // mostrar notificacion al usuario
                    Swal.fire(
                        'Producto eliminado',
                        'El producto seleccionado fue borrado correctamente',
                        'success'
                      )
                    // actualizar los datos de la lista de productos
                    props.consultarAPI();
                } 

               }catch(error){
                console.log(error);
                // mostrar un cartel al usuario final indicando que ocurrio un error que lo intente en unos minutos
               }


             
            }
          })
    }

    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            <p>{props.producto.nombreProducto} <Badge variant="success">${props.producto.precioProducto}</Badge></p>
            <div>
            <Link className='btn btn-warning mr-3 text-light' to={`/productos/editar/${props.producto._id}`}>
              <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
            </Link>
            <Button variant='danger' onClick={()=> eliminarProducto(props.producto._id)}>
              <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </Button>
            </div>
        </ListGroup.Item>
    );
};

export default ItemProducto;