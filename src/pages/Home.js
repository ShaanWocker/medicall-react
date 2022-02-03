import React from 'react';
import FindOutHeading from '../components/FindOutHeading';
import MediCallHeading from '../components/MediCallHeading';
import TwoColumnHeading from '../components/TwoColumnHeading';
import GridBlock from '../components/GridBlock';
import LiveStatsList from '../components/LiveStatsList';
import Stats from '../components/Stats';

function Home() {
  return (
    <div>
      <FindOutHeading />

      <MediCallHeading />

      <TwoColumnHeading />
      <GridBlock />
      <LiveStatsList />
      <Stats />
    </div>
  );
}

export default Home;
