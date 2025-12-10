export default function Resume() {
  const viewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1rWx9bBjTYYo8nSgiBPLFLw0-mNWlrAZ6/view?usp=sharing",
      "_blank"
    );
  };

  const downloadResume = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1rWx9bBjTYYo8nSgiBPLFLw0-mNWlrAZ6",
      "_blank"
    );
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
