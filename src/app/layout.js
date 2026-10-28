import "./globals.css";

export const metadata = {
  title: "La Bandeja · Página de basquet de confianza",
  description:
    "Partidos de hoy, resultados por cuarto y tabla de posiciones del básquet argentino.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}