import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const FullPost = () => {
  const posts = useSelector((state) => state.posts);

  const { id } = useParams();

  const post = posts.find((obj) => obj.id === Number(id));

  if (!post) {
    return <Navigate to='/' />;
  }

  return (
    <div className='fullPost'>
      <h2>{post.title}</h2>
      <img className='imgPost' src={post.imageUrl} alt='красота' />
      <p className='descPost'>{post.discription}</p>
      <Link to='/'>
        <Button>Назад</Button>
      </Link>
    </div>
  );
};
