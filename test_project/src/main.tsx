import React, {ChangeEvent, useCallback, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { SandClock, Star, User, CheckCircleBold, SortBold } from 'kc-icon-kit-react';

import ExpandedSection from './ExpandedSection';
import {
  Input,
  INPUT_TYPE,
  Popover,
  Modal,
  Button,
  BUTTON_TYPE,
  Toggle,
  Text,
  Loader,
  Tabs,
  Checkbox,
  DropDown,
  Option,
  PLACEMENT_TYPE,
  TRIGGER_TYPE,
  CHECKBOX_VALUE,
  Table,
  IColumnType,
  Pagination,
  Overlay,
  Status,
  DropDownStatus,
  STATUS_COLOR,
  OVERLAY_PLACEMENT_TYPE,
  COLUMN_ALIGN_TYPE,
  ToasterProvider,
  TOASTER_PLACEMENT_TYPE,
  useToaster,
  TOASTER_TYPE,
  TABLE_TYPE,
  Message,
  MESSAGE_TYPE,
  DropDownButton,
} from '../../src/components';
import { useCountdown, useDebounce } from '../../src/hooks';
import { generateUUID } from '../../src/helpers';

import './index.css';

const InputApp: React.FC = () => {
  const [value, setValue] = useState('123456');

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('Fuck OFF!!!');
  };

  const firsIconButton = {
    icon: <User />,
    handleClick: () => {
      console.log('SandClock');
    },
    ariaLabel: 'button',
    disabled: false,
  };

  const secondIconButton = {
    icon: <Star />,
    handleClick: () => {
      console.log('Star');
    },
    ariaLabel: 'button',
    disabled: false,
  };

  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('');

  return (
    <form>
      <div className="SignIn-input-group">
        <Input
          bigLabel="Username"
          ariaLabel="username"
          value={username}
          handleChange={(e) => setUsername(e.target.value)}
          maxLength={20}
        />

        <Input
          type={INPUT_TYPE.password}
          bigLabel="Password"
          nativeProps={{
            autoComplete: 'off',
          }}
          ariaLabel="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          icon={<User />}
        />


        <Input
          bigLabel="Username"
          ariaLabel="username"
          value={username}
          maxLength={30}
          handleChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <Button text="Sign In" ariaLabel="sign in button" />
    </form>
  );
};

const ButtonApp: React.FC = () => {
  return (
    <Button
      ariaLabel="button"
      theme={BUTTON_TYPE.primaryOrange}
      text="Design thinking"
      // error={true}
      // disabled={true}
      loading={true}
      leftIcon={<SandClock />}
    />
  );
};

const MessageApp: React.FC = () => {
  const [open, setOpen] = useState(true);
  return (
   <div style={{margin: 10}}>
      <div style={{width: 350, margin: 15}}>
        <Message 
          type={MESSAGE_TYPE.success} 
          text="Here is an example of a 1000-character article. 
          This is a fairly small text, best suited for product cards in online stores 
          or for small informational publications. 
          There are rarely more than 2-3 paragraphs in such a text and usually one subheading. 
          But you can do without it. For 1000 characters it is recommended to use 1-2 keywords and one picture." />
      </div>
      <div style={{width: 350, margin: 15}}>
        <Message 
          type={MESSAGE_TYPE.error} 
          text="Message error." />
      </div>
      <div style={{width: 350, margin: 15}}>
        <Message 
          type={MESSAGE_TYPE.warning} 
          text="Message warning." />
      </div>
      <div style={{width: 350, margin: 15}}>
        <Message 
          type={MESSAGE_TYPE.info} 
          text="Message info." />
      </div>
      <div style={{width: 350, margin: 15}}>
        <Message 
          isOpen={open} 
          type={MESSAGE_TYPE.success} 
          text={<div style={{display: 'flex'}}>Message success, closable. 
            <Button text="close" ariaLabel="btn" 
            theme={BUTTON_TYPE.link}
            handleClick={() => setOpen(false)} /></div>}/>
      </div>
   </div>
  );
};

const ToggleApp: React.FC = () => {
  const handleChange = (value: boolean) => {
    console.log(value);
  };

  return <Toggle ariaLabel="switch" label="Label" handleChange={handleChange} />;
};

const TextApp: React.FC = () => {
  return (
    <div>
      <Text spacing={10}>Hello World!</Text>
      <Text display underline>
        Hello World!
      </Text>
      <Text display size={33}>
        Hello World!
      </Text>
    </div>
  );
};

const LoaderApp: React.FC = () => (
  <div style={{ width: '50px', margin: '50px' }}>
    <Loader />
  </div>
);

const PopoverApp: React.FC = () => {
  return (
    <div>
      <Popover
      placement={PLACEMENT_TYPE.left}
      referenceNode={
        <div style={{ marginLeft: 500 }}>
          <Button text="Popover" ariaLabel="text" />
        </div>
      }
      wrapperClassName="test-cllassname"
      trigger={TRIGGER_TYPE.click}
    >
      <div style={{ width: 200, height: 200 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea possimus veritatis,
        fugit doloribus reprehenderit tenetur perspiciatis, porro ex id vero ipsum ut. Facilis
        itaque sunt, doloribus officia eius voluptatum?
      </div>
    </Popover>
    <Popover
      placement={PLACEMENT_TYPE.left}
      referenceNode={
        <div style={{ marginLeft: 500 }}>
          <Button text="Popover" ariaLabel="text" />
        </div>
      }
      wrapperClassName="test-cllassname"
      trigger={TRIGGER_TYPE.click}
    >
      <div style={{ width: 200, height: 200 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea possimus veritatis,
        fugit doloribus reprehenderit tenetur perspiciatis, porro ex id vero ipsum ut. Facilis
        itaque sunt, doloribus officia eius voluptatum?
        <Button text="some button" ariaLabel="text" />
      </div>
    </Popover>
    </div>
  );
};

const ModalApp: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button text="Show modal" ariaLabel="sign in button" handleClick={() => setOpen(true)} />
      <Modal isOpen={open} escClose closable onClose={handleClose} width={200} height={300} loading={true}>
        <>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam quod illo quam
            eius, veniam corrupti repellat, cupiditate quae, cumque quia atque. Fugiat, error
            voluptate voluptates dignissimos magni sequi ullam. Natus temporibus accusantium sint
            corrupti! Nam molestiae incidunt dolore sunt facere atque quae totam ex repudiandae
            accusantium, eius explicabo quidem perferendis ducimus reprehenderit rem enim iste
            soluta quas dolorum mollitia. Modi minus quisquam accusamus cum quidem ut beatae. Fugit
            dolorum quidem, tenetur asperiores molestiae quod sapiente pariatur nisi ullam ratione
            ab porro quo voluptates beatae odit sequi. Itaque, vel aspernatur.
          </span>
          <Button
            text="Close"
            ariaLabel="sign in button"
            handleClick={() => setOpen(true)}
            theme={BUTTON_TYPE.primaryOrange}
          />
        </>
      </Modal>
    </div>
  );
};

const TabsApp: React.FC = () => {
  const items = [
    {
      name: 'First tab',
      content: '123',
      key: generateUUID(),
      ariaLabel: 'First tab area label',
    },
    {
      name: 'Event list',
      notificationCount: 5,
      key: generateUUID(),
      ariaLabel: 'Event list area label',
    },
    {
      name: 'Participation requests',
      notificationCount: 100,
      key: generateUUID(),
      onClick: () => {
        alert('testing');
      },
      ariaLabel: 'Participation requests area label',
    },
  ];

  return <Tabs items={items} />;
};

const CheckboxApp: React.FC = () => {
  const [checked, setChecked] = useState<boolean | undefined>(undefined);

  const handleChange = (state: boolean) => {
    console.log('Controlled checkbox state: ', state);
    setChecked(state);
  };

  return (
    <div>
      <Checkbox ariaLabel="checkbox" />
      <br />
      <Checkbox label="With label" ariaLabel="With label" />
      <br />
      <Checkbox value={true} label="Error" ariaLabel="Error" error />
      <br />
      <Checkbox value={CHECKBOX_VALUE.indeterminate} label="Indefinite" ariaLabel="Indefinite" />
      <br />
      <Checkbox value={true} label="Disabled" ariaLabel="Disabled" disabled />
      <br />
      <Checkbox value={checked} onChange={handleChange} label="Controlled" ariaLabel="Controlled" />
    </div>
  );
};

const DropDownTreeApp: React.FC = () => {
  const [values, setValues] = useState<string | string[]>('2');

  interface ICategoryItem {
    id: string;
    value: string;
    key: string;
    parent_id: string | null;
    label: string;
    disabled?: boolean;
  }
  
  const categoryData: ICategoryItem[] =  [
    {
      id: '1', 
      value: '1',
      key: generateUUID(),
      label: 'Option 1',
      parent_id: null,
    },
    {
      id: '2', 
      value: '2',
      key: generateUUID(), 
      label: 'Option 2',
      parent_id: '1',
    },
    {
      id: '3',  
      value: '3',
      key: generateUUID(),
      label: 'Option 3',
      parent_id: '2',
    },
    {
      id: '4',  
      value: '4',
      key: generateUUID(),
      label: 'Option 4',
      parent_id: '1',
    },
    {
      id: '5', 
      value: '5',
      key: generateUUID(),
      label: 'Option 5',
      parent_id: null,
      disabled: true
    },
    {
      id: '6', 
      value: '6',
      key: generateUUID(),
      label: 'Option 6',
      parent_id: '5',
      disabled: true
    },
    {
      id: '7', 
      value: '7',
      key: generateUUID(),
      label: 'Option 7',
      parent_id: '5',
      disabled: true
    },
    {
      id: '8', 
      value: '8',
      key: generateUUID(),
      label: 'Option 8',
      parent_id: '5',
      disabled: true
    },
  ];
  
  const handleChange = useCallback((values: string | string[]) => {

    setValues(values);
  }, []);


  return (
    <div style={{width: 300}}>
      <span>{values}</span>
      <button onClick={() => setValues(['2'])}>change</button>
      <DropDown
      searchIsActive
      showClearSelectedButton
        options={categoryData}
        tree
        ariaLabel="dropdown"
        onChange={handleChange}
        multiple={true}
        value={values}
        placeholder="custom dropdown" />
      <br/>
      <br/>
      <DropDown
        searchIsActive={false}
        showClearSelectedButton
        options={categoryData}
        tree
        ariaLabel="dropdown"
        onChange={handleChange}
        multiple={false}
        value={values}
        placeholder="custom dropdown" />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

const DropDownApp: React.FC = () => {
  const [values, setValues] = useState<string | string[]>('2');
  const [options, setOptions] = useState([
    {
      key: generateUUID(),
      value: '1',
      label: 'Option 1',
    },
    {
      key: generateUUID(),
      value: '2',
      label: 'Option 2',
    },
    {
      key: generateUUID(),
      value: '3',
      label: 'Option 3 Option 3 Option 3 Option 3 Option 3 Option 3 Option 3 Option 3 Option 3 Option 3',
    },
  ])

  const handleChange = useCallback((values) => {

    setValues(values);
  }, []);


  const changeOptions = () => {
    setOptions([
      {
        key: generateUUID(),
        value: '2',
        label: 'Option 1 new ',
      },
    ])
  }

  return (
    <div style={{width: 300}}>
      <button onClick={() => changeOptions()}>Change options</button>
      <button onClick={() => setValues(['2'])}>change</button>
      <DropDown
        showClearSelectedButton={true}
        onClearSelected={() => setValues([])}
        options={options}
        onChange={handleChange}
        value={values}
        ariaLabel={'dropdown'}
        placeholder="custom dropdown" />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

const PaginationApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ padding: 50 }}>
      <Pagination
        currentLimit={20}
        ariaLabel="marketplase table pagination"
        onChange={(page: number, limit: number) => {
          console.log(page);
          setCurrentPage(page);
        }}
        currentPage={currentPage}
        totalItems={250}
      />
    </div>
  );
};

const TableApp: React.FC = () => {
  interface IData extends Record<string, string | string[]> {
    id: string;
    fullName: string;
    role: string;
    tags: string[];
  }

  const [selected, setSelected] = useState<string[]>([]);

  const add = (row: IData) => {
    setSelected([...selected, row.id]);
    setSelectAll(true);
  };

  const remove = (row: IData) => {
    setSelected(selected.filter((el) => el !== row.id));
    if (selected.length < 1) {
      setSelectAll(false);
    }
  };

  const data: IData[] = [
    {
      id: 'sdkvnkdsjvnkdsvnsd',
      fullName: 'Francisco Mendes',
      role: 'Full Stack jhjbsdc sdcnjksdc sdcjnsdjcnksdnc sdcsd',
      tags: ['dev', 'blogger'],
    },
    {
      id: 'sldvmklsdvihuihbisdv',
      fullName: 'Ricardo Malva',
      role: 'Social Media Manager',
      tags: ['designer', 'photographer'],
    },
    {
      id: 'sldkvkds vmmsd8756785v8dsvsd',
      fullName: 'Ricardo Malva',
      role: 'Social Media Manager',
      tags: ['designer', 'photographer'],
    },
    {
      id: 'dslknvlksdnviduhsv8347637348g',
      fullName: 'Ricardo Malva',
      role: 'Social Media Manager',
      tags: ['designer', 'photographer'],
    },
    {
      id: 'skdjvdjkshvids738465374jdbcvkjsd763t273',
      fullName: 'Ricardo Malva',
      role: 'Social Media Manager',
      tags: ['designer', 'photographer'],
    },
    {
      id: '23r23jrb2kjrb2r876548fbdsjbcjd',
      fullName: 'Ricardo Malva',
      role: 'Social Media Manager',
      tags: ['designer', 'photographer'],
    },

    {
      id: 'hdsg65d4c56tdsvhbcsdncjkndss',
      fullName: 'Ricardo Malva',
      role: 'Social Media Manager',
      tags: ['designer', 'photographer'],
    },

    {
      id: '8745784hefdjebcsdkcnsdhc65sd3c45dscds',
      fullName: 'Ricardo Malva',
      role: 'Social Media Manager',
      tags: ['designer', 'photographer'],
    },
  ];

  const [selectALl, setSelectAll] = useState<boolean>(false);

  const toggleSelectAll = () => {
    if (selected.length) {
      setSelected([]);
      setSelectAll(false);
    } else {
      setSelected(data.map((el) => el.id));
      setSelectAll(true);
    }
  };

  const columns: IColumnType<IData>[] = [
    {
      key: 'fullName',
      title: 'Full Name',
      width: 30,
      onSort: (column, order) => console.log('sorting', column, order),
      align: COLUMN_ALIGN_TYPE.start
    },
    {
      key: 'role',
      title: 'Role',
      width: 30,
      onSort: (column, order) => console.log('sorting', column, order),
    },
    {
      key: 'tags',
      title: 'Tags',
      width: 20,
      render: (item) => (
        <div>
          {item.tags[0]}20{item.tags[1]}30
        </div>
      ),
    },
    {
      key: 'tags',
      title: <Toggle value={selectALl} ariaLabel="" handleChange={() => toggleSelectAll()} />,
      width: 20,
      render: (item) => (
        <Toggle
          ariaLabel=""
          value={selected.includes(item.id)}
          handleChange={(val) => (val ? add(item) : remove(item))}
        />
      ),
      align: COLUMN_ALIGN_TYPE.center
    },
  ];

  return (
    <div>
      <Table
        data={data}
        columns={columns}
        notFoundContent="No courses added yet"
        hasSelected={selected.length > 0}
        // scroll={{y: 350, x: 100}}
        // loading={true}
        onChange={(item) => console.log('changed', item)}
        leftSideSelectedNode={`${selected.length} selected`}
        rightSideSelectedNode={
          <Toggle value={selectALl} ariaLabel="" handleChange={() => toggleSelectAll()} />
        }
        type={TABLE_TYPE.minimal}
        // rtl
      />
    </div>
  );
};

const CountdownApp: React.FC = () => {
  const [seconds, setSeconds] = useState(10);

  const { countdown, secondsLeft, isStopped, resetTo } = useCountdown(seconds);

  const handleReset = () => {
    resetTo(seconds);
  }

  return (
    <div>
      <div>
        Countdown: {countdown}
      </div>
      <br />
      <div>
        Seconds left: {secondsLeft}
      </div>
      <br />
      <div>
        Is stopped: {String(isStopped)}
      </div>
      <br />
      <div>
        <input placeholder='Seconds' onChange={(e) => setSeconds(Number(e.target.value))} type="number" />
      </div>
      <br />
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

const OverlayApp: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
   <div>
    <Button text="Show Overlay" ariaLabel='' handleClick={() => setOpen(true)} />
     <Overlay
      isOpen={open}
      width={550}
      footer={<>footer</>}
      placement={OVERLAY_PLACEMENT_TYPE.right}
      closable
      escClose
      onClose={() => setOpen(false)}>
      <h2>Some title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nobis quibusdam ratione consequuntur neque maxime eius
        facilis cupiditate dolor sunt ipsum iste earum quisquam obcaecati,
        laudantium fugiat placeat eos nemo quam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nobis quibusdam ratione consequuntur neque maxime eius
        facilis cupiditate dolor sunt ipsum iste earum quisquam obcaecati,
        laudantium fugiat placeat eos nemo quam.
      </p>
    </Overlay>
   </div>
  )
}

const ToasterApp: React.FC = () => {
  const { toaster, closeToaster } = useToaster()
  const toasterIds = useRef<Record<string, string>>({})
  const handleClick = (type: TOASTER_TYPE.error | TOASTER_TYPE.info | TOASTER_TYPE.success | TOASTER_TYPE.warning) => {
    toaster({
      text: `Here is an example of a 1000-character article. 
      This is a fairly small text, best suited for product cards in 
      online stores or for small informational publications. 
      There are rarely more than 2-3 paragraphs in such a text and usually one subheading. 
      But you can do without it. 
      For 1000 characters it is recommended to use 1-2 keywords and one picture.`,
      type: type,
      autoClose: false
    });
  }

  const closeClosableToaster = (key: string) => {
    console.log('key=',key, 'toasterIds=', toasterIds.current);
    
    if (toasterIds.current[key]) {
      closeToaster(toasterIds.current[key] || '')
      delete toasterIds.current[key]
    }
  }

  const handleShowClosableToaster = () => {
    const key: string = generateUUID()
    const id = toaster({
      text: <div>
        Here is an example of a 1000-character article.
        <Button ariaLabel="btn" theme={BUTTON_TYPE.underline} 
        text="Close" 
        handleClick={() => closeClosableToaster(key)} />
      </div>,
      type: TOASTER_TYPE.success,
      autoClose: false
    });
    toasterIds.current = {...toasterIds.current, [key]: id}
  }

  return (
   <div style={{display: 'flex'}}>
      <div style={{marginRight: 20}}>
        <Button text="Show toaster error" ariaLabel='toaster' handleClick={() => handleClick(TOASTER_TYPE.error)} />
      </div>
      <div style={{marginRight: 20}}>
        <Button text="Show toaster success" ariaLabel='toaster' handleClick={() => handleClick(TOASTER_TYPE.success)} />
      </div>
      <div style={{marginRight: 20}}>
        <Button text="Show toaster info" ariaLabel='toaster' handleClick={() => handleClick(TOASTER_TYPE.info)} />
      </div>
      <div style={{marginRight: 20}}>
        <Button text="Show toaster warning" ariaLabel='toaster' handleClick={() => handleClick(TOASTER_TYPE.warning)} />
      </div>
      <div style={{marginRight: 20}}>
        <Button text="Show closable toaster" 
        ariaLabel='toaster' handleClick={handleShowClosableToaster} />
      </div>
   </div>
  )
}
const StatusApp: React.FC = () => {

  const [dropDownStatus, setDropDownStatus] = useState('1');

  const colorsForStatuses = {
    '1': STATUS_COLOR.gray,
    '2': STATUS_COLOR.blue,
    '3': STATUS_COLOR.green,
    '4': STATUS_COLOR.red,
    '5': STATUS_COLOR.violet,
    '6': STATUS_COLOR.orange,
  };

  const options = Object.keys(colorsForStatuses).map(key => {
    return {value: key, label: colorsForStatuses[key]}
  });

  return(
    <div>
      <Button text={'random change status dropdown'} ariaLabel={''} handleClick={() => {
        setDropDownStatus(String(Math.floor(Math.random() * 7) + 1));
      }} />
      {(Object.keys(STATUS_COLOR) as Array<keyof typeof STATUS_COLOR>).map((color) => {
        return(
          <>
            <div style={{display: 'flex'}}>
              <Status color={color}>
                Text
              </Status>
              <Status color={color} highlightBorder={true}>
                Text status
              </Status>

              <DropDownStatus disabled={false} onChange={(item) => setDropDownStatus(item.value)} color={colorsForStatuses[dropDownStatus]} value={dropDownStatus} options={options} />

              <Status color={color} leftIcon={<CheckCircleBold />} highlightBorder={true}>
                Left icon
              </Status>

              <Status color={color} disabled={true}>
                Text status
              </Status>
            </div>
            <br/>
          </>
        )
      })}
    </div>
  )
};

const DebounceApp: React.FC = () => {
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 3000);

  return (
    <div>
        <input placeholder='Value' onChange={(e) => setValue(e.target.value)} />
        <br />
        <div>
          <strong>Value:</strong> {value}
        </div>
        <div>
          <strong>Debounced value(delay = 3000 ms)</strong>: {debouncedValue}
        </div>
    </div>
  )
}

const DropDownButtonApp: React.FC = () => {
  const options = [
    {
      value: 'new-on-top',
      key: 'new-on-top',
      label: 'New on top',
    },
    {
      value: 'first-added',
      key: 'first-added',
      label: 'First added',
      disabled: true
    },
    {
      value: 'a-z',
      key: 'a-z',
      label: 'A-Z',
    },
    {
      value: 'z-a',
      key: 'z-a',
      label: 'Z-A',
    },
    {
      value: 'runtime-ascending',
      key: 'runtime-ascending',
      label: 'Runtime Ascending',
      disabled: true
    },
    {
      value: 'runtime-descending',
      key: 'runtime-descending',
      label: 'Runtime Descending'
    }
  ];

  return (
    <div>
      <DropDownButton leftIcon={<SortBold />} labelPrefix="Sort by" value="first-added" options={options} />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  ) 
}

// RENDER
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToasterProvider placement={TOASTER_PLACEMENT_TYPE.top}>
      <InputApp />
      <br />
      <ToggleApp />
      <br />
      <TextApp />
      <br />
      <ButtonApp />
      <br />
      <PopoverApp />
      <br />
      <LoaderApp />
      <br />
      <ModalApp />
      <br />
      <TabsApp />
      <br />
      <ExpandedSection />
      <br />
      <CheckboxApp />
      <br />
      <TableApp />
      <br />
      <PaginationApp />
      <br />
      <CountdownApp />
      <br />
      <OverlayApp />
      <br />
      <ToasterApp />
      <br/>
      <StatusApp />
      <br />
      <MessageApp />
      <br />
      <DebounceApp />
      <br />
      <DropDownApp />
      <br />
      <DropDownTreeApp />
      <br />
      <DropDownButtonApp />
    </ToasterProvider>
  </React.StrictMode>,
);