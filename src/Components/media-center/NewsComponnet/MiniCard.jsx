import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DOMPurify from "dompurify";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};


export default function MiniCard({ image, title, content, onClick }) {

  return (
    <Card
      style={{
        maxWidth: 250,
        height: 255,
        padding: 3,
        marginBottom: 5,
        boxShadow: 38,
        borderRadius: 12,
      }}
    >
      <CardMedia
        onClick={onClick}
        style={{
          height: 130,
          width: "auto",
          cursor: "pointer",
          borderRadius: 10,
        }}
        //  image=
        image={image}
        title={title}
      />
      <CardContent   style={{ height: 80 

       }}>
        <Typography
          onClick={onClick}
          gutterBottom
          variant="h6"
          component="div"
          style={{ overflow: "hidden", maxHeight: "50px", cursor: "pointer" }}
        >
          {/* {title} */}
          <div className=" fs-6"  dangerouslySetInnerHTML={sanitizeHTML(title)} />
        </Typography>
        <Typography
          onClick={onClick}
          variant="body2"
          color="text.secondary"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxHeight: "40px",
            cursor: "pointer",
            
          }}
        >
          
          <div 
          className="my-5 fs-6 "
          dangerouslySetInnerHTML={sanitizeHTML(content)}/>
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="small" onClick={onClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
