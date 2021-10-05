import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import moment from "moment";
import { Box } from "@mui/system";
import Image from "next/image";

const AnnouncementCard = ({ data, onEdit }) => {
  return (
    <Card elevation={0} sx={{ maxWidth: 300 }}>
      <Box position="relative" height={250}>
        <Image src="https://picsum.photos/500" layout="fill" />
      </Box>
      <CardHeader
        title={data.title}
        titleTypographyProps={{ sx: { fontWeight: "bold" } }}
        subheader={
          <Box display="flex">
            <Box mr={2}>
              <Typography>Posted</Typography>
            </Box>
            <Box>
              <Typography color="textPrimary">
                {moment(data.createdAt).format("dddd DD-MM-YYYY")}
              </Typography>
            </Box>
          </Box>
        }
      />
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: data.details }} />
      </CardContent>
      <CardActions>
        <IconButton sx={{ marginLeft: "auto" }} onClick={onEdit}>
          <EditOutlinedIcon color="disabled" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AnnouncementCard;
