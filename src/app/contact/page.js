export const metadata = {
  title: "Contact",
  description: "Contact page with a form to reach out to us.",
};

export default function Contact() {
  return (
    <main className="p-10 text-gray-300">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg leading-relaxed mb-6">
        You can reach us through the form below or by email.
      </p>

      <form className="max-w-md space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded-md"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            rows="4"
            className="w-full border p-2 rounded-md"
            placeholder="Write your message"
          />
        </div>

        <button
          type="submit"
          className="bg-gray-900 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </form>
    </main>
  );
}
