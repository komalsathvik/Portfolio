export default function Resume() {
  const viewResume = () => window.open("/resume.pdf", "_blank");

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Komal_Sathvik_Resume.pdf";
    link.click();
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={viewResume}
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
      >
        View Resume
      </button>

      <button
        onClick={downloadResume}
        className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
      >
        Download Resume
      </button>
    </div>
  );
}
