import "./Item.css";

function Item(props) {
  const itemName = props.name;
  //above className is used for css
  return <p className="nirma">{itemName}</p>;
}

export default Item;
