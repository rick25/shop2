const { Link } = require("react-router-dom");

const CategoryNavigation = (props) => {
  return (
    <>
      <Link className="btn btn-secondary btn-block" to={props.baseUrl}>
        Todos
      </Link>
      {props.categories &&
        props.categories.map((cat) => (
          <Link
            key={cat}
            className="bt btn-secondary btn-block"
            to={`${props.baseUrl}/${cat.toLowerCase()}`}
          >
            {cat}
          </Link>
        ))}
    </>
  );
};

export default CategoryNavigation;
