import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { removePost } from '../redux/actions/posts';

export const Home = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);
  const isAuth = useSelector((state) => state.isAuth);

  const formatDate = (date) => {
    const newDate = new Date(date);
    const dateFormatRu = newDate.toLocaleString('ru');
    return dateFormatRu;
  };

  const onClickRemovePost = (id) => {
    if (window.confirm(`Удалить статью №${id}?`)) {
      dispatch(removePost(id));
    }
  };

  return (
    <Row xs={1} md={2} className='g-4'>
      {posts &&
        posts.map((post) => (
          <Col key={post.id}>
            <Card>
              <Link to={`/post/${post.id}`}>
                <Card.Img variant='top' src={post.imageUrl} alt={post.imageUrl} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.discription.substr(0, 70)} ...</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>Опубликовано: {formatDate(post.createdAt)}</small>
                </Card.Footer>
              </Link>
              {isAuth && (
                <div className='adminButtons'>
                  <Link to={`/updatepost/${post.id}`}>
                    <Button variant='warning'>Изменить статью</Button>
                  </Link>
                  <Button onClick={() => onClickRemovePost(post.id)} variant='danger'>
                    Удалить статью
                  </Button>
                </div>
              )}
            </Card>
          </Col>
        ))}
    </Row>
  );
};
