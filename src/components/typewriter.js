import React from "react";

export default function TypeWriter() {
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(50000);

  const messages = [
    "a Competitive Coder",
    "a Fullstack Developer",
    "a Learner",
  ];

  React.useEffect(() => {
    const handle = setTimeout(() => {
      loopText();
    }, 50);
    return () => clearTimeout(handle);
  }, [text, isDeleting]);

  function loopText() {
    let i = loopNum % messages.length;
    let fullText = messages[i];

    setText((prev) => {
      if (isDeleting) {
        return prev.substring(0, prev.length - 1);
      } else {
        return prev + fullText.charAt(prev.length);
      }
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => {
        setIsDeleting(true);
      }, 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }

    setTypingSpeed((prev) => {
      if (isDeleting) {
        return prev / 2;
      } else {
        return prev * 2;
      }
    });
  }

  return (
    <h4 className="text-center">
      I am <span className="type-text">{text}</span>
      <span className="cursor" />
    </h4>
  );
}
