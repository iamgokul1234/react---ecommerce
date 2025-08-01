import { AiOutlineSend } from "react-icons/ai";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import styles from "./Contact.module.css";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7b2230c4-dc2b-49ea-8458-c9784da54fce");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log("sending this json: ", json);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent!",
        icon: "success",
      });
      event.target.reset();
    }
  };

  return (
    <section className={styles.contactSection}>
      <h1>Contact us</h1>

      <div className={styles.socialBox}>
        <a href="#">
          <FaPhoneAlt className={styles.icon} /> +91 93457 89315
        </a>
        <a href="#">
          <MdEmail className={styles.icon} /> gokulakrish9345@gmail.com
        </a>
        <a href="#">
          <FaLinkedin className={styles.icon} /> linkedin
        </a>
      </div>

      <form onSubmit={onSubmit} className={styles.contactBox}>
        <p>Full Name</p>
        <input type="text" name="name" placeholder="Your Full Name" />

        <p>Email Address</p>
        <input type="text" name="email" placeholder="Enter your email" />

        <p>Your Message</p>
        <textarea
          className={styles.mess}
          name="message"
          placeholder="Share your thoughts..."
        />

        <button type="submit">
          <AiOutlineSend /> Send Message
        </button>
      </form>
    </section>
  );
}
