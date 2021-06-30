import "./styles.css";
import { DocumentViewer } from "react-documents";

export default function App() {
  return (
    <div>
      <DocumentViewer
        class="img"
        viewerUrl={"https://docs.google.com/gview?url=%URL%&embedded=true"}
        url={
          "https://cats-server-dev-route-cats-dev.apps.kw.projectinnovate.sg/v1/uploads/jobs/files/1624940011295_Sample_JD_1.docx"
        }
        viewer="url"
      ></DocumentViewer>
    </div>
  );
}
