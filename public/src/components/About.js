import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">                                                          
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Smart Gov</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionizing government services through innovative digital solutions
            </p>
          </div>

          {/* Mission Section */}
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg mb-4">
                  To transform the way citizens interact with government services by providing 
                  a secure, efficient, and accessible digital platform that simplifies public 
                  service delivery.
                </p>
                <p className="text-gray-700 text-lg">
                  We believe in leveraging technology to create a more transparent, 
                  responsive, and citizen-centric government ecosystem.
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-2">50K+</div>
                  <div className="text-lg">Active Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Smart Gov?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Platform</h3>
                <p className="text-gray-600">
                  Bank-level encryption and security protocols to protect your data and transactions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Processing</h3>
                <p className="text-gray-600">
                  Reduce processing times from days to minutes with our streamlined digital workflows.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accessible Anywhere</h3>
                <p className="text-gray-600">
                  24/7 access to government services from any device, anywhere in the country.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">John Smith</h3>
                <p className="text-blue-600 mb-2">Chief Executive Officer</p>
                <p className="text-gray-600">Former Director of Digital Transformation</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👩‍💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                <p className="text-blue-600 mb-2">Chief Technology Officer</p>
                <p className="text-gray-600">15+ years in government technology</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
                <p className="text-blue-600 mb-2">Head of Product</p>
                <p className="text-gray-600">Specialized in citizen experience design</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span>1</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2021 - Foundation</h3>
                  <p className="text-gray-600">Started with a vision to digitize government services</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span>2</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2022 - Pilot Launch</h3>
                  <p className="text-gray-600">Successfully launched in 3 major cities with 10,000+ users</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span>3</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2023 - National Expansion</h3>
                  <p className="text-gray-600">Expanded to 50+ cities with 50,000+ active users</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span>4</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2024 - Future Vision</h3>
                  <p className="text-gray-600">Aiming to cover 100% of government services nationwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 inline-block mr-4"
            >
              Contact Us
            </Link>
            <Link 
              to="/" 
              className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}