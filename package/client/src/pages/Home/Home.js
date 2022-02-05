import {useEffect} from "react";
import { Navigate } from "react-router-dom";
import { authSelector } from "../../redux/auth/auth-selectors";
import * as ROUTES from "../../routes";
// REDUX
import { useDispatch, useSelector } from "react-redux";
// MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SideBar from "../../components/organisms/SideBar/SideBar";
import Copyright from "../../components/atoms/Copyright";
import EditProfile from "../../components/molecules/EditProfile";
import TracksList from "../../components/organisms/TracksList";
import SingleAlbum from "../../components/organisms/SingleAlbum";
import { fetchAllTracks } from "../../redux/tracks/tracks-actions";
import { Container } from "@mui/material";
import { tracksSelector } from "../../redux/tracks/tracks-selector";
import NavBar from "../../components/molecules/NavBar";
import FormCreateTracks from "../../components/organisms/FormCreateTracks/FormCreateTracks";


const mdTheme = createTheme({
  typography: {
    fontFamily: ["circular-std", "Roboto"].join(","),
    fontSize: 20,
  },
});

function Home() {
  const dispatch = useDispatch();
  const inTracks = useSelector(tracksSelector);
  const { isAuthenticated, isEditing, currentUser } = useSelector(authSelector);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  } else {
    useEffect(()=>{
      dispatch(fetchAllTracks)
    }, [dispatch]);
  }
  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <SideBar />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <NavBar/>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {/* {isEditing  && <EditProfile/>} */}
              {/* <SingleAlbum/> */}
              <FormCreateTracks/>
              {!isEditing && !inTracks && <InnerDash/>}  
              {inTracks && <TracksList />}
            </Container>
            <Copyright sx={{ pt: 4, mt: 3 }} />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
export default Home;
