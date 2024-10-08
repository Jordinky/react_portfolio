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
          <Card sx={{ minWidth: 200 ,backgroundColor: "#99D5C9", marginTop: "20vh", boxShadow: "#E2FCEF", p:1,marginLeft:1,marginRight:1}}>
            <CardMedia
            component = "img"
            image =  {img}
            title= {text}
            sx={{
               minHeight: 200,
               minWidth: 200,
              }}  
            />
            <CardContent sx = {{color: "#6C969D"}}>
              <p>{text}</p>
              <p>{description}</p>
            </CardContent>
            <CardActions>
              <Button size="small" a href = {weblink} sx ={{color: "#99D5C9", backgroundColor: "#6C969D"}}>Link</Button>
              <Button size="small" a href = {githublink} sx ={{color: "#99D5C9", backgroundColor: "#6C969D"}}>Github</Button>
            </CardActions>
          </Card>
        </Grid>
          ))} 
  </Grid>
  );
};
export default Projects;