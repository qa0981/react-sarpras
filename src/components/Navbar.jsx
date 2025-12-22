import NotificationBadge from "./NotificationBadge";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-danger px-3 d-flex justify-content-between">
      <span className="navbar-brand">
        Sistem Pengaduan Sarpras
      </span>

      <div className="d-flex align-items-center">
        <NotificationBadge />
        <button className="btn btn-outline-light btn-sm">
          Sign out
        </button>
      </div>
    </nav>
  );
}
