// SingleTodo grazinti li kurio title gauna is props
import css from './SingleTodo.module.css';

function SingleTodo(props) {
  return (
    <li style={{ textDecoration: props.isDone ? 'line-through' : 'none' }}>
      <span>{props.title}</span>
      <button onClick={() => props.onCheck(props.id)} className={css.btn}>
        check
      </button>
      <button className={css.btn}>Delete me</button>
    </li>
  );
}

export default SingleTodo;
