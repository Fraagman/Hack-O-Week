import { useMemo, useState } from "react";

type Option = {
  id: string;
  label: string;
};

type Question = {
  id: number;
  prompt: string;
  options: Option[];
  answerId: string;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    prompt: "Which planet is known as the Red Planet?",
    options: [
      { id: "a", label: "Venus" },
      { id: "b", label: "Mars" },
      { id: "c", label: "Jupiter" },
      { id: "d", label: "Mercury" },
    ],
    answerId: "b",
  },
  {
    id: 2,
    prompt: "What is the process by which plants make their own food?",
    options: [
      { id: "a", label: "Respiration" },
      { id: "b", label: "Photosynthesis" },
      { id: "c", label: "Digestion" },
      { id: "d", label: "Evaporation" },
    ],
    answerId: "b",
  },
  {
    id: 3,
    prompt: "Which number is a prime number?",
    options: [
      { id: "a", label: "21" },
      { id: "b", label: "33" },
      { id: "c", label: "37" },
      { id: "d", label: "39" },
    ],
    answerId: "c",
  },
  {
    id: 4,
    prompt: "What is the capital city of Japan?",
    options: [
      { id: "a", label: "Seoul" },
      { id: "b", label: "Beijing" },
      { id: "c", label: "Tokyo" },
      { id: "d", label: "Bangkok" },
    ],
    answerId: "c",
  },
  {
    id: 5,
    prompt: "Which gas is most abundant in Earth's atmosphere?",
    options: [
      { id: "a", label: "Oxygen" },
      { id: "b", label: "Nitrogen" },
      { id: "c", label: "Carbon Dioxide" },
      { id: "d", label: "Hydrogen" },
    ],
    answerId: "b",
  },
];

export function App() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = QUESTIONS[currentIndex];
  const totalQuestions = QUESTIONS.length;
  const allAnswered = QUESTIONS.every((question) => answers[question.id]);

  const score = useMemo(() => {
    return QUESTIONS.reduce((total, question) => {
      return total + (answers[question.id] === question.answerId ? 1 : 0);
    }, 0);
  }, [answers]);

  const handleSelect = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmit = () => {
    if (allAnswered) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalQuestions - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Quiz Time
              </h1>
              <p className="text-gray-600 mt-2">Test your knowledge</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl px-6 py-3">
                <div className="text-3xl font-bold">{currentIndex + 1}</div>
                <div className="text-xs">of {totalQuestions}</div>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="absolute h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
              style={{ width: `${(Object.keys(answers).length / totalQuestions) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>{Object.keys(answers).length} answered</span>
            <span>{submitted ? "✓ Submitted" : "In progress"}</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex-1">
              {currentQuestion.prompt}
            </h2>
            {submitted && (
              <span
                className={`ml-4 px-4 py-2 rounded-full text-sm font-bold ${
                  answers[currentQuestion.id] === currentQuestion.answerId
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {answers[currentQuestion.id] === currentQuestion.answerId ? "✓ Correct" : "✗ Wrong"}
              </span>
            )}
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentQuestion.id] === option.id;
              const isCorrect = submitted && option.id === currentQuestion.answerId;
              const isWrong = submitted && isSelected && option.id !== currentQuestion.answerId;

              return (
                <label
                  key={option.id}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    isCorrect
                      ? "border-green-400 bg-green-50"
                      : isWrong
                      ? "border-red-400 bg-red-50"
                      : isSelected
                      ? "border-indigo-400 bg-indigo-50"
                      : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    isCorrect
                      ? "border-green-500 bg-green-500"
                      : isWrong
                      ? "border-red-500 bg-red-500"
                      : isSelected
                      ? "border-indigo-500 bg-indigo-500"
                      : "border-gray-300"
                  }`}>
                    {(isSelected || isCorrect) && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option.id}
                    className="hidden"
                    checked={isSelected}
                    onChange={() => handleSelect(currentQuestion.id, option.id)}
                    disabled={submitted}
                  />
                  <span className={`font-medium ${
                    isCorrect ? "text-green-800" : isWrong ? "text-red-800" : "text-gray-700"
                  }`}>
                    {option.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <section className="bg-white rounded-3xl shadow-xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-800 text-lg">
                {submitted ? `Score: ${score}/${totalQuestions}` : "Quiz Summary"}
              </p>
              <p className="text-gray-600 text-sm">
                {submitted
                  ? "Quiz completed!"
                  : allAnswered
                  ? "All questions answered"
                  : `${totalQuestions - Object.keys(answers).length} questions remaining`}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-5 py-2.5 rounded-xl border-2 border-gray-300 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === totalQuestions - 1}
                className="px-5 py-2.5 rounded-xl border-2 border-gray-300 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Next →
              </button>
              {!submitted && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!allAnswered}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 font-bold text-white hover:from-indigo-600 hover:to-purple-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg"
                >
                  Submit
                </button>
              )}
              {submitted && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 font-bold text-white hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg"
                >
                  Retry
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
