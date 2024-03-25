import { Button, Link } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <Wrapper>
      <NavItems />
      <img src={logo} />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const NavItems = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      gap={"80px"}
      alignItems={"center"}
      fontStyle={"Fredoka"}
      fontWeight={"400"}
    >
      <Button
        variant="outlined"
        onClick={console.log}
        sx={{
          color: "white",
          fontSize: "x-large",
          width: "163px",
          height: "49px",
          borderColor: "#f1f1f1",
          borderWidth: "2px",
          borderRadius: "50px",
        }}
      >
        כניסה
      </Button>
      <NavLink sx={{":hover":{cursor:"pointer"}}}>קצת עלינו</NavLink>
      <NavLink sx={{":hover":{cursor:"pointer"}}}>איך זה עובד</NavLink>
      <NavLink sx={{":hover":{cursor:"pointer"}}}>צור קשר</NavLink>
    </Box>
  );
};

const NavLink = styled(Link).attrs({
  color: "#f1f1f1",
  fontSize: "24px",
  fontWeight: 100,
  letterSpacing: "8%",
  lineHeight: "24.09px",
})`
  text-decoration: none !important;
`;
