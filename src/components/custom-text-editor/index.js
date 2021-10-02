import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const CustomTextEditor = ({ label, value, onChange }) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: "" }, { align: "center" }, { align: "right" }],
    ],
  };

  return (
    <ReactQuill
      placeholder={label}
      value={value}
      onChange={onChange}
      modules={modules}
    />
  );
};

export default CustomTextEditor;
