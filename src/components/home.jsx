"use client";

import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      let page = "";
      if (password === "love-peace") {
        page = "vals12";
      } else if (password === "love-sammy") {
        page = "vals14";
      } else {
        setError("Invalid password.");
        setIsLoading(false);
        return;
      }
      navigate("/" + page);
      setIsLoading(false);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <main className="min-h-screen bg-gradient-to-br from-[#faf8f5] via-[#fff9f5] to-[#ffe8e0] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-serif font-light text-[#2a1a1a] mb-3 tracking-tight">
                Moments
              </h1>
              <p className="text-base text-[#6b4a4a] font-light">
                Where stories connect hearts
              </p>
            </div>
            <div className="flex justify-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#d4857a]"></div>
              <div className="w-2 h-2 rounded-full bg-[#c9a58e]"></div>
              <div className="w-2 h-2 rounded-full bg-[#d4857a]"></div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#5a3a3a] mb-3"
              >
                Enter password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="••••••••"
                className="w-full px-5 py-3 rounded-xl bg-white border border-[#e8d8d0] text-[#2a1a1a] placeholder-[#b8a8a0] focus:outline-none focus:ring-2 focus:ring-[#e74c3c] focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 animate-in fade-in">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !password.trim()}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#e74c3c] to-[#c0392b] hover:from-[#c23b1c] hover:to-[#a93222] text-white font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Unlocking...
                </span>
              ) : (
                "Enter"
              )}
            </button>
          </form>

          {/* Footer Text */}
          <p className="text-center text-sm text-[#8a6a6a] mt-8">
            A private space for shared memories
          </p>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center gap-8 opacity-30">
            <svg
              className="w-6 h-6 text-[#d4857a]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-6 h-6 text-[#c9a58e]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-6 h-6 text-[#d4857a]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}
