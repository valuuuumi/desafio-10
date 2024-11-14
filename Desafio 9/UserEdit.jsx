import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserEdit = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserDetails();
  }, [id]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`URL_DE_TU_API/${id}`);
      const data = await response.json();
      setUser(data);
      setName(data.name);
      setEmail(data.email);
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`URL_DE_TU_API/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      if (response.ok) {
        navigate(`/users/${id}`);
      } else {
        console.error('Error al actualizar usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  };

  return (
    <div>
      <h1>Editar Usuario</h1>
      <label>Nombre: </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Email: </label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <button onClick={handleUpdate}>Actualizar</button>
      <Link to={`/`}><button>Cancelar</button></Link>
    </div>
  );
};

export default UserEdit;
