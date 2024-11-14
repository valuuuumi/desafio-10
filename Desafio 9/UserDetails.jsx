import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`URL_DE_TU_API/${id}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  };

  return (
    <div>
      <h1>Detalles de Usuario</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <Link to={`/delete/${user.id}`}><button>Eliminar Usuario</button></Link>
      <Link to={`/edit/${user.id}`}><button>Editar Usuario</button></Link>
      <Link to={`/`}><button>Volver</button></Link>
    </div>
  );
};

export default UserDetails;
