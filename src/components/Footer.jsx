import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LabelBottomNavigation = () => {
  const [value, setValue] = React.useState("Instagram");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <BottomNavigation
        value={value} 
        onChange={handleChange}
        sx={{
          position: "fixed", 
          bottom: 0, 
          left: 0, 
          right: 0, 
          background: "none", 
          size: 12,  
          "& .MuiBottomNavigationAction-root": {
            color: "#E2FCEF",
            height: "1.5em",
          }
      }}   
        >
        <BottomNavigationAction
          value="instagram"
          href = 'https://www.instagram.com/guacamole_lover/?next=%2F'
          icon={<InstagramIcon />}
          label = "instagram"
        />
        <BottomNavigationAction
          value="github"
          href = 'https://github.com/Jordinky?tab=repositories'
          icon={<GitHubIcon />}
          label = "github"
        />
        <BottomNavigationAction
          value="linkedin"
          href = 'https://www.linkedin.com/in/jordi-pelaez-a95015254/'
          icon={<LinkedInIcon />}
          label = "linkedin"
        />
      </BottomNavigation>
 
  );
};
export default LabelBottomNavigation;