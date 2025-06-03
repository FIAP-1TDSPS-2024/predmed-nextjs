import Link from "next/link";

interface ActionButtonProps {
  href: string;
  label: string;
  icon?: string;
}

export const ActionButton = ({ href, label, icon }: ActionButtonProps) => {
  return (
    <Link href={href}>
      <button className="mt-4 pr-8 pl-8 bg-[#1E88E5] font-bold p-2 rounded hover:bg-[#114c8f] transition-colors">
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </button>
    </Link>
  );
};
