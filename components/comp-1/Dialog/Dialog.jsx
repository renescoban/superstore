"use client";
import users from "./users.json";
import * as Dialog from '@radix-ui/react-dialog'
import { Cross1Icon, Pencil1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import Spinner from "./spinner";



const Dialogs = () => {
const[saving, setSaving]=useState(false);

  let fakeusers = users

  function handleSubmit(event, user) {
    event.preventDefault();
    setSaving(true);

    let data = Object.fromEntries(new FormData(event.currentTarget));
    
    console.log(data);
    console.log(user);
    
    //not working properly
    let saveFlase = setTimeout(setSaving(false), 7000)
    
  }

  return (
    <div className="mx-2 py-10">
      <div className=" max-w-sm space-y-4 rounded-lg bg-gray-200 p-4">
        {fakeusers.map((user) => (
          <div
            className="flex justify-between rounded-lg bg-white px-4 py-4 text-gray-900 shadow"
            key={user.id}
          >
            <div>
              <p>{user.name}</p>
              <p className="text-sm text-gray-500">{user.role}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div>
              <Dialog.Root>
                <Dialog.Trigger>
                  <button className="rounded p-2 hover:bg-gray-200">
                    <Pencil1Icon />
                  </button>
                </Dialog.Trigger>


                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]">
                    <Dialog.Content  
                    className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 z-10 rounded-md shadow w-full max-w-md
                    data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]">

                      <div className="flex justify-between items-center">
                        <Dialog.Title className="text-xl font-semibold">Edit Content</Dialog.Title>
                        <Dialog.Close className="text-gray-500 hover:text-gray-800">
                          <Cross1Icon />
                        </Dialog.Close>
                      </div>
                      <form onSubmit={(e) => handleSubmit(e, user)}>
                        
                        <fieldset disabled={saving} className="group">
                        <div className="mt-8">
                          <UserFields user={user} />
                        </div>

                        <div className="mt-8 space-x-6 text-right">
                          <Dialog.Close className=" bg-green-500rounded px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
                            Cancel
                          </Dialog.Close>
                          <button  className="rounded bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600">
                            <Spinner />
                            <span>Save</span>
                          </button>
                        </div>
                        </fieldset>
                      </form>
                    </Dialog.Content >
                  </Dialog.Overlay  >
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function UserFields({ user }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-gray-900">Name</label>
        <input
          autoFocus
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.name}
          name="name"
        />
      </div>

      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Role
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.role}
          name="role"
        />
      </div>
      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.email}
          name="email"
        />
      </div>
    </div>
  );
}

function DialoForm(){
  return({
    
  })
}


export default Dialogs



// {
//   {
//     "id": "8",
//     "name": "Sophia Thompson",
//     "role": "Financial Analyst",
//     "email": "sophia.thompson@example.com"
//   },
//   {
//     "id": "9",
//     "name": "James Garcia",
//     "role": "Operations Manager",
//     "email": "james.garcia@example.com"
//   },
//   {
//     "id": "10",
//     "name": "Isabella Robinson",
//     "role": "Content Writer",
//     "email": "isabella.robinson@example.com"
//   },
//   {
//     "id": "11",
//     "name": "Matthew Hernandez",
//     "role": "Software Developer",
//     "email": "matthew.hernandez@example.com"
//   },
//   {
//     "id": "12",
//     "name": "Ava Martinez",
//     "role": "UX Designer",
//     "email": "ava.martinez@example.com"
//   },
//   {
//     "id": "13",
//     "name": "Ethan Brown",
//     "role": "IT Administrator",
//     "email": "ethan.brown@example.com"
//   },
//   {
//     "id": "14",
//     "name": "Emma Davis",
//     "role": "Project Manager",
//     "email": "emma.davis@example.com"
//   },
//   {
//     "id": "15",
//     "name": "Alexander Johnson",
//     "role": "Business Analyst",
//     "email": "alexander.johnson@example.com"
//   },
//   {
//     "id": "16",
//     "name": "Mia Wilson",
//     "role": "Customer Support",
//     "email": "mia.wilson@example.com"
//   },
//   {
//     "id": "17",
//     "name": "Noah Thomas",
//     "role": "Data Scientist",
//     "email": "noah.thomas@example.com"
//   },
//   {
//     "id": "18",
//     "name": "Charlotte Taylor",
//     "role": "Marketing Manager",
//     "email": "charlotte.taylor@example.com"
//   },
//   {
//     "id": "19",
//     "name": "Liam Anderson",
//     "role": "Sales Manager",
//     "email": "liam.anderson@example.com"
//   },
//   {
//     "id": "20",
//     "name": "Chloe Clark",
//     "role": "Social Media Manager",
//     "email": "chloe.clark@example.com"
//   }
// }