const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Sathvik_Resume1.pdf";
    link.download = "Komal_Sathvik_Resume.pdf";
    link.click();
  };

  return (
    <button
      onClick={downloadResume}
      className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300"
    >
      Download Resume
    </button>
  );
};

export default Resume;
