export default function QualityCertification() {
    return (
      <section className="w-full max-w-6xl mx-auto px-4 py-10 md:flex md:items-center md:space-x-8 bg-gray-50 rounded-lg shadow-lg">
        {/* Certificate Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/certificate.jpg" 
            alt="ISO Certificate" 
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-md"
          />
        </div>
        
        {/* Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Quality & Certification</h2>
          <p className="text-sm md:text-base leading-relaxed mb-4">
            At ACC Masterbatch, we specialize in designing and manufacturing premium-quality
            Masterbatches that deliver superior performance, consistency, safety, and value to our customers.
          </p>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            Our mission is to drive growth by producing Masterbatches that meet the highest quality standards
            while remaining affordable and reliable. We are committed to fostering teamwork and innovation
            to continually improve our product quality and maintain customer satisfaction.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Commitment to Quality</h3>
          <p className="text-sm md:text-base leading-relaxed">
            We ensure consistency and reliability in our products by leveraging advanced technology and
            calibrated instrumentation. Our dedicated quality management system complies with all applicable
            standards, emphasizing continual improvement to exceed customer expectations.
          </p>
        </div>
      </section>
    );
  }
  