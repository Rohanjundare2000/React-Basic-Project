
import ChevronDown from "@/components/icons/ChevronDown";
import ChevronUp from "@/components/icons/ChevronUp";
import Plus from "@/components/icons/Plus";
import Trash from "@/components/icons/Trash";
import { useState } from "react";

export default function MenuItemPriceProps({
  name,
  addLabel,
  props,
  setProps,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function addProp() {
    setProps((oldProps) => [...oldProps, { name: "", price: 0 }]);
  }

  function editProp(ev, index, prop) {
    const newValue = ev.target.value;
    setProps((prevProps) => {
      const newProps = [...prevProps];
      newProps[index][prop] = newValue;
      return newProps;
    });
  }

  function removeProp(indexToRemove) {
    setProps((prevProps) =>
      prevProps.filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <div className="bg-gray-200 p-2 rounded-md mb-2">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex p-1 border-0 justify-start"
        type="button"
      >
        {isOpen ? <ChevronUp /> : <ChevronDown />}
        <span>{name}</span>
        <span> ({props?.length})</span>
      </button>
      <div className={isOpen ? "block" : "hidden"}>
        {props?.map((prop, index) => (
          <div key={index} className="flex items-end gap-2 mb-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Size name"
                value={prop.name}
                onChange={(ev) => editProp(ev, index, "name")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Extra price
              </label>
              <input
                type="number"
                placeholder="Extra price"
                value={prop.price}
                onChange={(ev) => editProp(ev, index, "price")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => removeProp(index)}
                className="mt-6 bg-white p-2 rounded-md shadow-sm border border-gray-300 hover:bg-gray-50"
              >
                <Trash />
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addProp}
          className="mt-4 flex items-center bg-white px-3 py-2 rounded-md shadow-sm border border-gray-300 hover:bg-gray-50"
        >
          <Plus className="w-4 h-4" />
          <span className="ml-2">{addLabel}</span>
        </button>
      </div>
    </div>
  );
}

