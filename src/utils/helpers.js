import moment from "moment";
import Link from "next/link";

export const normalizeTableHeader = (key) => {
  switch (key) {
    case "meetingName":
      return "Meeting Name";
    case "meetingTime":
      return "Meeting Time";
    case "meetingLocation":
      return "Meeting Location";
    case "isMajor":
      return "Is Major?";
    default:
      return key;
  }
};

export const normalizeTableData = (key, value) => {
  let _type = typeof value;
  switch (_type) {
    case "boolean": {
      switch (key) {
        case "isMajor":
          return value === true ? "Yes" : "No";
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
                  href={`https://www.google.com/maps/place/${value[0]},${value[1]}`}
                >
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
