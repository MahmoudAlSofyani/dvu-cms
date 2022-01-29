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
import moment from "moment";
import Image from "next/image";

const EventCard = ({ data, onPublish, onEdit, onPublishUnpublish }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box p={2}>
        {data.isMajor && (
          <Chip
            label="Major"
            color="secondary"
            sx={{ color: "white", fontWeight: "bold" }}
            variant="outlined"
          />
        )}
        <Chip
          label={data.isPublished ? "Published" : "Unpublished"}
          color={data.isPublished ? "success" : "secondary"}
          sx={{ color: "white", fontWeight: "bold" }}
        />
      </Box>
      {data.poster && (
        <CardMedia>
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/files/${data.poster.uid}`}
            width={300}
            height={300}
            objectFit="contain"
          />
        </CardMedia>
      )}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {data.name}
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textTransform: "uppercase" }}>
            Date
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textTransform: "uppercase" }}
            fontWeight="bold">
            {moment(data.date).format("ddd DD-MM-YYYY")}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            variant="body2"
            gutterBottom
            sx={{ textTransform: "uppercase" }}>
            Registered
          </Typography>
          <Typography variant="body2" gutterBottom fontWeight="bold">
            {data.members.length}
          </Typography>
        </Box>

        <Box></Box>
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

export default EventCard;
