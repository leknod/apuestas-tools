import { rajdhani } from "@/app/fonts";

export default function H3({ content }) {
  return (
    <h3 className={`text-xl ${rajdhani.className} font-bold mb-2`}>{content}</h3>
  );
}