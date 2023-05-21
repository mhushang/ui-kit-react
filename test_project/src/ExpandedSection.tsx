import React, {useState} from 'react'

import { Expanded } from '../../src';

const ExpandedSection: React.FC = () => {

  const [isOpened, setActiveIsOpened] = useState(false);
  return(
    <div style={{padding:50,background: '#EAEFF3'}}>
      <Expanded
        isOpen={isOpened}
        label={<span style={{'flexBasis': '33%'}} className="name Expanded-header-bold-when-open">Business courses</span>}
        header={<span style={{display:'flex', alignItems: 'center'}}>
          <span style={{'flexBasis': '33%'}} className="count-of-subcategory">1</span>
          <span style={{'flexBasis': '33%'}} className="count-of-courses"><button onClick={(e) => {e.preventDefault(); setActiveIsOpened(!isOpened) }}>test</button></span>
        </span>}
        content={<div style={{padding: 16}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur, et hic iure laboriosam possimus quas qui. Adipisci beatae cupiditate eligendi odit perspiciatis quidem ratione recusandae repudiandae sequi voluptatum! Sint?</div>}
      />
      <Expanded
        isOpen={true}
        label={<span className="Expanded-header-bold-when-open">This is header 2</span>}
        content={<div style={{padding: "25px 25px 0 25px"}}>
          <Expanded
            header={<span style={{display:'flex', alignItems: 'center'}}>
                    <span style={{'flexBasis': '33%'}} className="name Expanded-header-bold-when-open">Business courses</span>
                    <span style={{'flexBasis': '33%'}} className="count-of-subcategory">1</span>
                    <span style={{'flexBasis': '33%'}} className="count-of-courses">122</span>
                  </span>}
            content={<div style={{padding: 16}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur, et hic iure laboriosam possimus quas qui. Adipisci beatae cupiditate eligendi odit perspiciatis quidem ratione recusandae repudiandae sequi voluptatum! Sint?</div>}
          />
          <br/>
          <br/>
        </div>}
      />
    </div>
  )
};

export default ExpandedSection;