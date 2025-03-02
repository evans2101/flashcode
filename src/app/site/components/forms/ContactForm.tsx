"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
      <input {...register("name")} placeholder="Name" className="w-full p-2 border rounded" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input {...register("email")} placeholder="Email" className="w-full p-2 border rounded" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <textarea {...register("message")} placeholder="Message" className="w-full p-2 border rounded"></textarea>
      {errors.message && <p className="text-red-500">{errors.message.message}</p>}

      <button type="submit" className="p-2 bg-blue-600 text-white rounded">Submit</button>
    </form>
  );
}
