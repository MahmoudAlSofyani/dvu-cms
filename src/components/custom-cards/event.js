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
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import moment from "moment";
import { Box } from "@mui/system";

const EventCard = ({ data }) => {
  return (
    <Card elevation={0} sx={{ maxWidth: 300 }}>
      <CardHeader
        title={data.name}
        titleTypographyProps={{ sx: { fontWeight: "bold" } }}
        action={data.isMajor && <Chip color="secondary" label="Major" />}
        subheader={
          <Box display="flex" mt={1}>
            <Box mr={1}>
              <CalendarTodayOutlinedIcon />
            </Box>
            <Box>
              <Typography color="textPrimary">
                {moment(data.date).format("dddd DD-MM-YYYY")}
              </Typography>
            </Box>
          </Box>
        }
      />
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: data.details }} />
      </CardContent>
      <CardActions>
        <IconButton sx={{ marginLeft: "auto" }}>
          <EditOutlinedIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default EventCard;
