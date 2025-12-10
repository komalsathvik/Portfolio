const Resume = () => {
  return (
    <div className="flex gap-4">
      {/* View Resume Button */}
      <a
        href="/resume-view"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 shadow"
      >
        View Resume
      </a>

      {/* Download Resume Button */}
      <a
        href="/resume-download"
        className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
