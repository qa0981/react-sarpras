import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FormPengaduan from "../components/FormPengaduan";
import TabelPengaduan from "../components/TabelPengaduan";

export default function PengaduanPage() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 p-0">
            <Sidebar />
          </div>

          <div className="col-10 p-4">
            <div className="row">
              <div className="col-4">
                <FormPengaduan />
              </div>
              <div className="col-8">
                <TabelPengaduan />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
