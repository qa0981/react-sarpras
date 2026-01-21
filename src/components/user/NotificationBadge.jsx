import { useEffect, useState } from "react";
import api from "../../services/api";

export default function NotificationBadge() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // contoh: ambil pengaduan user yang statusnya berubah
    api
      .get("/pengaduan")
      .then((res) => {
        // hitung pengaduan yang sudah diproses / selesai
        const notif = res.data.filter(
          (item) =>
            item.status === "Diproses" ||
            item.status === "Selesai"
        );
        setCount(notif.length);
      })
      .catch(() => {
        setCount(0);
      });
  }, []);

  if (count === 0) return null;

  return (
    <div style={{ position: "relative", marginRight: 16 }}>
      {/* Icon lonceng */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>

      {/* Badge */}
      <span
        style={{
          position: "absolute",
          top: -6,
          right: -6,
          background: "#ef4444",
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          padding: "2px 6px",
          borderRadius: "999px",
          lineHeight: 1,
        }}
      >
        {count}
      </span>
    </div>
  );
}
