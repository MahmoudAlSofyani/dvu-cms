import {
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  normalizeTableData,
  normalizeTableHeader,
  omitHeaders,
} from "../../utils/helpers";

const MemberTable = ({ data, onEdit, keysToOmit }) => {
  return (
    <>
      {data.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {omitHeaders(Object.keys(data[0]), keysToOmit).map(
                  (_header, index) => (
                    <TableCell key={_header + index}>
                      {normalizeTableHeader(_header)}
                    </TableCell>
                  )
                )}
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((_data, index) => (
                <TableRow key={_data + index}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    {normalizeTableData("fullName", _data.fullName)}
                  </TableCell>
                  <TableCell>
                    {normalizeTableData("email", _data.email)}
                  </TableCell>
                  <TableCell>
                    {normalizeTableData("mobile", _data.mobile)}
                  </TableCell>
                  <TableCell>
                    {normalizeTableData("whatsApp", _data.whatsApp)}
                  </TableCell>
                  <TableCell>
                    {normalizeTableData("points", _data.points)}
                  </TableCell>
                  <TableCell>
                    {normalizeTableData("isActive", _data.isActive)}
                  </TableCell>
                  <TableCell>
                    {normalizeTableData("approvedDate", _data.approvedDate)}
                  </TableCell>
                  <TableCell>
                    {normalizeTableData("createdAt", _data.createdAt)}
                  </TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => onEdit(_data.uid)}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box textAlign="center">
          <Typography variant="body1" color="text.secondary">
            No results found
          </Typography>
        </Box>
      )}
    </>
  );
};

export default MemberTable;
