import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white" style={{ padding: "2.4rem" }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">EventMaster</h2>
          <p>
            Manage all your events in one place with EventMaster. Plan,
            organize, and execute events seamlessly.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Legal</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Newsletter</h2>
          <p>
            Sign up for our newsletter to stay updated on the latest events and
            offers.
          </p>
          <div>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 mb-2 text-gray-800 rounded"
              />
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p>&copy; 2024 EventMaster. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
