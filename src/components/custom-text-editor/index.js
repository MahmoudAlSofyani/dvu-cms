const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // ES6
import { makeStyles } from "@mui/styles";
import dynamic from "next/dynamic";

const useStyles = makeStyles((theme) => ({
  textEditor: {
    "& .ql-editor": {
      minHeight: 100,
    },
    "& .ql-blank:before": {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body1.fontSize,
    },
  },
}));

const CustomTextEditor = ({ placeholder }) => {
  const classes = useStyles();
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };

  return (
    <ReactQuill
      placeholder={placeholder}
      theme="snow"
      modules={modules}
      className={classes.textEditor}
    />
  );
};

export default CustomTextEditor;
