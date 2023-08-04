import React, { useRef, useEffect } from 'react';


const TableauEmbed = () => { 
const tableauVizRef = useRef(null);
  
  useEffect(() => {
    const vizUrl = 'https://public.tableau.com/views/Ecommerce_16903126952780/MarketingPerformanceDashboard';
    const options = {
      hideTabs: true,
      hideToolbar: true,
      width: '100%',
      height: '800px',
    };

    new window.tableau.Viz(tableauVizRef.current, vizUrl, options);

  }, []);
    
 
    return (<div ref={tableauVizRef}/>
           );
}

export default TableauEmbed;
