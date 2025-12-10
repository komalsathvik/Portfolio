const Resume = () => {
  const downloadResume = () => {
    // 💡 NEW URL: The path is relative to your website's domain root (e.g., /Komal_Sathvik_Resume.pdf)
    const url = "/resume.pdf";

    // The logic to force the download remains the same and is correct
    const a = document.createElement("a");
    a.href = url;
    a.download = "Komal_Sathvik_Resume.pdf";
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
