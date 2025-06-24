'use client';

import { useState } from "react";
import H1 from "@/components/layout/H1";
import BackLayCalc from "@/components/features/BackLayCalc";
import AFavorEnContraCalcTypeSelect from "@/components/features/forms/AFavorEnContraCalcTypeSelect";

export default function CalculadoraFavorContraPage() {
  const [selectedCalcType, setSelectedCalcType] = useState('1');

  const handleCalcTypeChange = (e) => {
    setSelectedCalcType(e.target.value);
  };

  const renderCalculator = () => {
    switch (selectedCalcType) {
      case '1':
        return <BackLayCalc />;
      case '2':
        return <div className="p-4 bg-green-100 rounded">Calculadora de Freebet</div>;
      case '3':
        return <div className="p-4 bg-yellow-100 rounded">Calculadora de Reembolso</div>;
      case '4':
        return <div className="p-4 bg-purple-100 rounded">Calculadora de SuperCuota</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <H1 content="Calculadora a favor - en contra" />
      <AFavorEnContraCalcTypeSelect selectedCalcType={selectedCalcType} onTypeChange={handleCalcTypeChange} />
      {renderCalculator()}
    </>
  );
}