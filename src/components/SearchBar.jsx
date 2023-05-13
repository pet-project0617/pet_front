import React, { useEffect, useState, useRef} from "react";

const SearchBar = ({}) => {
  let [mounted, setMounted] = useState(false);
  let [keyword, setKeyword] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  const set = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  const getKeyword = () => {
    console.log(keyword);
    return keyword;
  };


  const cndRef = useRef();
  const wrdRef = useRef();

  return (
    <React.Fragment>
      <span className="f_search">
        <input
          type="text"
          name=""
          placeholder=""
          ref={wrdRef}
          onChange={(e) => {
            wrdRef.current.value = e.target.value;
          }}
        />
        <button
          type="button"
          onClick={() => {
            // retrieveList({
            //   // ...searchCondition,
            //   // pageIndex: 1,
            //   // searchCnd: cndRef.current.value,
            //   // searchWrd: wrdRef.current.value,
            // });
          }}
        >
          조회
        </button>
      </span>
    </React.Fragment>
  );
};

export default SearchBar;
