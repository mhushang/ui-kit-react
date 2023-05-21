import { IOptionsTreeItem } from '../components/OptionTree/OptionTreeTypes';

export const getAllChildren = (options: IOptionsTreeItem[], currentId: string) => {
  const children: IOptionsTreeItem[] = [];
  const getChildren = (id: string) => {
    options.forEach((item) => {
      if (item.parent_id === id) {
        children.push(item);
        getChildren(item.id);
      }
    });
  };
  getChildren(currentId);
  return children;
};

export const searchTreeOptions = (options: IOptionsTreeItem[], searchValue: string) => {
  const filteredOptions: IOptionsTreeItem[] = [];

  const addFilteredOptions = (newItem: IOptionsTreeItem) => {
    if (filteredOptions.findIndex((option) => option.id === newItem.id) === -1) {
      filteredOptions.push(newItem);
    }
  };

  const getParent = (id: string): void | null => {
    const parent = options.find((item) => item.id === id);
    if (!parent) return null;
    addFilteredOptions(parent);
    if (parent.parent_id) {
      getParent(parent.parent_id);
    }
  };

  options.forEach((item) => {
    if (String(item.label).toLowerCase().includes(searchValue.toLowerCase())) {
      addFilteredOptions(item);
      if (item.parent_id) getParent(item.parent_id);
      const children = getAllChildren(options, item.id);
      children.forEach((child) => {
        const childItem = options.find((option) => option.id === child.id);
        if (childItem) addFilteredOptions(childItem);
      });
    }
  });

  console.log(filteredOptions);
  return filteredOptions;
};
