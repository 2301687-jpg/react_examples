import { useState, useTransition } from 'react';

function SearchBar() {
  const [text, setText] = useState('');
  const [results, setResults] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    startTransition(() => {
      setResults(e.target.value);
    });
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <p>Search results for: {results}</p>
      )}
    </div>
  );
}

