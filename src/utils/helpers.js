import moment from "moment";
import Link from "next/link";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export const normalizeTableHeader = (key) => {
  switch (key) {
    case "fullName":
      return "NAME";
    case "email":
      return "EMAIL";
    case "mobile":
      return "MOBILE";
    case "whatsApp":
      return "WHATSAPP";
    case "points":
      return "POINTS";
    case "isActive":
      return "ACTIVE";
    case "createdAt":
      return "JOINED";
    case "approvedDate":
      return "APPROVED";
    default:
      return key;
  }
};

export const omitHeaders = (headers, keysToOmit) => {
  return headers
    .filter((_header) => (keysToOmit.includes(_header) ? false : true))
    .map((_h) => _h);
};

export const normalizeTableData = (key, value) => {
  let _type = typeof value;
  switch (_type) {
    case "boolean": {
      switch (key) {
        case "isMajor":
          return value === true ? "Yes" : "No";
        case "isActive":
          return value === true ? (
            <CheckIcon color="success" />
          ) : (
            <CloseIcon color="error" />
          );
        default:
          return value;
      }
    }
    case "string": {
      switch (key) {
        case "date":
          return moment(value).format("DD-MM-YYYY");
        case "meetingTime":
          return moment(value).format("hh:mm A");
        case "createdAt":
          return moment(value).format("Do MMM YYYY");
        case "approvedDate":
          return moment(value).format("Do MMM YYYY");
        default:
          return value;
      }
    }
    case "object": {
      const isArray = Array.isArray(value);
      switch (isArray) {
        case true: {
          switch (key) {
            case "meetingLocation":
              return (
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.google.com/maps/place/${value[0]},${value[1]}`}>
                  <a target="_blank" rel="norefferer">
                    Location
                  </a>
                </Link>
              );
            default:
              return value;
          }
        }
      }
    }
    default:
      return value;
  }
};

export const getFormData = (payload) =>
  Object.keys(payload).reduce((fD, key) => {
    if (key === "poster") key = "file";

    fD.append(key, payload[key === "file" ? "poster" : key]);
    return fD;
  }, new FormData());
