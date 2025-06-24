import DarkModeIcon from "../icons/DarkModeIcon";
import MenuIcon from "../icons/MenuIcon";

export default function Header () {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
      <div>
        Apuestas.tools
      </div>
      <div className="flex gap-4">
        <button>
          <DarkModeIcon />
        </button>
        <button>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}