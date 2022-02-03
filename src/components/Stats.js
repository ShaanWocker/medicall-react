import { useState, useEffect } from 'react';
import LiveStatsList from './LiveStatsList';

const Stats = () => {
  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState({});
  const API_URL = 'https://medicall-cases-proxy.herokuapp.com';

  let newCases = {};
  let closedCases = {};

  useEffect(async () => {
    const fetchAndReturnData = async (caseURL) => {
      const res = await fetch(`${API_URL}${caseURL}`);
      const data = await res.json();
      return data;
    };

    newCases.today = await fetchAndReturnData('/new/today');
    newCases.thisweek = await fetchAndReturnData('/new/thisweek');
    newCases.thismonth = await fetchAndReturnData('/new/thismonth');
    newCases.thisyear = await fetchAndReturnData('/new/thisyear');

    closedCases.today = await fetchAndReturnData('/closed/today');
    closedCases.thisweek = await fetchAndReturnData('/closed/thisweek');
    closedCases.thismonth = await fetchAndReturnData('/closed/thismonth');
    closedCases.thisyear = await fetchAndReturnData('/closed/thisyear');

    setCases({
      newCases,
      closedCases,
    });

    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading cases from proxy server ...</h3>
      ) : (
        <LiveStatsList cases={cases} />
      )}
    </div>
  );
};

export default Stats;
