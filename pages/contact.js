
export default function Contact() {
  return (
    
    <div className='py-'>
      <main className="h-screen p-10 text-center bg-gray-900">
        <h2 className="text-6xl font-bold text-white py-28">Contact <span className='text-warning'>Me!</span></h2>
        <form className="mt-8 max-w-3xl mx-auto py-22">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-4 rounded-md bg-gray-800 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 rounded-md bg-gray-800 text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 mb-4 rounded-md bg-gray-800 text-white"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-warning"
          >
            Send Message
          </button>
        </form>
      </main>
      
    </div>
  )
}
