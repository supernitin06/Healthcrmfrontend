import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Login</h2>

        <Input label="Email" type="email" />
        <Input label="Password" type="password" />

        <Button text="Login" className="w-full mt-2" />
      </div>
    </div>
  );
}
