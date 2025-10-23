export const metadata = {
  title: "About",
  description: "About page describing the purpose of the site.",
};

export default function About() {
  return (
    <main className="p-10 text-gray-100">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-lg leading-relaxed">
        This is the About page. It explains what the site does and why it
        exists. Everything here is static and rendered at build time.
      </p>
    </main>
  );
}
