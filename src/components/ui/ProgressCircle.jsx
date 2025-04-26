const ProgressCircle = ({ percentage }) => {
  return (
    <svg width={"9.25rem"} height={"9.25rem"} viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#EAECF0"
        strokeWidth="10"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#279DD4"
        strokeWidth="10"
        strokeDasharray="283"
        strokeDashoffset={(1 - percentage / 100) * 283}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="16"
        fontWeight={600}
        fill="#000"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default ProgressCircle;
