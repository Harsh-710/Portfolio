import React, {useRef} from 'react'
import './contact.css'
import { MdMail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ai7fgbg",
      "template_gbrx423",
      form.current,
      "ujNJXdLak7RVT7jrx"
    );
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>harshchhachhia008@gmail.com</h5>
            <a href="mailto:harshchhachhia008@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9501804276</h5>
            <a
              href="https://api.whatsapp.com/send?text= &phone=+919501804276"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact