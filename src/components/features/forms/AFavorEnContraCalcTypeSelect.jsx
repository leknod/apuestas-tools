'use client';
import H3 from "@/components/layout/H3";


export default function AFavorEnContraCalcTypeSelect({ selectedCalcType, onTypeChange }) {
  return (
    <>
      <form className="flex flex-col gap-2 p-6 mb-4 bg-gray-200 sm:rounded-lg">
        <H3 content="Tipo de apuesta" />
        <div className="flex items-start gap-2">
          <input
            type="radio"
            name="calc-type"
            value="1"
            id="type1"
            className="mt-[5px]"
            checked={selectedCalcType === '1'}
            onChange={onTypeChange}
          />
          <label htmlFor="type1"><strong>Apuesta calificante</strong> - Apuesta con una pérdida mínima para calificar a una promoción</label>
        </div>
        <div className="flex items-start gap-2">
          <input
            type="radio"
            name="calc-type"
            value="2"
            id="type2"
            className="mt-[5px]"
            checked={selectedCalcType === '2'}
            onChange={onTypeChange}
          />
          <label htmlFor="type2"><strong>Freebet</strong> - Apuesta para convertir una freebet en dinero real</label>
        </div>
        <div className="flex items-start gap-2">
          <input
            type="radio"
            name="calc-type"
            value="3"
            id="type3"
            className="mt-[5px]"
            checked={selectedCalcType === '3'}
            onChange={onTypeChange}
          />
          <label htmlFor="type3"><strong>Reembolso</strong> - Promoción que te devuelve una freebet si pierdes</label>
        </div>
        <div className="flex items-start gap-2">
          <input
            type="radio"
            name="calc-type"
            value="4"
            id="type4"
            className="mt-[5px]"
            checked={selectedCalcType === '4'}
            onChange={onTypeChange}
          />
          <label htmlFor="type4"><strong>SuperCuota</strong> - Promoción que te da una freebet si aciertas</label>
        </div>
      </form>
    </>
  );
}