import { Paper } from "@mui/material";
function Item({ item }) {
  return (
    <Paper>
      <img
        src={item.image}
        alt="..."
        style={{ width: "100%", height: "50vh" }}
      />
      {/* <Button className="CheckButon">Check it out!</Button> */}
    </Paper>
  );
}
export default Item;
