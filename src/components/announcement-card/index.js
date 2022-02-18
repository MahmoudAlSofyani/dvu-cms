import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CustomButton from "../custom-button";
import Image from "next/image";
import dvuLogo from "../../../public/logos/dvu-small.png";
import Clamp from "react-multiline-clamp";

const AnnouncementCard = ({ data, onPublish, onEdit, onPublishUnpublish }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box p={2}>
        <Chip
          label={data.isPublished ? "Published" : "Unpublished"}
          color={data.isPublished ? "success" : "secondary"}
          sx={{ color: "white", fontWeight: "bold" }}
        />
      </Box>
      <CardMedia sx={{ textAlign: "center", opacity: data.poster ? 1 : 0.2 }}>
        <Image
          src={
            data.poster
              ? `${process.env.NEXT_PUBLIC_API_URL}/files/${data.poster.uid}`
              : dvuLogo
          }
          width={300}
          height={300}
          objectFit="contain"
        />
      </CardMedia>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {data.title}
        </Typography>
        <Clamp lines={4}>
          <div dangerouslySetInnerHTML={{ __html: data.details }}></div>
        </Clamp>
      </CardContent>
      <CardActions sx={{ margin: "10px 10px" }}>
        <CustomButton
          fullWidth={false}
          label={data.isPublished ? "Unpublish" : "Publish"}
          onClick={onPublishUnpublish}
        />
        <CustomButton
          fullWidth={false}
          label="Edit"
          variant="text"
          color="inherit"
          onClick={onEdit}
        />
      </CardActions>
    </Card>
  );
};

export default AnnouncementCard;
