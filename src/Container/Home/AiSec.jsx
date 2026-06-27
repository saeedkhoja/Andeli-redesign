import React, { useState, useRef } from "react";
import axios from "axios";
import Container from "../../Components/Container";
import Lottie from "lottie-react";
import Loading from "../../assets/AILoading.json";

function AiSec() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const userMessage = { role: "user", text: question };
    setChatHistory((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://staging.calora.uz/api/Gemini/ask",
        {
          hashCode:
            "$2y$10$EylyeBAtyJCPoN8TMzmqvuwd.cs6LGYubIeZHfthjzA6XMQUttJHG",
          question: question,
        }
      );

      const aiMessage = {
        role: "ai",
        text: response.data?.content || "No answer received.",
      };
      setChatHistory((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev,
        { role: "ai", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
      setQuestion("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAsk();
    }
  };

  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [chatHistory, loading]);

  return (
    <Container>
      <div className="flex flex-col bg-[#FAFAFA] shadow-md overflow-hidden my-[32px] rounded-[14px] max-md:mx-[10px]">
        {/* HEADER */}
        <div className="bg-[#0369A1] p-[20px] text-[#F8F8F8] font-light md:text-[15px] text-[12px] flex items-center gap-2 rounded-t-[14px]">
          <img
            src="/img/AILogo.svg"
            className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
            alt="Logo"
          />
          Andeli ИИ Ассистент
        </div>

        {/* CONTENT */}
        <div className="">
          <div>
            <div className="flex flex-col h-[80vh] px-4 pt-4 overflow-y-auto space-y-4">
              {chatHistory?.length === 0 ? (
                <div className="flex items-center justify-center flex-col">
                  <Lottie
                    animationData={Loading}
                    loop
                    autoplay
                    className="h-[300px] w-[300px] "
                  />
                  <h1 className="text-[24px] font-semibold text-[#0369A1]">
                    Чат с ИИ-ассистентом
                  </h1>
                </div>
              ) : (
                <div>
                  {chatHistory.map((msg, idx) => (
                    <div className="flex items-end gap-[10px]">
                      {msg.role === "ai" && (
                        <div className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#0067B3]">
                          <img
                            src="/img/AIButton.svg"
                            alt=""
                            className="w-[21.36px] h-[15.56px]"
                          />
                        </div>
                      )}
                      <div
                        key={idx}
                        className={`max-w-[75%] rounded-lg px-4 py-2 text-sm ${
                          msg.role === "user"
                            ? "ml-auto bg-[#FDEDC7] text-right"
                            : "mr-auto bg-gray-100"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {loading && (
                <div className="mr-auto text-sm text-gray-500">
                  AI is typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="w-full flex items-center gap-2 border-t-1 border-gray-300 ">
              <input
                type="text"
                placeholder="Напишите ..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full rounded-md px-[22px] md:py-[26px] py-[18px] text-sm focus:outline-none "
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AiSec;
