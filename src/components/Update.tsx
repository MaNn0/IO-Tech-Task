"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import EditBtn from "./EditBtn";
interface Company {
  catchPhrase: string;

}
interface Item {
  id: number;
  name: string;
  company: Company
}

interface UpdateProps {
  item: Item;
  onUpdate: (updatedItem: Item) => void;
}

export default function Update({ item, onUpdate }: UpdateProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(item.name);
  const [catchPhrase, setCatchPhrase] = useState(item.company.catchPhrase);

  const handleSubmit = async () => {
    const updatedItem: Item = {
      ...item,
      name: name,
      company: {
        catchPhrase: catchPhrase,
      },
    };
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${item.id}`,
        { method: 'PATCH' }
      )
      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      const data = await response.json();
      // console.log('Updated item:', data);

      alert('Item Updated Successfully');
      onUpdate(updatedItem)
      setOpen(false)

    } catch (error) {
      console.error('Error updating item:', error)
      alert('Faild to update item')
    }

  };

  return (
    <>
      <div
        onClick={() => setOpen(true)}
      >
        <EditBtn />
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Edit An Item
                    </DialogTitle>
                    <div className="mt-2">
                      <div className=" rounded-md  border-2 border-solid">
                        <input
                          id="id"
                          name="id"
                          type="text"
                          disabled
                          value={`ID #${item.id}`}
                          className="block w-full min-w-0 grow py-1.5 px-4 text-base text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6 bg-gray-200"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className=" rounded-md bg-white border-2 border-solid">
                        <input
                          id="title"
                          name="title"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Title"
                          className="block w-full min-w-0 grow py-1.5 px-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 "
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="rounded-md bg-white border-2 border-solid">
                        <textarea
                          id="description"
                          name="description"
                          placeholder="Description"
                          value={catchPhrase}
                          onChange={(e) => setCatchPhrase(e.target.value)}
                          rows={4}
                          className="block w-full min-w-0 grow py-1.5 px-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex w-full justify-center rounded-md bg-[#66668d] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#9e9ebd] sm:ml-3 sm:w-auto"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
