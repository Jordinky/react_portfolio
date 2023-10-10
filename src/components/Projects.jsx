import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {info} from "../info.jsx";

const Projects = () => {

  
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
      {info.projectInfo.map(({img, text,description,index,weblink,githublink}) =>(
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Card sx={{ minWidth: 350 ,background: "none", m:2, marginTop: 15, boxShadow: "#E2FCEF"}}>
            <CardMedia
            component = "img"
            image =  {img}
            title= {text}
            sx={{
               minHeight: 350,
               minWidth: 350,
              }}  
            />
            <CardContent sx = {{color: "#E2FCEF"}}>
              <p>{text}</p>
              <p>{description}</p>
            </CardContent>
            <CardActions>
              <Button size="small" a href = {weblink}>Link</Button>
              <Button size="small" a href = {githublink}>Github</Button>
            </CardActions>
          </Card>
        </Grid>
          ))} 
  </Grid>
  );
};
export default Projects;