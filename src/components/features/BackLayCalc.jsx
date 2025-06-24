import H3 from "../layout/H3";

export default function BackLayCalc() {
  return (
    <form>
      <div className="p-6 bg-back sm:rounded-t-lg">
        <H3 content="Apuesta a favor (Bookie)" />
        <div className="flex flex-col w-[45%] gap-1 mb-4">
          <label htmlFor="back-stake" className="text-sm">Stake</label>
          <input type="number" name="back-stake" id="back-stake" className="bg-white/25 p-2 rounded-sm outline-none" />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-[45%] gap-1">
            <label htmlFor="back-odds" className="text-sm">Cuota</label>
            <input type="number" name="back-odds" id="back-odds" className="bg-white/25 p-2 rounded-sm outline-none" />
          </div>
          <div className="flex flex-col w-[45%] gap-1">
            <label htmlFor="back-commission" className="text-sm">Comisión</label>
            <input type="number" name="back-commission" id="back-commission" className="bg-white/25 p-2 rounded-sm outline-none" />
          </div>
        </div>
      </div>
      <div className="p-6 bg-lay">
        <H3 content="Apuesta en contra (Exchange)" />
        <div className="flex justify-between">
          <div className="flex flex-col w-[45%] gap-1">
            <label htmlFor="lay-odds" className="text-sm">Cuota</label>
            <input type="number" name="lay-odds" id="lay-odds" className="bg-white/25 p-2 rounded-sm outline-none" />
          </div>
          <div className="flex flex-col w-[45%] gap-1">
            <label htmlFor="lay-commission" className="text-sm">Comisión</label>
            <input type="number" name="lay-commission" id="lay-commission" className="bg-white/25 p-2 rounded-sm outline-none" />
          </div>
        </div>
      </div>
      <div className="p-6 mb-4 bg-stake text-center sm:rounded-b-lg">
        <p>Stake en contra: 100€</p>
      </div>
      <div className="p-6 text-center bg-gray-200 sm:rounded-lg">
        <p>Pérdida calificante: -0,53€</p>
      </div>
    </form>
  );
}