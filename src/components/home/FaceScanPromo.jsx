import React from 'react';
import { Smartphone, Download } from 'lucide-react';

export default function FaceScanPromo() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have you tried Face Scan on the STAR Health App?
            </h2>
            <p className="text-blue-100 mb-6">
              Experience an innovative health assessment powered by AI. Scan your face and get instant health insights.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download App
              </button>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-2xl">
              <div className="w-48 h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white border-4 border-gray-300 mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">QR Code</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <button className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Google Play
                </button>
                <button className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}