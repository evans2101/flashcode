"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";

const ContactSchema = z.object({
  name: z.string().min(3, "Nama harus memiliki setidaknya 3 karakter"),
  email: z.string().email("Email tidak valid"),
  message: z.string().min(10, "Pesan harus memiliki setidaknya 10 karakter"),
});

type ContactFormData = z.infer<typeof ContactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted", data);
  };

  return (
    <section className="py-16 md:py-20 px-4 text-center w-full text-white">
      <h2 className="text-2xl md:text-3xl font-bold">Hubungi Kami</h2>
      <p className="text-gray-400 mt-2 text-sm md:text-base">
        Apabila ada pertanyaan silahkan hubungi kami
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 max-w-lg mx-auto space-y-4"
      >
        <div className="text-left">
          <label className="block mb-1 text-sm font-medium">Nama</label>
          <input
            {...register("name")}
            className="w-full p-3 bg-gray-900 text-gray-300 rounded-lg outline-none text-sm md:text-base"
            placeholder="Masukkan nama"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="text-left">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            {...register("email")}
            className="w-full p-3 bg-gray-900 text-gray-300 rounded-lg outline-none text-sm md:text-base"
            placeholder="Masukkan email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="text-left">
          <label className="block mb-1 text-sm font-medium">Pesan</label>
          <textarea
            {...register("message")}
            className="w-full p-3 bg-gray-900 text-gray-300 rounded-lg outline-none h-28 md:h-32 resize-none text-sm md:text-base"
            placeholder="Masukkan pesan"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-4 bg-white text-black font-light rounded-4xl flex items-center justify-center gap-2 transition hover:opacity-80 text-sm md:text-base"
        >
          Kirim <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
};

export default Contact;
