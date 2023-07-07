import "./AccessForbidden.css";

export default function AccessForbidden(props) {
  return (
    <div className="access-forbidden content">
      <h1>{props.message || "[Unauthorized]: Log in to see your data."}</h1>
    </div>
  );
}
