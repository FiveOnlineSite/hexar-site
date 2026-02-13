type ConnectorRefs = {
  main: React.RefObject<SVGPathElement | null>;
  left: React.RefObject<SVGPathElement | null>;
  right: React.RefObject<SVGPathElement | null>;
};

export default function BracketConnector({ refs }: { refs: ConnectorRefs }) {
  return (
    <div className="flex justify-center">
      <svg
        className="w-[360px] h-[80px] min-[821px]:w-[480px]"
        viewBox="0 0 480 80"
        fill="none"
      >
        <path
          ref={(el) => {
            // eslint-disable-next-line react-hooks/immutability
            refs.main.current = el;
          }}
          d="M240 0 V30"
          stroke="white"
          strokeWidth="2"
        />

        <path
          ref={(el) => {
            // eslint-disable-next-line react-hooks/immutability
            refs.left.current = el;
          }}
          d="M240 30 H80 Q70 30 70 40 V60"
          stroke="white"
          strokeWidth="2"
        />

        <path
          ref={(el) => {
            // eslint-disable-next-line react-hooks/immutability
            refs.right.current = el;
          }}
          d="M240 30 H400 Q410 30 410 40 V60"
          stroke="white"
          strokeWidth="2"
        />

        <circle cx="70" cy="60" r="4" fill="white" />
        <circle cx="410" cy="60" r="4" fill="white" />
      </svg>
    </div>
  );
}
