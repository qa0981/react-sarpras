import Navbar from "../../components/Navbar";
import Sidebar2 from "../../components/Sidebar2";
import TabelPengaduan from "./TabelPengaduan";

export default function PengaduanPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 p-0">
            <Sidebar2 />
          </div>

          <div className="col-10 p-4">
            <TabelPengaduan />
          </div>
        </div>
      </div>
    </>
  );
}
