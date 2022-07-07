import "bootstrap/dist/css/bootstrap.css";
import React from 'react';

// Also available from @uifabric/icons (7 and earlier) and @fluentui/font-icons-mdl2 (8+)
import { initializeIcons } from '@fluentui/react/lib/Icons';

import { ButtonDefault } from './components/Buttons.tsx';
import { FormFields } from './components/FormControl.tsx';
import { DetailsListBasic } from "./components/GridControl.tsx";

initializeIcons(/* optional base url */);

function App() {
  return (
    <div>
        <div className='list-group-item'>
          <ButtonDefault/><br/>
          <FormFields/><br/>
          <DetailsListBasic/>
        </div>
    </div>
  );
}

export default App;
