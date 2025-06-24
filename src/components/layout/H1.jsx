import { rajdhani } from "@/app/fonts";

export default function H1({ content }) {
  return (
    <h1 className={`text-3xl ${rajdhani.className} text-center font-bold mb-8`}>{content}</h1>
  );
}