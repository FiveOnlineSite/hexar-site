type RefSet = {
  main: React.RefObject<SVGPathElement | null>;
  left: React.RefObject<SVGPathElement | null>;
  right: React.RefObject<SVGPathElement | null>;
};

type ConnectorProps = {
  smallRefs: RefSet;  // ✅ for the md/lg/xl SVG
  largeRefs: RefSet;  // ✅ for the 3xl/4xl SVG
};

export default function BracketConnector({ smallRefs, largeRefs }: ConnectorProps) {
  return (
    <div className="flex justify-center w-full">

      {/* Small SVG — md to 2xl */}
      <svg
        className="w-[360px] h-[80px] lg:w-[400px] lg:h-[40px] 4xl:hidden 3xl:hidden 2xl:block xl:block lg:block md:block block"
        viewBox="0 0 480 80"
        fill="none"
      >
        <path ref={(el) => { smallRefs.main.current = el; }} d="M240 0 V30" stroke="white" strokeWidth="2" />
        <path ref={(el) => { smallRefs.left.current = el; }} d="M240 30 H80 Q70 30 70 40 V60" stroke="white" strokeWidth="2" />
        <path ref={(el) => { smallRefs.right.current = el; }} d="M240 30 H400 Q410 30 410 40 V60" stroke="white" strokeWidth="2" />
        <circle cx="70" cy="60" r="4" fill="white" />
        <circle cx="410" cy="60" r="4" fill="white" />
      </svg>

      {/* Large SVG — 3xl and 4xl */}
      <svg
        className="w-[500px] h-[80px] lg:w-[600px] lg:h-[80px] 4xl:block 3xl:block 2xl:hidden xl:hidden lg:hidden md:hidden hidden"
        viewBox="0 0 600 100"
        fill="none"
      >
        <path ref={(el) => { largeRefs.main.current = el; }} d="M300 0 V40" stroke="white" strokeWidth="2" />
        <path ref={(el) => { largeRefs.left.current = el; }} d="M300 40 H70 Q50 40 50 60 V80" stroke="white" strokeWidth="2" />
        <path ref={(el) => { largeRefs.right.current = el; }} d="M300 40 H530 Q550 40 550 60 V80" stroke="white" strokeWidth="2" />
        <circle cx="50" cy="80" r="4" fill="white" />
        <circle cx="550" cy="80" r="4" fill="white" />
      </svg>

    </div>
  );
}