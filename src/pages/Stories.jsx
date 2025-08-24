import React from "react";
import { Calendar, MapPin, User } from "lucide-react";

const Stories = () => {
  const stories = [
    {
      id: "1",
      title: "Suspicious Activity at Polling Booth in Rural Maharashtra",
      location: "Ahmednagar, Maharashtra",
      date: "2024-10-15",
      excerpt:
        "I witnessed several irregularities during the assembly elections including voter intimidation and suspicious movements around EVMs...",
      author: "Anonymous Citizen",
      category: "Voter Intimidation",
    },
    {
      id: "2",
      title: "EVM Malfunction Reported in Urban Bangalore",
      location: "Bangalore, Karnataka",
      date: "2024-09-22",
      excerpt:
        "Multiple voters complained that their votes were being registered for different candidates than intended...",
      author: "Concerned Voter",
      category: "EVM Issues",
    },
    {
      id: "3",
      title: "Bogus Voting Incident in The West Bengal",
      location: "Hooghly, West Bengal",
      date: "2024-08-18",
      excerpt:
        "Witnessed individuals voting multiple times using different voter IDs at the same polling station with fake id...",
      author: "Local Observer",
      category: "Bogus Voting",
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Voter Intimidation":
        return "bg-red-100 text-red-800";
      case "EVM Issues":
        return "bg-orange-100 text-orange-800";
      case "Bogus Voting":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Citizens' Stories</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <span
                className={`px-3 py-1 text-sm rounded-full ${getCategoryColor(
                  story.category
                )}`}
              >
                {story.category}
              </span>

              <h3 className="mt-3 text-lg font-semibold">{story.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{story.excerpt}</p>

              <div className="mt-4 space-y-1 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {story.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />{" "}
                  {new Date(story.date).toLocaleDateString("en-IN")}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" /> {story.author}
                </div>
              </div>

              <button className="mt-4 text-orange-600 font-medium hover:underline">
                Read Full Story →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-3">Have a story to share?</p>
          <a
            href="/submit-story"
            className="bg-orange-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-orange-700"
          >
            Submit Your Story
          </a>
        </div>

      </div>
    </div>
  );
};

export default Stories;
