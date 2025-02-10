import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-10"
    >
      <main className="h-screen p-10 text-center bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg font-bold text-white"
        >
          Contact <span className="text-warning">Me!</span>
        </motion.h2>

        <motion.form
          className="mt-8 max-w-3xl mx-auto py-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-4 rounded-md bg-gray-800 text-white"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 rounded-md bg-gray-800 text-white"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.textarea
            placeholder="Your Message"
            className="w-full p-4 mb-4 rounded-md bg-gray-800 text-white"
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="px-4 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-warning"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </main>
    </motion.div>
  );
}
