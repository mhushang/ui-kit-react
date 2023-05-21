import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { DropDown } from '../';
import { generateUUID } from '../../../helpers';

describe('DropDown', () => {
  const onChange = (value: any) => {
    console.log(value);
  };

  const commonOptions = [
    { value: '1', label: 'Option 1', key: generateUUID() },
    { value: '2', label: 'Option 2', key: generateUUID() },
  ];

  it('Render options', async () => {
    const { container } = render(
      <DropDown
        value="1"
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={commonOptions}
      />,
    );
    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('Option').length).toBe(2);
  });

  it('Showing correct count selected items', async () => {
    const { container } = render(
      <DropDown
        value={['2', '3']}
        multiple
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={commonOptions}
      />,
    );

    expect(container.getElementsByClassName('InputTag-selected-item-hided')[0]).toHaveTextContent(
      '+ 2 ...',
    );
  });

  it('Render no data block ', async () => {
    const { container } = render(
      <DropDown
        options={commonOptions}
        value="1"
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);

    fireEvent.change(container.getElementsByClassName('Input-textfield')[1], {
      target: { value: 'test test test test' },
    });
    expect(container.getElementsByClassName('DropDown-no-data').length).toBe(1);
  });

  it('Showing correct disabled state', async () => {
    const { container } = render(
      <DropDown
        value="1"
        disabled={true}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={commonOptions}
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('Option').length).toBe(0);
  });

  it('Showing single buttons ', async () => {
    const { container } = render(
      <DropDown
        value="1"
        multiple={false}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={commonOptions}
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('Option-singlechoice-item').length).toBe(2);
  });

  it('Showing correct placeholder', async () => {
    const placeholder = 'placeholder for drop-down';
    const { container } = render(
      <DropDown
        placeholder={placeholder}
        onChange={onChange}
        ariaLabel="test drop down"
        options={commonOptions}
      />,
    );

    expect(container.getElementsByClassName('Input-textfield')[0].getAttribute('placeholder')).toBe(
      placeholder,
    );
  });

  it('Showing error text', async () => {
    const errorText = 'Some error 123';
    const { getByText } = render(
      <DropDown
        placeholder={'Placeholder'}
        errorText={errorText}
        onChange={onChange}
        ariaLabel="test drop down"
        options={commonOptions}
      />,
    );

    expect(getByText(errorText).innerHTML).toBe(errorText);
  });

  it('Showing loader', async () => {
    const { container } = render(
      <DropDown
        value="1"
        isLoading={true}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={commonOptions}
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('DropDown-loader').length).toBe(1);
  });

  const optionTreeItems = [
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
    },
  ];

  it('Rendering all tree options and show them by default', async () => {
    const { container } = render(
      <DropDown
        value="1"
        isLoading={false}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={optionTreeItems}
        multiple
        tree
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('OptionTree-item-current').length).toBe(5);
  });

  it('Hidding/showing children when click by element', async () => {
    const { container, queryByText } = render(
      <DropDown
        value="1"
        isLoading={false}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={optionTreeItems}
        multiple
        tree
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    fireEvent.click(container.getElementsByClassName('OptionTree-item-current')[1]); //click by Option 2
    expect(queryByText('Option 3')).toBe(null); //option 3 should be hideed after click by option 2
    fireEvent.click(container.getElementsByClassName('OptionTree-item-current')[1]); //again click by Option 2
    expect(queryByText('Option 3')).toBeTruthy(); //option 3 should be showed
    fireEvent.click(container.getElementsByClassName('OptionTree-item-current')[0]); //click click by Option 1

    //all children should be hided
    expect(queryByText('Option 2')).toBe(null);
    expect(queryByText('Option 3')).toBe(null);
    expect(queryByText('Option 4')).toBe(null);
  });

  it('Rendering button if tree with type single choice', async () => {
    const { container } = render(
      <DropDown
        value="1"
        isLoading={false}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={optionTreeItems}
        tree
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('Option-singlechoice-item').length).toBe(5);
  });

  it('Rendering checkboxes if tree with type multiple', async () => {
    const { container } = render(
      <DropDown
        value="1"
        isLoading={false}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={optionTreeItems}
        tree
        multiple
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('Checkbox').length).toBe(5);
  });

  it('Rendering search input if serach is enable', async () => {
    const { container } = render(
      <DropDown
        value="1"
        isLoading={false}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={optionTreeItems}
        tree
        multiple
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('DropDown-option-wrapper-search').length).toBe(1);
  });

  it('Not rendering search input if serach is disable', async () => {
    const { container } = render(
      <DropDown
        value="1"
        isLoading={false}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={optionTreeItems}
        searchIsActive={false}
        tree
        multiple
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('DropDown-option-wrapper-search').length).toBe(0);
  });

  it('Not rendering clear selected button if dont pass flag', async () => {
    const { container } = render(
      <DropDown
        value="1"
        isLoading={false}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={optionTreeItems}
        searchIsActive={false}
        showClearSelectedButton={false}
        tree
        multiple
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('DropDown-clear').length).toBe(0);
  });

  it('Not rendering clear selected button if pass flag, but no selected values', async () => {
    const { container } = render(
      <DropDown
        isLoading={false}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={optionTreeItems}
        searchIsActive={false}
        showClearSelectedButton={false}
        tree
        multiple
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('DropDown-clear').length).toBe(0);
  });

  it('Rendering clear selected button if pass flag and have some selected value', async () => {
    const { container } = render(
      <DropDown
        value="1"
        isLoading={false}
        placeholder="placeholder"
        onChange={onChange}
        ariaLabel="test drop down"
        options={optionTreeItems}
        searchIsActive={false}
        showClearSelectedButton={true}
        tree
        multiple
      />,
    );

    fireEvent.click(container.getElementsByClassName('InputTag')[0]);
    expect(container.getElementsByClassName('DropDown-clear').length).toBe(1);
  });
});
