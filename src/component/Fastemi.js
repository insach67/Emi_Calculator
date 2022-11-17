import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
function Fastemi() {
  const data = useSelector((res) => res);
  return (
    <Box sx={{ width: "90%" }}>
      <Stack spacing={2}>
        <Item>
          Monthly EMI : {data.monthlyEMI ? ` ${data.monthlyEMI}` : ""}
        </Item>
        <Item>
          Total Interest Amount :
          {data.intestamount ? ` ${data.intestamount}` : ""}
        </Item>
        <Item>
          Total Amount Payable :{data.totalpayble ? ` ${data.totalpayble}` : ""}{" "}
        </Item>
      </Stack>
    </Box>
  );
}

export default Fastemi;
