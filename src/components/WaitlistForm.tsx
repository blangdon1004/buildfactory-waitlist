import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_key: "de2ea291-7c9d-413f-8cfe-18a2f3dc6f6d",
          from_name: "BuildFactory Waitlist",
          subject: "New Waitlist Signup",
          to: "blangdon@buildfactory.io",
          message: `New signup for BuildFactory waitlist: ${email}`
        })
      });
      if (response.ok) {
        toast.success("Thanks for joining the waitlist!");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
    setLoading(false);
  };
  return <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm gap-2">
      <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required className="glass" />
      <Button type="submit" disabled={loading} className="bg-[#488bfb]">
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>;
};
export default WaitlistForm;