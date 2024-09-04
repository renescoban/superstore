"use client";
import { useState } from "react";
import { saveNote } from "@utils/actions/notes";

export default function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async () => {
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      if (title.trim().length > 0 && content.trim().length > 0) {
        await saveNote(title, content);
        setMessage({ type: "success", text: "Note saved successfully!" });
        setTitle(""); // Clear fields on success
        setContent(""); // Clear fields on success
      }
    } catch (error) {
      setMessage({ type: "error", text: `Error: ${error.message}` });
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage({ type: "", text: "" }), 5000); // Hide message after 5 seconds
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Create a New Note</h1>
      <div className="space-y-4">
        <input
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          id="title"
          placeholder="Enter title"
        />
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          rows={6}
          onChange={(e) => setContent(e.target.value)}
          value={content}
          id="content"
          placeholder="Enter content"
        />
        <button
          onClick={handleSubmit}
          className={`w-full p-3 text-white rounded-lg transition duration-300 ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
      {message.text && (
        <p
          className={`mt-4 text-sm font-medium ${
            message.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}
