
export default function TodoList({ todos }) {
  return (
    <div>
      <h1>User Listing</h1>
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}>
            <label for={`todo-${todo.id}`}>
              <input type = "checbox" checked={todos.checked} {todos.title}></input>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
// this is not finished
export async function getStaticProps() {
  const { users } = await queryGraphql(`
    query {
      todos {
        id
        title
        checked
      }
    }
  `);
  return { props: { users } };
}
