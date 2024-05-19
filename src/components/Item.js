import "./Item.css";

function Item(props) {
  const itemName = props.name;
  //above className is used for css
  return (
    <div>
      <p className="nirma">{itemName}</p>
      {props.children}
    </div>
  );
}

export default Item;
