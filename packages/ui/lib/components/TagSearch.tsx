import React, { useState, useEffect } from 'react';
import { Hex, useLazyQuery } from '@extension/shared';
import { searchAtomsQuery } from '@extension/shared';

interface TagSearchProps {
  onSelected: (selectedTag: any, atomId: Hex) => void;
  atomId: Hex;
}

export const TagSearch: React.FC<TagSearchProps> = ({ onSelected, atomId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [getSearchResults, { loading, data }] = useLazyQuery(searchAtomsQuery);

  useEffect(() => {
    if (data && data.atoms) {
      setSearchResults(data.atoms);
    }
  }, [data]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      getSearchResults({ variables: { label: e.target.value + '%' } });
    } else {
      setSearchResults([]);
    }
  };

  const handleSelect = (tag: any) => {
    onSelected(tag, atomId);
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className="relative ">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="p-1  border border-slate-600 bg-slate-900 rounded-lg text-slate-100 pr-8 focus:border-slate-500 focus:outline-none"
        placeholder="Search tags..."
      />
      {loading && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <svg
            className="animate-spin h-5 w-5 text-slate-100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      {searchResults.length > 0 && (
        <ul className="absolute z-10 w-full bg-slate-900 border border-slate-600  mt-1 max-h-20 overflow-y-auto rounded-lg">
          {searchResults.map(result => (
            <li
              key={result.term_id}
              onClick={() => handleSelect(result)}
              className="p-1 cursor-pointer hover:bg-slate-600 bg-slate-800">
              <div className="flex flex-row items-center space-x-2">
                <img src={result.image} className="w-4 h-4 rounded-full" />
                <span className="text-slate-100">{result.label}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
