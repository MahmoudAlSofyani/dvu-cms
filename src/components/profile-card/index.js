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
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ProfileCard = ({ data, onPurge, onEdit }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box p={2}>
        <Chip
          label={data.isActive ? "Active" : "Purged"}
          color={data.isActive ? "success" : "secondary"}
          sx={{ color: "white", fontWeight: "bold" }}
          variant="outlined"
        />
      </Box>
      <CardMedia
        component="img"
        alt=""
        height="140px"
        image="https://picsum.photos/345/345"
        sx={{
          objectFit: "cover",
          borderRadius: "50%",
          width: "140px",
          margin: "0 auto",
        }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom component="div">
          {`${data.firstName} ${data.lastName}`}
        </Typography>
        {data.roles.map((_role, index) => (
          <Chip
            label={_role.name}
            color={_role.name === "Admin" ? "secondary" : "default"}
            sx={{ fontWeight: "bold", marginRight: "10px" }}
            variant="outlined"
          />
        ))}
        <Box>
          <Box display="flex" alignItems="center" flexWrap="wrap" mt={2}>
            <AlternateEmailIcon sx={{ marginRight: 1 }} color="disabled" />
            <Typography variant="body1">{data.email}</Typography>
          </Box>
          <Box display="flex" alignItems="center" flexWrap="wrap" mt={2}>
            <PhoneIphoneIcon sx={{ marginRight: 1 }} color="disabled" />
            <Typography variant="body1">{data.mobile}</Typography>
          </Box>
          <Box display="flex" alignItems="center" flexWrap="wrap" mt={2}>
            <WhatsAppIcon sx={{ marginRight: 1 }} color="disabled" />
            <Typography variant="body1">{data.whatsApp}</Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ margin: "10px 10px" }}>
        <CustomButton
          fullWidth={false}
          label={data.isActive ? "Purge" : "Unpurge"}
          onClick={onPurge}
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

export default ProfileCard;
