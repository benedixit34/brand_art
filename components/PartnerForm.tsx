export default function PartnerForm() {
  return (
    <>
      <form action="" method="post" className="flex flex-col w-full">
        <input
          type="text"
          name="full_name"
          id=""
          placeholder="Enter Your Full Name"
          className="border-b-1 font-light text-xl pb-4 mb-20 outline-none focus:outline-none focus:ring-0 focus:border-teal-400 
         focus:shadow-[0_3px_0_0_rgba(45,212,191,0.9)]
         transition duration-300"
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter Your Email Address"
          className="border-b-1 font-light text-xl pb-4 mb-20 outline-none focus:outline-none focus:ring-0 focus:border-teal-400 
         focus:shadow-[0_3px_0_0_rgba(45,212,191,0.9)]
         transition duration-300"
        />

     

        <textarea
          id=""
          placeholder="Write Your Message"
          className="border-b-1 font-light text-xl pb-4 mb-20 outline-none focus:outline-none focus:ring-0 focus:border-teal-400 
         focus:shadow-[0_3px_0_0_rgba(45,212,191,0.9)]
         transition duration-300"
        ></textarea>
        <button
          type="submit"
          className="self-start border-1 text-xl px-10 py-4 hover:bg-teal-400 font-medium"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
