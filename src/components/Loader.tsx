"use client";

type Props = {
  isLoading: boolean;
}

const Loader = ({ isLoading }: Props) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex items-center justify-center">
     <img src="/images/icons/Loader.gif" alt="Loading..." className="w-[200px] h-[200px] object-contain" />
    </div>
  )
}

export default Loader;