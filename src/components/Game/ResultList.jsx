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
  const hebrewNames = [
    "אברהם כהן",
    "שרה לוי",
    "משה גולדברג",
    "רחל רוזנברג",
    "דוד פרידמן",
    "מרים אזולאי",
    "יעקב ברגר",
    "חנה וайנשטיין",
    "יוסף שפירא",
    "אסתר מלכה",
    "שלמה רובין",
    "רבקה גרין",
    "יצחק קליין",
    "לאה גורדון",
    "דניאל פרץ",
    "תמר שטיין",
    "אהרן רוזן",
    "מיכל ברקוביץ",
    "נתן הורוביץ",
    "שושנה פרידמן",
    "אליהו כץ",
    "נעמי גולדשטיין",
    "שמואל לנדאו",
    "אילנה רוטשילד",
    "אריה שוורץ",
  ];

  //   const resultfilter = names.filter((name) => {
  //     return name && value && name.toLowerCase().includes(value.toLowerCase());
  //   });

  const searchAndSortNames = (names, value) => {
    if (!value) return names;

    const lowercaseValue = value.toLowerCase();

    // Filter names that include the search value
    const filteredNames = names.filter(
      (name) => name && name.toLowerCase().includes(lowercaseValue)
    );

    // Sort into two groups: starts with and includes
    const startsWithNames = [];
    const includesNames = [];

    filteredNames.forEach((name) => {
      if (name.toLowerCase().startsWith(lowercaseValue)) {
        startsWithNames.push(name);
      } else {
        includesNames.push(name);
      }
    });

    // Sort each group alphabetically
    startsWithNames.sort();
    includesNames.sort();

    // Combine the groups
    return [...startsWithNames, ...includesNames];
  };

  const resultsElements = searchAndSortNames(hebrewNames, value).map((name) => {
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
