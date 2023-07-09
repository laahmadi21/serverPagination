import { useEffect, useState } from "react";

import Card from "./components/card";
import useFetch from "./useFetch";
import Pagination from "./components/pagination";

const url = "https://react-mini-projects-api.classbon.com/Programmer/sieve";
const pageSize = 6;

function App() {
  const [page, setPage] = useState(1);
  const [loading, programmers] = useFetch(url, { page, pageSize });

  return (
    <div className="container pt-5">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border"></div>
        </div>
      )}
      {!loading && (
        <>
          <div className="row d-flex justify-content-center ">
            {programmers.data.map(({ id, ...item }) => {
              return (
                <div className="col-4" key={id}>
                  <Card {...item} />
                </div>
              );
            })}
          </div>
          <div className="row">
            <Pagination
              pages={Math.ceil(programmers.totalRecords / pageSize)}
              activePage={page}
              setPage={setPage}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;


