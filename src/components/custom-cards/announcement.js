import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";

const AnnouncementCard = ({ data, onEdit }) => {
  const { title, details, createdAt, updatedAt, poster } = data;

  return (
    <Card>
      {poster && Object.keys(poster).length > 0 && (
        <Box position="relative" height={250}>
          <Image src={poster} layout="fill" objectFit="cover" />
        </Box>
      )}
      <CardHeader title={title} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="textSecondary">
              Posted:
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {moment(createdAt).format("dddd DD-MM-YYYY hh:mm A")}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="textSecondary">
              Last Updated:
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {`${moment
                .duration(moment(updatedAt).diff(moment(createdAt)))
                .asDays()} day(s) ago`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary">
              Details:
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: details }} />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Box ml="auto">
          <IconButton onClick={onEdit}>
            <EditIcon color="primary" />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default AnnouncementCard;
