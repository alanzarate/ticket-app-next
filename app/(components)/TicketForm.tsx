"use client";

import { useRouter } from "next/navigation"
import React, { useState } from "react";
import { ITicket } from "@/app/(models)/Ticket";

const TicketForm = () => {
  const router = useRouter();
  const listOfOptionCategory: string[] = [
    "Hardware Problem",
    "Software Problem",
    "Situational Problem",
  ];

  const statusList: string[] = ["open", "closed", "pending"];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    console.log("Submitted");
    console.log(formData);

    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({formData}),
      headers: { "Content-Type": "application/json" }, 
    })
    if(! res.ok){
      throw new Error("Failed to create Ticket")
    }

    router.refresh()
    router.push("/")

  };

  const startingTicketData: ITicket = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "open",
    category: "Hardware Problem",
    active: false,
  };
  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          id="category"
        >
          {listOfOptionCategory.map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>
        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label className="mr-3">1</label>

          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label className="mr-3">2</label>

          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label className="mr-3">3</label>

          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label className="mr-3">4</label>

          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
        
          id="progress"
          name="progress"
          type="range"
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        />
        <label>Status</label> 
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          id="status"
        >
          {statusList.map((stat, index) => (
            <option value={stat} key={index}>
              {stat}
            </option>
          ))}
        </select>


        <input type="submit" className="btn max-w-xs" value={"Create Ticket"}/>
      </form>
    </div>
  );
};

export default TicketForm;
