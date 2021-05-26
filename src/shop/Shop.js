import ProductList from "./ProductList";

const Shop = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-white">
          <div className="navbar-brand">Tienda</div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 p-2">
          <ProductList products={props.products} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
