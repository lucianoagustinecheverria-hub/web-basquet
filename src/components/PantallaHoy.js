"use client";

import { useState } from "react";
import SelectorDia from "./SelectorDia";
import ListaPartidos from "./ListaPartidos";

export default function PantallaHoy({ partidos }) {
  const [dia, setDia] = useState(0);

  const dias = partidos.map((p) => p.dia);
  const minimo = Math.min(...dias);
  const maximo = Math.max(...dias);
  const delDia = partidos.filter((p) => p.dia === dia);

  return (
    <>
      <SelectorDia dia={dia} minimo={minimo} maximo={maximo} onCambiar={setDia} />
      <ListaPartidos partidos={delDia} />
    </>
  );
}