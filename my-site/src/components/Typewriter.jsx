import { useEffect, useState } from "react";

function Typewriter({ onComplete }) {
    const text = "hey! i'm vivian";

    const [charIndex, setCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        // Type the text
        if (charIndex < text.length) {
            const timeout = setTimeout(() => {
                setCharIndex((prev) => prev + 1);
            }, 80);

            return () => clearTimeout(timeout);
        }

        // Wait 2 seconds, then show bottom text
        const fadeInTimeout = setTimeout(() => {
            onComplete();

            // Keep cursor flashing for another 2 seconds
            const cursorTimeout = setTimeout(() => {
                setShowCursor(false);
            }, 3000);

            return () => clearTimeout(cursorTimeout);
        }, 1000);

        return () => clearTimeout(fadeInTimeout);
    }, [charIndex, onComplete]);

    const typedText = text.substring(0, charIndex);

    const prefix = "hey! i'm ";
    const typedPrefix = typedText.substring(0, prefix.length);
    const typedVivian = typedText.substring(prefix.length);

    return (
        <h1 className="text-4xl">
            <span>{typedPrefix}</span>
            <span className="mynerve">{typedVivian}</span>

            {showCursor && (
                <span className="typewriter-cursor">|</span>
            )}
        </h1>
    );
}

export default Typewriter;
