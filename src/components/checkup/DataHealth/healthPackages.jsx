// import React, { useState } from 'react';
// import { Calendar, MapPin, Users, Check, X, ChevronDown, Filter, Search, Award, Clock, Home } from 'lucide-react';
// import Button from '../UI/Button';
// import Input from '../UI/Input';

// ============================================
// FILE: data/healthPackages.js
// ============================================
export const healthPackages = [
  {
    id: 1,
    name: "Basic Health Checkup",
    price: 999,
    originalPrice: 1499,
    discount: 33,
    tests: 45,
    recommended: "Adults 18-40 years",
    popular: false,
    description: "Essential screening for general health monitoring",
    testList: [
      "Complete Blood Count (CBC)",
      "Lipid Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "Blood Sugar (Fasting)",
      "Thyroid Profile (T3, T4, TSH)",
      "Urine Routine",
      "Vitamin D",
      "Vitamin B12"
    ],
    categories: ["Blood Tests", "Urine Tests", "Vitamin Tests"]
  },
  {
    id: 2,
    name: "Comprehensive Full Body Checkup",
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    tests: 98,
    recommended: "Adults 40+ years",
    popular: true,
    description: "Complete health assessment with advanced parameters",
    testList: [
      "Complete Blood Count (CBC)",
      "Complete Lipid Profile",
      "Liver Function Test (12 parameters)",
      "Kidney Function Test (10 parameters)",
      "Diabetes Screening (HbA1c, Fasting, PP)",
      "Thyroid Profile Complete",
      "Iron Studies",
      "Vitamin D & B12",
      "Cardiac Risk Markers",
      "Urine Complete Analysis",
      "ECG",
      "X-Ray Chest"
    ],
    categories: ["Blood Tests", "Urine Tests", "Cardiac Tests", "Imaging"]
  },
  {
    id: 3,
    name: "Senior Citizen Health Package",
    price: 3499,
    originalPrice: 5499,
    discount: 36,
    tests: 110,
    recommended: "60+ years",
    popular: false,
    description: "Specialized checkup for senior health monitoring",
    testList: [
      "Complete Blood Count",
      "Advanced Lipid Profile",
      "Liver & Kidney Function",
      "Diabetes Complete Panel",
      "Thyroid Complete",
      "Arthritis Screening",
      "Cancer Markers (Basic)",
      "Cardiac Risk Assessment",
      "Bone Health (Calcium, Vitamin D)",
      "ECG & Echo",
      "X-Ray (Chest & KUB)"
    ],
    categories: ["Blood Tests", "Cardiac Tests", "Bone Health", "Cancer Screening"]
  },
  {
    id: 4,
    name: "Women's Wellness Package",
    price: 2999,
    originalPrice: 4499,
    discount: 33,
    tests: 85,
    recommended: "Women 25-50 years",
    popular: true,
    description: "Comprehensive health checkup designed for women",
    testList: [
      "Complete Blood Count",
      "Thyroid Profile",
      "Iron Studies & Anemia Panel",
      "Hormone Profile (FSH, LH, Prolactin)",
      "Vitamin D & B12",
      "Calcium & Bone Health",
      "Diabetes Screening",
      "Lipid Profile",
      "PCOS Screening",
      "Breast Cancer Markers",
      "Pap Smear",
      "Mammography (Above 40)"
    ],
    categories: ["Hormonal Tests", "Women's Health", "Cancer Screening"]
  },
  {
    id: 5,
    name: "Diabetes Management Package",
    price: 1499,
    originalPrice: 2199,
    discount: 32,
    tests: 55,
    recommended: "Diabetic patients",
    popular: false,
    description: "Complete diabetes monitoring and complication screening",
    testList: [
      "HbA1c (3-month average)",
      "Fasting Blood Sugar",
      "Post Prandial Blood Sugar",
      "Lipid Profile Complete",
      "Kidney Function (Microalbumin)",
      "Liver Function",
      "Thyroid Profile",
      "Complete Blood Count",
      "Urine Microalbumin",
      "Diabetic Foot Assessment"
    ],
    categories: ["Diabetes Tests", "Kidney Tests", "Cardiac Risk"]
  },
  {
    id: 6,
    name: "Cardiac Health Checkup",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    tests: 65,
    recommended: "High cardiac risk",
    popular: false,
    description: "Advanced cardiac screening and risk assessment",
    testList: [
      "Lipid Profile Advanced",
      "Cardiac Enzymes (Troponin, CK-MB)",
      "hs-CRP (Inflammation marker)",
      "Homocysteine",
      "Apolipoprotein A & B",
      "ECG (12 Lead)",
      "2D Echo with Doppler",
      "TMT (Treadmill Test)",
      "Chest X-Ray",
      "Complete Blood Count"
    ],
    categories: ["Cardiac Tests", "Blood Tests", "Imaging"]
  }
];