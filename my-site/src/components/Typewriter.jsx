import { useEffect, useState } from "react";

const words = [
  "building and testing reliable software systems",
  "designing games and interactive experiences",
  "combining code with creativity",
  "exploring and learning through experimentation"
];

function Typewriter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const speed = deleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setIndex((index + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <p className="text-sm text-gray-300 tracking-wide mt-2">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
}

export default Typewriter;