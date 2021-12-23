import react, { useState, useEffect } from "react";
import { useLocalStorage } from "react-use";
import { TextField, MenuItem } from "@mui/material";
import axios from "axios";
import router from "next/router";
import Alerts from "../components/Alerts";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";

const SignIn = () => {
  const [movies, setMovies] = useState([]);
  const [password, setPassword] = useState("");
  const [registeredUsers] = useLocalStorage("users", []);
  const [isLoggedIn] = useLocalStorage("isLoggedIn", false);

  const StyledText = styled.div`
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis !important;
  `;
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/signin");
      return;
    }
    let data = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };
    axios
      .post("https://hoblist.com/api/movieList", data)
      .then((res) => {
        console.log(res.data.result[0]);
        setMovies(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1, paddingTop: "40px", marginLeft: "160px" }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          {movies?.map((movie) => {
            return (
              <Card
                sx={{
                  minWidth: 375,
                  maxWidth: 375,
                  margin: "10px",
                  display: "flex",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ minWidth: 151, maxWidth: 151 }}
                  image={movie.poster}
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="div">
                      <StyledText>{movie.title}</StyledText>
                    </Typography>
                    <StyledText>
                      <Typography variant="body2">
                        <span style={{ color: "grey" }}>Genre:</span>{" "}
                        {movie.genre}
                      </Typography>
                    </StyledText>

                    <Typography
                      variant="body2"
                      style={{ display: "flex", flexWrap: "wrap" }}
                    >
                      <StyledText>
                        <span style={{ color: "grey" }}>Director:</span>{" "}
                        {movie.director?.map((director) => {
                          return director;
                        })}
                      </StyledText>
                    </Typography>

                    <Typography variant="body2">
                      <StyledText>
                        <span style={{ color: "grey" }}>Starring:</span>{" "}
                        {movie.stars?.map((star) => {
                          return star;
                        })}
                      </StyledText>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      <StyledText>
                        {`${movie.language} | ${new Date(
                          parseInt(movie.releasedDate)
                        ).toDateString()}`}
                      </StyledText>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="#4d79ff">
                      <StyledText>
                        {`${movie.pageViews} Views | Voted by ${movie.totalVoted} people`}
                      </StyledText>
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      href={movie.poster}
                      target="_blank"
                    >
                      Watch Trailer
                    </Button>
                    <StyledText
                      style={{
                        fontSize: 14,
                        alignItems: "center",
                        paddingLeft: "10px",
                        color: "grey",
                      }}
                    >
                      <ArrowDropUp />
                      {movie?.upVoted?.length ? movie?.upVoted?.length : 0}
                      <ArrowDropDown />
                      {movie?.downVoted?.length ? movie?.downVoted?.length : 0}
                    </StyledText>
                  </CardActions>
                </Box>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
