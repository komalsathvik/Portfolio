import ResumePDF from "../assets/resume.pdf";

const Resume = () => {
  const downloadResume = () => {
    const url = ResumePDF;

    // The logic to force the download is correct:
    const a = document.createElement("a");
    a.href = url;
    a.download = "Komal_Sathvik_Resume.pdf"; // This sets the name the user sees
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
