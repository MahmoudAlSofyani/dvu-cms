import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  IconButton,
  Chip,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import moment from "moment";
import { Box } from "@mui/system";
import Image from "next/image";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CustomButton from "../custom-button";

const MemberCard = ({ data, onEdit }) => {
  return (
    <Card elevation={0} sx={{ maxWidth: 300 }}>
      <Box position="relative" height={250}>
        <Image src="https://picsum.photos/500" layout="fill" />
      </Box>
      <CardHeader
        title={`${data.firstName} ${data.lastName}`}
        titleTypographyProps={{ sx: { fontWeight: "bold" } }}
        subheaderTypographyProps={{ variant: "body2" }}
        subheader={`Member since ${moment(data.createdAt).format(
          "DD-MM-YYYY"
        )}`}
        action={
          <Chip
            label={data.isActive ? "Active" : "Inactive"}
            color={data.isActive ? "success" : "secondary"}
            sx={{ color: "white", fontWeight: "bold" }}
          />
        }
      />
      <CardContent>
        <Box display="flex">
          {data.roles.map((_role, index) => (
            <Box mr={1} key={index}>
              <Chip
                label={_role.name}
                color={_role.code === "ADMIN" ? "secondary" : "default"}
              />
            </Box>
          ))}
        </Box>
        <Box display="flex" my={2}>
          <Box mr={1}>
            <AlternateEmailIcon color="disabled" fontSize="small" />
          </Box>
          <Box>
            <Typography color="textPrimary">{data.email}</Typography>
          </Box>
        </Box>
        <Box display="flex" mt={1}>
          <Box mr={1}>
            <PhoneIphoneOutlinedIcon color="disabled" fontSize="small" />
          </Box>
          <Box>
            <Typography color="textPrimary">{data.mobile}</Typography>
          </Box>
        </Box>
        <Box display="flex" mt={1}>
          <Box mr={1}>
            <WhatsAppIcon color="disabled" fontSize="small" />
          </Box>
          <Box>
            <Typography color="textPrimary">{data.whatsApp}</Typography>
          </Box>
        </Box>
        <Box display="flex" mt={1}>
          <Box mr={1}>
            <StarBorderOutlinedIcon color="disabled" fontSize="small" />
          </Box>
          <Box>
            <Typography color="textPrimary">{data.points} Points</Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton sx={{ marginLeft: "auto" }} onClick={onEdit}>
          <EditOutlinedIcon color="disabled" />
        </IconButton>
        <CustomButton label="Purge" fullWidth={false} />
      </CardActions>
    </Card>
  );
};

export default MemberCard;
