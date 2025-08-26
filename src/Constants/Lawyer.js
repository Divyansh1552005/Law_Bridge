// lawyers.js

const lawyers = [
  // Criminal Lawyers
  {
    id: 1,
    name: "Adv. Rohan Sharma",
    specialization: "Criminal Lawyer",
    location: "Delhi High Court",
    experience: "10+ years",
    rating: 4.8,
    fee: 1500,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 2,
    name: "Adv. Sunil Yadav",
    specialization: "Criminal Lawyer",
    location: "Lucknow",
    experience: "8 years",
    rating: 4.6,
    fee: 1000,
    availability: "Next Slot Tomorrow",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 3,
    name: "Adv. Kavita Rao",
    specialization: "Criminal Lawyer",
    location: "Mumbai",
    experience: "12 years",
    rating: 4.9,
    fee: 1800,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 4,
    name: "Adv. Anil Kumar",
    specialization: "Criminal Lawyer",
    location: "Patna",
    experience: "15 years",
    rating: 4.7,
    fee: 2000,
    availability: "Next Slot Tomorrow",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 5,
    name: "Adv. Sneha Desai",
    specialization: "Criminal Lawyer",
    location: "Ahmedabad",
    experience: "9 years",
    rating: 4.5,
    fee: 1200,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },

  // Family & Divorce Lawyers
  {
    id: 6,
    name: "Adv. Priya Verma",
    specialization: "Family & Divorce Lawyer",
    location: "Mumbai",
    experience: "7 years",
    rating: 4.6,
    fee: 1200,
    availability: "Next Slot Tomorrow",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 7,
    name: "Adv. Rajesh Gupta",
    specialization: "Family & Divorce Lawyer",
    location: "Delhi",
    experience: "14 years",
    rating: 4.9,
    fee: 2000,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 8,
    name: "Adv. Aditi Nair",
    specialization: "Family & Divorce Lawyer",
    location: "Chennai",
    experience: "6 years",
    rating: 4.4,
    fee: 1000,
    availability: "Next Slot Tomorrow",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 9,
    name: "Adv. Sanjay Mehta",
    specialization: "Family & Divorce Lawyer",
    location: "Pune",
    experience: "11 years",
    rating: 4.7,
    fee: 1500,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 10,
    name: "Adv. Neetu Sinha",
    specialization: "Family & Divorce Lawyer",
    location: "Kolkata",
    experience: "9 years",
    rating: 4.5,
    fee: 1300,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },

  // Property Lawyers
  {
    id: 11,
    name: "Adv. Arjun Kapoor",
    specialization: "Property Lawyer",
    location: "Bengaluru",
    experience: "12 years",
    rating: 4.9,
    fee: 2000,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 12,
    name: "Adv. Meena Agarwal",
    specialization: "Property Lawyer",
    location: "Delhi",
    experience: "10 years",
    rating: 4.6,
    fee: 1800,
    availability: "Next Slot Tomorrow",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 13,
    name: "Adv. Rakesh Singh",
    specialization: "Property Lawyer",
    location: "Hyderabad",
    experience: "15 years",
    rating: 4.8,
    fee: 2200,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 14,
    name: "Adv. Shruti Malhotra",
    specialization: "Property Lawyer",
    location: "Chandigarh",
    experience: "8 years",
    rating: 4.5,
    fee: 1500,
    availability: "Next Slot Tomorrow",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 15,
    name: "Adv. Mohan Das",
    specialization: "Property Lawyer",
    location: "Jaipur",
    experience: "9 years",
    rating: 4.4,
    fee: 1400,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },

  // Corporate Lawyers
  {
    id: 16,
    name: "Adv. Neha Singh",
    specialization: "Corporate Lawyer",
    location: "Hyderabad",
    experience: "9 years",
    rating: 4.7,
    fee: 1800,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 17,
    name: "Adv. Alok Reddy",
    specialization: "Corporate Lawyer",
    location: "Bengaluru",
    experience: "13 years",
    rating: 4.8,
    fee: 2100,
    availability: "Next Slot Tomorrow",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 18,
    name: "Adv. Shraddha Menon",
    specialization: "Corporate Lawyer",
    location: "Chennai",
    experience: "11 years",
    rating: 4.6,
    fee: 1700,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 19,
    name: "Adv. Varun Bhatia",
    specialization: "Corporate Lawyer",
    location: "Delhi",
    experience: "7 years",
    rating: 4.4,
    fee: 1500,
    availability: "Next Slot Tomorrow",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 20,
    name: "Adv. Pooja Sethi",
    specialization: "Corporate Lawyer",
    location: "Mumbai",
    experience: "10 years",
    rating: 4.5,
    fee: 1600,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },

  // Civil Lawyers
  {
    id: 21,
    name: "Adv. Manish Patel",
    specialization: "Civil Lawyer",
    location: "Ahmedabad",
    experience: "8 years",
    rating: 4.5,
    fee: 1000,
    availability: "Next Slot Tomorrow",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 22,
    name: "Adv. Seema Ghosh",
    specialization: "Civil Lawyer",
    location: "Kolkata",
    experience: "12 years",
    rating: 4.7,
    fee: 1700,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 23,
    name: "Adv. Rohit Malhotra",
    specialization: "Civil Lawyer",
    location: "Delhi",
    experience: "9 years",
    rating: 4.6,
    fee: 1400,
    availability: "Next Slot Tomorrow",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 24,
    name: "Adv. Nisha Chauhan",
    specialization: "Civil Lawyer",
    location: "Lucknow",
    experience: "6 years",
    rating: 4.3,
    fee: 1100,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  },
  {
    id: 25,
    name: "Adv. Vivek Joshi",
    specialization: "Civil Lawyer",
    location: "Jaipur",
    experience: "14 years",
    rating: 4.8,
    fee: 1900,
    availability: "Available Today",
    profilePic: "https://via.placeholder.com/100"
  }
];

export default lawyers;
