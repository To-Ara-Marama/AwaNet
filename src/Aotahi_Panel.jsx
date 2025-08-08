import React, { useState } from "react";
import callApi from "../utils/callApi";

export default function AotahiPanel() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    const res = await callApi("/search", "POST", { query });
    setResults(res);
  };

  return (
    <div className="p-4 rounded-xl bg-black bg-opacity-30 text-white shadow-xl">
      <h2 className="text-2xl font-bold mb-2">🔎 Aotahi Terminal</h2>
      <input
        className="p-2 rounded w-full text-black mb-4"
        placeholder="Search whakapapa or historical data..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        onClick={handleSearch}
      >
        Search
      </button>

      {results && (
        <pre className="mt-4 text-green-200 bg-gray-800 p-2 rounded overflow-x-scroll max-h-96">
          {JSON.stringify(results, null, 2)}
        </pre>
      )}
    </div>
  );
}
import callApi from "../utils/callApi";
