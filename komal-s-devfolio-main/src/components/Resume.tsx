const Resume = () => {
  const downloadResume = () => {
    const url =
      "https://drive.google.com/uc?export=download&id=1rWx9bBjTYYo8nSgiBPLFLw0-mNWlrAZ6";

    const a = document.createElement("a");
    a.href = url;
    a.download = "Komal_Sathvik_Resume.pdf";

    // Attempting a direct click on the <a> tag
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button
      onClick={downloadResume}
      className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow"
    >
      Download Resume
    </button>
  );
};

export default Resume;
