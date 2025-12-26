import Button from "../UI/Button";

export default function Hero() {
  return (
    <section className="bg-blue-50 py-16 text-center">
      <h2 className="text-3xl font-bold mb-3">
        Your Health, Our Priority
      </h2>
      <p className="text-gray-600 mb-6">
        Book health checkups & insurance plans easily
      </p>

      <div className="flex justify-center gap-4">
        <Button text="Book Checkup" />
        <Button text="Explore Insurance" variant="secondary" />
      </div>
    </section>
  );
}
