import { useState } from "react";
import FormSubmit from "../components/formui/form-submit";
import Textarea from "../components/formui/text-area";
import Textinput from "../components/formui/text-input";

export default function Contactform() {
  let [contactinfo, setContactinfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="p-5 xl:max-w-3xl w-full">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Textinput
            type="text"
            title="Your Full Name"
            required={true}
            value={contactinfo.name}
            onChange={(e) => setContactinfo({ ...contactinfo, name: e.target.value })}
          />
          <Textinput
            type="email"
            title="Your Email Address"
            required={true}
            value={contactinfo.email}
            onChange={(e) => setContactinfo({ ...contactinfo, email: e.target.value })}
          />
        </div>
        <Textinput
          type="text"
          title="Your Subject"
          required={true}
          value={contactinfo.subject}
          onChange={(e) => setContactinfo({ ...contactinfo, subject: e.target.value })}
        />
        <Textarea
          type="email"
          title="Your Message"
          required={true}
          value={contactinfo.message}
          onChange={(e) => setContactinfo({ ...contactinfo, message: e.target.value })}
        />
        <FormSubmit />
      </form>
    </div>
  );
}
