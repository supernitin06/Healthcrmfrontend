import Card from "../UI/Card";

export default function Services() {
  const services = [
    "Health Checkups",
    "Insurance Plans",
    "24/7 Support",
  ];

  return (
    <section className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
      {services.map((item) => (
        <Card key={item}>
          <h3 className="font-semibold mb-2">{item}</h3>
          <p className="text-sm text-gray-600">
            Easy and secure service for users
          </p>
        </Card>
      ))}
    </section>
  );
}
