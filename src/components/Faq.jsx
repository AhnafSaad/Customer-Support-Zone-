import React from "react";

const Faq = () => {
  // Static FAQ data array
  const faqs = [
    { question: "How do I assign a ticket to myself?", answer: "Simply click on any ticket from the 'Customer Tickets' section and hit the 'Start Working' button in the modal. It will automatically appear in your Task Status." },
    { question: "Can I filter tickets by priority?", answer: "Yes! Use the dropdown menu next to the search bar on the Home page to filter tickets by High, Medium, or Low priority." },
    { question: "Where do resolved tickets go?", answer: "Once you click 'Complete' on a task, it moves to the 'Resolved Task' section and will also be logged in the Reports page." },
    { question: "How do I create a new ticket?", answer: "Click the 'New Ticket' button in the navigation bar to open the creation form and submit a new customer issue." },
  ];

  return (
    <div className="bg-white min-h-screen px-4 md:px-16 py-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-black mb-3">Frequently Asked Questions</h1>
          <p className="text-gray-500">Find quick answers to common questions about using the Support Zone.</p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-gray-50 border border-gray-200 rounded-xl">
              <input type="radio" name="my-accordion-3" defaultChecked={index === 0} /> 
              <div className="collapse-title text-black text-lg font-medium">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600"> 
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Faq;