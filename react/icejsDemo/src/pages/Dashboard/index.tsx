import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import Guide from './components/Guide';

const { Cell } = ResponsiveGrid;

const Dashboard = () => {
  React.useEffect(()=>{
  console.log(document.referrer,1111)

})
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <Guide />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;
