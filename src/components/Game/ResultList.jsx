import "./ResultList.css";

export default function ResultList({ value, onResultClick }) {
  const names = [
    "Maria Santos",
    "James Chen",
    "Aisha Patel",
    "Noah Williams",
    "Sofia Rodriguez",
    "Liam O'Connor",
    "Priya Sharma",
    "Alexander Kim",
    "Isabella Martinez",
    "Marcus Johnson",
    "Yuki Tanaka",
    "Benjamin Cohen",
    "Fatima Al-Sayed",
    "Lucas Andrade",
    "Emma Thompson",
    "Omar Hassan",
    "Gabriella Romano",
    "Kai Wong",
    "Zara Sheikh",
    "Daniel Petrov",
    "Maya Gupta",
    "Adrian Torres",
    "Sarah Mitchell",
    "Leo Park",
    "Amara Okafor",
    "Nicolas Laurent",
    "Ava Petersen",
    "Ravi Kumar",
    "Carmen Ruiz",
    "Thomas Anderson",
    "Leila Baghdadi",
    "Marco Rossi",
    "Hannah Lee",
    "Mateo Fernandez",
    "Nina Ivanov",
    "Samuel Wilson",
    "Chiara Conti",
    "Dev Malhotra",
    "Elena Popov",
    "Oliver Schmidt",
    "Mia Nakamura",
    "Carlos Morales",
    "Sophia Clarke",
    "Jamal Ahmed",
    "Valentina Ferrari",
    "Ryan O'Brien",
    "Ananya Singh",
    "Diego Vargas",
    "Lily Zhang",
    "David Kowalski",
  ];
  const resultfilter = names.filter((name) => {
    return name && value && name.toLowerCase().includes(value.toLowerCase());
  });

  const resultsElements = resultfilter.map((name) => {
    return (
      <button
        key={name}
        onClick={() => onResultClick(name)}
        className="result-item"
      >
        {name}
      </button>
    );
  });
  return <div className="result-list">{resultsElements}</div>;
}
