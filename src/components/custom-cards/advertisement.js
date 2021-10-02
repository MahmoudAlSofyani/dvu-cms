import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Chip,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import moment from "moment";
import Carousel from "react-material-ui-carousel";
import EditIcon from "@mui/icons-material/Edit";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const AdvertisementCard = ({ data, onEdit, onApprove }) => {
  const {
    title,
    price,
    description,
    images,
    isVerified,
    isSold,
    createdAt,
    updatedAt,
    user,
  } = data;

  return (
    <Card>
      {images && images.length > 0 && (
        <Carousel
          animation="slide"
          indicators={false}
          interval={4000}
          fullHeightHover={false}
          navButtonsAlwaysVisible={false}
          navButtonsAlwaysInvisible={true}
          swipe
        >
          {images.map((_image, index) => (
            <Box position="relative" height={250} key={index}>
              <Image src={_image} layout="fill" objectFit="cover" />
            </Box>
          ))}
        </Carousel>
      )}
      <CardHeader title={title} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex">
              <Box mr={1}>
                <Chip
                  label={isVerified ? "Verified" : "Not Verified"}
                  color={isVerified ? "success" : "error"}
                />
              </Box>
              {isSold && (
                <Box>
                  <Chip label="Sold" color="success" />
                </Box>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="textSecondary">
              Price:
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
            >{`AED ${price}`}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="textSecondary">
              User:
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
            >{`${user.firstName} ${user.lastName}`}</Typography>
          </Grid>
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
              Description:
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Box ml="auto">
          {!isVerified && (
            <IconButton onClick={onApprove}>
              <ThumbUpIcon color="success" />
            </IconButton>
          )}
          <IconButton onClick={onEdit}>
            <EditIcon color="primary" />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default AdvertisementCard;
