import { rajdhani } from "@/app/fonts";

export default function H2({ content }) {
  return (
    <h2 className={`text-2xl ${rajdhani.className} text-center font-bold mb-4`}>{content}</h2>
  );
}