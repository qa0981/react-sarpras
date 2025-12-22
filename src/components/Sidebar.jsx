export default function Sidebar() {
  return (
    <div className="bg-light vh-100 p-3 border-end">
      <ul className="nav flex-column gap-2">
        <li className="nav-item">Dashboard</li>
        <li className="nav-item">Sarpras</li>
        <li className="nav-item fw-bold text-primary">
          Pengaduan
        </li>
      </ul>
    </div>
  );
}
