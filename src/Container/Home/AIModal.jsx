import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AIChatModal = ({ onClose }) => {
  const [question, setQuestion] = useState("Привет!");
  const [chatHistory, setChatHistory] = useState([
    { role: "user", text: "Привет!" },
  ]);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);

  const handleAsk = async (q = question) => {
    if (!q.trim()) return;
    setLoading(true);

    try {
      const response = await axios.post(
        "https://staging.zingo.uz/api/Gemini/ask",
        {
          hashCode:
            "$2y$10$EylyeBAtyJCPoN8TMzmqvuwd.cs6LGYubIeZHfthjzA6XMQUttJHG",
          question: q,
        }
      );

      const aiMessage = {
        role: "ai",
        text: response.data?.content || "Ответ не получен.",
      };
      setChatHistory((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev,
        { role: "ai", text: "Ошибка. Попробуйте снова." },
      ]);
    } finally {
      setLoading(false);
      setQuestion("");
    }
  };

  useEffect(() => {
    handleAsk("Привет!");
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <div className="fixed md:bottom-[130px] md:right-[40px] bottom-[120px] right-[20px] md:w-[423px] md:h-[575px] w-[350px] h-[560px] bg-white rounded-[16px] shadow-lg z-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-[#0067B3] text-white md:p-[20px] p-[10px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/img/AILogo.svg"
            alt="logo"
            className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
          />
          <span className="md:text-[15px] text-[13px] font-light">
            Andeli ИИ Ассистент
          </span>
        </div>
        <Link to={"/ai-assistant"} className="flex items-center gap-2">
          <img
            src="/img/newWindow.svg"
            alt=""
            className="md:h-[22px] md:w-[22px] h-[15px] w-[15px]"
          />
          <h1 className="md:text-[12px] text-[10px] font-medium">
            Открыть в<br /> новом окне
          </h1>
        </Link>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
        {chatHistory.map((msg, idx) => (
          <div className="flex items-end gap-[10px]">
            {msg.role === "ai" && (
              <div className="md:h-[32px] md:w-[32px] h-[24px] w-[24px] rounded-full flex items-center justify-center bg-[#0067B3]">
                <img
                  src="/img/AIButton.svg"
                  alt=""
                  className="md:w-[21.36px] md:h-[15.56px] w-[18.36px] h-[10.56px]"
                />
              </div>
            )}
            <div
              key={idx}
              className={`max-w-[80%] px-3 py-2 rounded-md text-sm ${
                msg.role === "user"
                  ? "ml-auto bg-[#FDEDC7] text-right"
                  : "mr-auto bg-gray-100"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-sm text-gray-500">AI печатает...</div>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="w-full flex items-center gap-2 border-t-1 border-gray-300 ">
        <input
          type="text"
          placeholder="Напишите ..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full rounded-md px-[22px] md:py-[26px] py-[13px] text-sm focus:outline-none "
        />
      </div>
    </div>
  );
};

export default AIChatModal;
