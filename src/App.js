import "./App.css";
import "./components/Item";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";

function App() {
  const response = [
    {
      itemName: "Nirma",
      ItemDate: "20",
      itemMonth: "June",
      itemYear: "1992",
    },
    {
      itemName: "surfexcel",
      ItemDate: "212",
      itemMonth: "july",
      itemYear: "1980",
    },
    {
      itemName: "tide",
      ItemDate: "90",
      itemMonth: "dec",
      itemYear: "2122",
    },
  ];
  return (
    <div>
      <Card>
        <Item name={response[0].itemName}></Item>
        <ItemDate
          day={response[0].ItemDate}
          month={response[0].itemMonth}
          year={response[0].itemYear}
        ></ItemDate>

        <Item name={response[1].itemName}></Item>
        <ItemDate
          day={response[1].ItemDate}
          month={response[1].itemMonth}
          year={response[1].itemYear}
        ></ItemDate>

        <Item name={response[2].itemName}></Item>
        <ItemDate
          day={response[2].ItemDate}
          month={response[2].itemMonth}
          year={response[2].itemYear}
        ></ItemDate>

        <div className="App">Hello World</div>
      </Card>
    </div>
  );
}

export default App;
