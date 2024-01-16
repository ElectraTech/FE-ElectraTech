import "@/styles/dashboard.css";
import "@/styles/contact.css";
import Menu from "@/components/menu";
import Image from "next/image";

export default function Recommend() {
  return (
    <>
      <div id="dashboard">
        <Menu />
        <div className="dashboard__function">
          <div className="contact__container">
            <form id="user-form">
              <Image
                width={64}
                height={64}
                src="/Pngtree.png"
                alt="Chat Icon"
              />
              <h1>ELECTRATECH</h1>
              <label htmlFor="name">Name:</label>
              <br />
              <input type="text" id="name" name="name" />
              <br />

              <label htmlFor="email">Email:</label>
              <br />
              <input type="text" id="email" name="email" />
              <br />

              <label htmlFor="message">Message:</label>
              <br />
              <textarea id="message" name="message"></textarea>
              <br />
              <button>Submit</button>
            </form>
            <Image
              width={280}
              height={280}
              src="/contact.png"
              alt="Chat Icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}
