import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CustomButton from "../custom-button";
import moment from "moment";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import dvuLogo from "../../../public/logos/dvu-small.png";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const AdvertisementCard = ({ data, onPublish, onEdit, onVerifyUnverify }) => {
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
          label={data.isVerified ? "Verified" : "Not Verified"}
          color={data.isVerified ? "success" : "warning"}
          sx={{ color: "white", fontWeight: "bold" }}
        />
        <Chip
          label={data.isSold ? "Sold" : "Not Sold"}
          color={data.isSold ? "success" : "error"}
          sx={{ color: "white", fontWeight: "bold" }}
        />
      </Box>
      {data.images && data.images.length > 1 ? (
        <CardMedia
          sx={{
            textAlign: "center",
          }}>
          <Carousel autoPlay={false} swipe>
            {data.images.map((_image, index) => (
              <Image
                key={_image.uid + index}
                src={`${process.env.NEXT_PUBLIC_API_URL}/files/${_image.uid}`}
                width={350}
                height={350}
                objectFit="contain"
              />
            ))}
          </Carousel>
        </CardMedia>
      ) : (
        (data.images.length === 1 || data.images.length === 0) && (
          <CardMedia
            sx={{
              textAlign: "center",
              opacity: data.images && data.images.length > 0 ? 1 : 0.4,
            }}>
            <Image
              src={
                data.images && data.images.length > 0
                  ? `${process.env.NEXT_PUBLIC_API_URL}/files/${data.images[0].uid}`
                  : dvuLogo
              }
              width={350}
              height={350}
              objectFit="contain"
            />
          </CardMedia>
        )
      )}
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              {data.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex">
              <SellOutlinedIcon sx={{ mr: 1 }} color="secondary" />
              <Typography variant="body1" fontWeight="bold">
                AED {data.price}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex">
              <CalendarTodayOutlinedIcon color="secondary" sx={{ mr: 1 }} />
              <Typography gutterBottom>
                {moment(data.createdAt).format("Do MMMM YYYY hh:mm A")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ margin: "10px 10px" }}>
        <CustomButton
          fullWidth={false}
          label={data.isVerified ? "Unverify" : "Verify"}
          onClick={onVerifyUnverify}
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

export default AdvertisementCard;
